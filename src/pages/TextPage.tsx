import React from "react";
import {
  Text,
  Heading,
  FormControl,
  SimpleGrid,
  Textarea,
  FormLabel,
  Stack,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/core";
import { useParams, useHistory } from "react-router-dom";
import useSWR from "swr";
import * as api from "../api";
import { FullPageSpinner } from "../components/FullPageSpinner";
import { Layout } from "../components/Layout";
import { useTexts } from "../components/LanguageContext";

export const TextPage: React.FC = () => {
  const { appId, textKey } = useParams();
  const { data: appData } = useSWR(`app-${appId}`, () => api.getApp(appId!));
  const { data: textData } = useSWR(`text-${appId}-${textKey}`, () =>
    api.getTextObject(appId!, textKey!)
  );
  const { goBack } = useHistory();
  const t = useTexts();

  if (!textData || !appData) {
    return <FullPageSpinner />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    api.createOrUpdateTexts(
      appId!,
      textKey!,
      Array.from(formData.entries()).reduce(
        (acc, [key, value]) => ({ ...acc, [key]: value }),
        {}
      )
    );
    goBack();
  };

  const handleDelete = () => {
    if (window.confirm(t("tekstSide.faresone.erDuSikker"))) {
      api.deleteText(textKey!);
      goBack();
    }
  };

  return (
    <Layout title={textKey!}>
      <Stack spacing={6}>
        <Heading>{textKey}</Heading>
        {textData[0]?.description && <Text>{textData[0].description}</Text>}
        <Box
          backgroundColor="green.100"
          p={6}
          borderWidth={1}
          borderColor="green.700"
          rounded="md"
        >
          <Heading as="h3" fontSize="xl">
            {t("tekstside.tips.tittel")}
          </Heading>
          <Text>{t("tekstside.tips.tekst")}</Text>
        </Box>
        <Stack spacing={6} as="form" onSubmit={handleSubmit}>
          {appData.languages.map((languageCode) => (
            <Stack key={languageCode}>
              <Heading as="h3" fontSize="xl">
                {t("tekstSide.språk.tittel")}: {languageCode}
              </Heading>
              <SimpleGrid
                columns={[1, 2, appData.environments.length]}
                gridGap={3}
              >
                {appData.environments.map((environment) => (
                  <FormControl key={environment}>
                    <FormLabel htmlFor={`${languageCode}-${environment}`}>
                      {environment}
                    </FormLabel>
                    <Textarea
                      defaultValue={
                        textData.find(
                          (textObject) =>
                            textObject.language === languageCode &&
                            textObject.environment === environment
                        )?.value ?? ""
                      }
                      name={`${languageCode}-${environment}`}
                      id={`${languageCode}-${environment}`}
                    />
                  </FormControl>
                ))}
              </SimpleGrid>
            </Stack>
          ))}
          <ButtonGroup>
            <Button variant="solid" variantColor="green" type="submit">
              {t("tekstSide.knapp.publiser")}
            </Button>
          </ButtonGroup>
        </Stack>
        <Box
          backgroundColor="red.100"
          borderWidth={1}
          borderColor="red.900"
          p={6}
          rounded="md"
        >
          <Stack spacing={3}>
            <Heading as="h3">{t("tekstSide.faresone.tittel")}</Heading>
            <Text>{t("tekstSide.faresone.tekst")}</Text>
            <ButtonGroup>
              <Button variant="solid" variantColor="red" onClick={handleDelete}>
                {t("tekstSide.faresone.sletteknapp")}
              </Button>
            </ButtonGroup>
          </Stack>
        </Box>
      </Stack>
    </Layout>
  );
};
