import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.100">
      <VStack spacing={4} p={8} boxShadow="md" bg="white" borderRadius="md">
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>
        <Button leftIcon={<FaSignInAlt />} colorScheme="blue" w="full">
          Login
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
