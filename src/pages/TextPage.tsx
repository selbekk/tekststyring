import React from "react";
import { Text, Box, Heading } from "@chakra-ui/core";
import { useParams } from "react-router-dom";

export const TextPage: React.FC = () => {
  const { textKey } = useParams();
  const textDescription = "Søkeknapp-teksten på finn eiers kjøretøy-viewet";
  return (
    <Box>
      <Heading>{textKey}</Heading>
      {textDescription && <Text>{textDescription}</Text>}
    </Box>
  );
};
