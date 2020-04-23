import React from "react";
import { Text, Box, Heading } from "@chakra-ui/core";
import { Link } from "react-router-dom";

export const LandingPage: React.FC = () => {
  return (
    <Box>
      <Heading>Velkommen til tekststyring!</Heading>
      <Text>
        Her er det ikke så mye lenger. Men du kan jo{" "}
        <Link to="/apper">velge en app</Link>?
      </Text>
    </Box>
  );
};
