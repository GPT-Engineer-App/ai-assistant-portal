import React from "react";
import { Box, Button, Heading, Text, VStack, Input, Link, useToast, Image, extendTheme, ChakraProvider } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

// Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
});

const Index = () => {
  const toast = useToast();

  const handleSubscribe = () => {
    // Handle subscription logic here
    // For example, send a request to your backend to process the subscription
    // and then provide feedback to the user with a toast notification
    toast({
      title: "Subscription Successful!",
      description: "You've been added to the premium channel.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" p={10} bg="green.200" minHeight="100vh">
        <VStack spacing={8}>
          <Image src="https://images.unsplash.com/photo-1686191567800-60d9f7c0ec92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBhaSUyMGxvZ298ZW58MHx8fHwxNzA4NzI1ODMyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Logo" boxSize="150px" objectFit="cover" />
          <Heading as="h1" size="2xl" fontWeight="bold">
            AI Dirbtinis Intelektas
          </Heading>
          <Text fontSize="xl">Štai sąrašas AI programų, kurios pravers uždirbant:</Text>
          <Link href="/help-center">
            <Button colorScheme="blue" size="md">
              Help Center
            </Button>
          </Link>
          <Link href="https://docs.google.com/spreadsheets/d/17q3g-R7k33qPPwSVXbKnN49Z_ThFg8DWpLoC-JQXf8w/edit?usp=drivesdk" isExternal>
            <Button rightIcon={<FaArrowRight />} colorScheme="teal" size="lg">
              Sąrašas
            </Button>
          </Link>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
