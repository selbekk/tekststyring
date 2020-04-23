import React from "react";
import { Box, Heading, Text, Spinner, Stack } from "@chakra-ui/core";
import { getApp, getTextKeysForAppId } from "../api";
import useSWR from "swr";
import { useParams, Link } from "react-router-dom";
import { FullPageSpinner } from "../components/FullPageSpinner";
import { AddText } from "../components/AddText";
import { Layout } from "../components/Layout";
import { useTexts } from "../components/LanguageContext";

export const AppPage: React.FC = () => {
  const { appId } = useParams();
  const { data: appData } = useSWR(`app-${appId}`, () => getApp(appId!));
  const { data: textsData } = useSWR(`texts-${appId}`, () =>
    getTextKeysForAppId(appId!)
  );
  const t = useTexts();
  if (!appData) {
    return <FullPageSpinner />;
  }
  return (
    <Layout title={appData.name}>
      <Heading>{appData.name}</Heading>
      <Text>{appData.description}</Text>
      <AddText appId={appId!} />
      {textsData ? (
        <Stack spacing={3}>
          <Heading as="h3">{t("appSide.tekster.tittel")}</Heading>
          {textsData.map((textKey) => (
            <Box
              p={6}
              borderWidth={2}
              backgroundColor="#ececec"
              as={(props) => <Link to={`/${appId}/${textKey}`} {...props} />}
              key={textKey}
            >
              <Text>{textKey}</Text>
            </Box>
          ))}
        </Stack>
      ) : (
        <Spinner />
      )}
    </Layout>
  );
};
