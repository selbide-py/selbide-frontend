import React from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
function Navbar1() {
  return (
    <>
      <Box display='flex' bg='slate.900' p={4} justifyContent='space-between'>
        <div>
          <Heading color='white'>Selbide</Heading>
          <Text fontSize='sm' fontFamily='sans-serif' color='white'>
            Your legal help assistant
          </Text>
        </div>
        <div className='flex gap-4 items-center'>
          <Link href='/assistant'>
            <Button
              variant='unstyled'
              color='white'
              className='flex items-center p-3 hover:text-teal-500'
              size='lg'
            >
              Assistant
            </Button>
          </Link>
          <Link href='/'>
            <Button
              variant='unstyled'
              color='white'
              className='flex items-center p-3 hover:text-teal-500'
              size='lg'
            >
              Document
            </Button>
          </Link>
        </div>
        <div className='flex items-center'>
          <Button
            variant='unstyled'
            className='bg-teal-500 text-white p-3 flex items-center hover:bg-transparent hover:text-teal-500'
          >
            Sign Up
          </Button>
        </div>
      </Box>
    </>
  );
}

export default Navbar1;
