import React from "react";
import useSWR from "swr";
import * as api from "../api";
import { FullPageSpinner } from "./FullPageSpinner";
import { usePersistedState } from "../hooks/usePersistedState";

type LanguageContextType = {
  language: string;
  changeLanguage: (textKey: string) => void;
  texts: api.AppTextsType;
};
const LanguageContext = React.createContext<LanguageContextType | null>(null);

type LanguageProviderProps = {
  defaultLanguage: string;
  supportedLanguages: string[];
};
export const LanguageProvider: React.FC<LanguageProviderProps> = (props) => {
  const [currentLanguage, setCurrentLanguage] = usePersistedState(
    "language",
    props.defaultLanguage
  );

  const { data: texts } = useSWR(currentLanguage, () =>
    api.getTexts("tekststyring", "production", currentLanguage)
  );
  const contextValue = React.useMemo(
    () => ({
      language: currentLanguage,
      changeLanguage: (newLanguage: string) => {
        setCurrentLanguage(newLanguage);
      },
      texts: texts as api.AppTextsType,
    }),
    [texts, currentLanguage, setCurrentLanguage]
  );
  if (!texts) {
    return <FullPageSpinner />;
  }
  return <LanguageContext.Provider value={contextValue} {...props} />;
};

export const useTexts = () => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error("Du må wrappe appen din i en LanguageProvider-komponent");
  }
  return (key: string) =>
    context.texts[key] || `💥 UNKNOWN PROPERTY "${key}" 💥`;
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
