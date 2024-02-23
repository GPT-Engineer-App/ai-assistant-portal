import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import ChatBot from "../components/ChatBot";

const HelpCenter = () => {
  return (
    <Box>
      <Heading>Help Center</Heading>
      <Text>Welcome to the Help Center. How can we assist you?</Text>
      <ChatBot />
    </Box>
  );
};

export default HelpCenter;
