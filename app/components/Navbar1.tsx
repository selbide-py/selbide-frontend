import React from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
function Navbar1() {
  return (
    <>
      <Box display='flex' bg='slate-900' p={4} justifyContent='space-between'>
        <div>
          <Heading color='white'>Selbide</Heading>
          <Text fontSize='sm' fontFamily='sans-serif' color='white'>Your legal help assistant</Text>
        </div>

        <Button colorScheme='teal'>Sign Up</Button>
      </Box>
    </>
  );
}

export default Navbar1;
