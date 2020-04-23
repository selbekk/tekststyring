import React from "react";
import { Box, Heading, Flex, IconButton } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { useLanguage, useTexts } from "./LanguageContext";

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
  const [language, setLanguage] = useLanguage();
  const t = useTexts();
  return (
    <Flex flexDirection="column" minHeight="100vh" backgroundColor="#f5f5f5">
      <Box backgroundColor="#45515A" color="white" py={[3]} mb={6}>
        <Heading as="h1" m={0} textAlign="center">
          <Box as={(props) => <Link to="/" {...props} />}>
            {t("app.header.tittel")}
          </Box>
        </Heading>
        <IconButton
          icon={() => (
            <span role="img" aria-label={t("app.header.endreSpråk")}>
              {language === "en" ? "🇬🇧" : "🇳🇴"}
            </span>
          )}
          onClick={() => setLanguage(language === "en" ? "nb" : "en")}
          aria-label={t("app.header.endreSpråk")}
          position="absolute"
          variant="solid"
          top={3}
          right={3}
        />
      </Box>
      <Box
        maxWidth={1000}
        mx="auto"
        px={[6, 3, 0]}
        flex="1"
        width="100%"
        mb={12}
      >
        {children}
      </Box>
    </Flex>
  );
};
