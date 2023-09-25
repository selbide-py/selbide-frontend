'use client';
import React from 'react';
import { Box, Heading, Button, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
function Navbar1() {
  const pathname = usePathname();
  return (
    <div suppressHydrationWarning={true}>
      <Box display='flex' bg='slate.900' p={4} justifyContent='space-between'>
        <Link href='/'>
          <div>
            <Heading color='white'>
              <span>Sel</span>
              <span className='text-teal-400'>Bide</span>
            </Heading>
            <Text fontSize='sm' fontFamily='sans-serif' color='white'>
              Your legal help assistant
            </Text>
          </div>
        </Link>
        <div className='flex gap-4 items-center'>
          <Link href='/document'>
            <Button
              variant='unstyled'
              color={pathname == '/document' ? 'teal.300' : 'white'}
              className='flex items-center p-3 hover:text-teal-500'
              size='lg'
            >
              Document
            </Button>
          </Link>
          <Link href='/assistant'>
            <Button
              variant='unstyled'
              color={pathname == '/assistant' ? 'teal.300' : 'white'}
              className='flex items-center p-3 hover:text-teal-500'
              size='lg'
            >
              Assistant
            </Button>
          </Link>
        </div>
        <div className='flex items-center'>
          <Button
            variant='unstyled'
            className='bg-[#64CCC5] text-white p-3 flex items-center hover:bg-transparent hover:text-teal-500'
          >
            Sign Up
          </Button>
        </div>
      </Box>
    </div>
  );
}

export default Navbar1;
