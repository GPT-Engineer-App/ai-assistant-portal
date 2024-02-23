import React, { useState } from "react";
import { Box, Input, Button, VStack, Text } from "@chakra-ui/react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, sender: "user" }];
      setMessages(newMessages);
      setInput("");
      setTimeout(() => {
        setMessages([...newMessages, { text: "How can I assist you?", sender: "bot" }]);
      }, 1000);
    }
  };

  return (
    <Box p={4} bg="gray.100" borderRadius="md" boxShadow="base">
      <VStack spacing={4} align="stretch">
        {messages.map((message, index) => (
          <Box key={index} alignSelf={message.sender === "bot" ? "flex-start" : "flex-end"}>
            <Text fontSize="md" borderRadius="md" bg={message.sender === "bot" ? "blue.100" : "green.100"} p={2}>
              {message.text}
            </Text>
          </Box>
        ))}
        <Input placeholder="Type your message..." value={input} onChange={(e) => setInput(e.target.value)} />
        <Button colorScheme="blue" onClick={handleSendMessage}>
          Send
        </Button>
      </VStack>
    </Box>
  );
};

export default ChatBot;
