import React from "react";
import { Text, Box, Heading, Button } from "@chakra-ui/core";
import { useTexts, useLanguage } from "../components/LanguageContext";

export const LandingPage: React.FC = () => {
  const t = useTexts();
  const [language, changeLanguage] = useLanguage();
  return (
    <Box>
      <Heading>{t("landingPage.heading")}</Heading>
      <Text>{t("landingPage.description")}</Text>
      <Button
        variant="solid"
        variantColor="green"
        onClick={() => changeLanguage(language === "en" ? "nb" : "en")}
      >
        {t("landingPage.chooseLanguage.button")}
      </Button>
    </Box>
  );
};
