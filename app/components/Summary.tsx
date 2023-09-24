'use client';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  // ModalCloseButton,
} from '@chakra-ui/react';
import { Button, useDisclosure } from '@chakra-ui/react';
import Cookies from 'js-cookie';

const id = Cookies.get('user_id');
console.log('cookie', id);

const Summary = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function getSummary() {
    try {
      const res = await axios.post(
        'https://web-production-8d29.up.railway.app/summarize',
        {
          user_id: `${id}`,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      setSummary(res.data.sun);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching Summary:', error);
    }
  }

  async function handleOpen() {
    setIsLoading(true);
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    await getSummary();
    onOpen();
  }
  console.log(isLoading);
  return (
    <>
      <Button
        isLoading={isLoading}
        variant='outline'
        color='white'
        onClick={handleOpen}
      >
        Summarize
      </Button>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size='full'
      >
        <ModalOverlay />
        <ModalContent color='white' bg='gray.900'>
          <ModalHeader>Legalised Summary</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody pb={6}>{summary}</ModalBody>
          <ModalFooter>
            <Button variant='outline' colorScheme='white' onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Summary;
