import React from "react";
import useSWR from "swr";
import { getTexts, AppTextsType } from "../api";
import { Spinner, Flex } from "@chakra-ui/core";

type LanguageContextType = {
  language: string;
  changeLanguage: (textKey: string) => void;
  texts: AppTextsType;
};
const LanguageContext = React.createContext<LanguageContextType | null>(null);

type LanguageProviderProps = {
  defaultLanguage: string;
  supportedLanguages: string[];
};
export const LanguageProvider: React.FC<LanguageProviderProps> = (props) => {
  const [currentLanguage, setCurrentLanguage] = React.useState(
    props.defaultLanguage
  );
  const { data } = useSWR(currentLanguage, () =>
    getTexts("tekststyring", "production", currentLanguage)
  );
  const contextValue = React.useMemo(
    () => ({
      language: currentLanguage,
      changeLanguage: (newLanguage: string) => {
        setCurrentLanguage(newLanguage);
      },
      texts: data as AppTextsType,
    }),
    [data, currentLanguage]
  );
  if (!data) {
    return (
      <Flex minHeight="100vh" justifyContent="center" alignItems="center">
        <Spinner>Henter tekster</Spinner>
      </Flex>
    );
  }
  return <LanguageContext.Provider value={contextValue} {...props} />;
};

export const useTexts = () => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error("Du må wrappe appen din i en LanguageProvider-komponent");
  }
  return (key: string) => context.texts[key] || `UKNOWN PROPERTY ${key}`;
};

export const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error("Du må wrappe appen din i en LanguageProvider-komponent");
  }
  return [context.language, context.changeLanguage] as [
    typeof context.language,
    typeof context.changeLanguage
  ];
};
