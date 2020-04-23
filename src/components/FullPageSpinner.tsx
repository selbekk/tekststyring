import React from "react";
import { Flex, Spinner } from "@chakra-ui/core";

export const FullPageSpinner: React.FC = (props) => {
  return (
    <Flex flex="1" justifyContent="center" alignItems="center">
      <Spinner size="xl">{props.children}</Spinner>
    </Flex>
  );
};
