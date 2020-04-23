import React from "react";
import { Box, Heading, Text } from "@chakra-ui/core";

export const AppPage: React.FC = () => {
  const appName = "Datautlevering";
  const appDescription = "Datautlevering er en app for utlevering av data.";
  return (
    <Box>
      <Heading>{appName}</Heading>
      <Text>{appDescription}</Text>
      <Text>
        Her vil du finne alle tekstene til {appName}. De er sortert etter
        "nøkkel", men du kan også søke etter teksten du leter etter.
      </Text>
    </Box>
  );
};
