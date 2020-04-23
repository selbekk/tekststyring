import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Spinner,
  Stack,
} from "@chakra-ui/core";
import useSWR from "swr";
import * as api from "../api";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { useTexts } from "../components/LanguageContext";

export const AppListPage: React.FC = () => {
  const { data } = useSWR("apps", api.getApps);
  const t = useTexts();
  return (
    <Layout title={t("appListeSide.tittel")}>
      <Stack spacing={6}>
        <Heading>{t("appListeSide.tittel")}</Heading>
        <Text>{t("appListeSide.ingress")}</Text>
        {data ? (
          <SimpleGrid columns={[1, 2, 3, 4]} gridGap={3}>
            {data.map((app) => (
              <Box
                key={app.id}
                p={6}
                borderWidth={1}
                backgroundColor="#ececec"
                as={(props) => <Link to={`/${app.id}`} {...props} />}
              >
                <Text fontSize="2xl">{app.name}</Text>
              </Box>
            ))}
          </SimpleGrid>
        ) : (
          <Spinner>{t("appListeSide.lastetekst")}</Spinner>
        )}
      </Stack>
    </Layout>
  );
};
