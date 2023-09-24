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

  async function getSummary() {
    try {
      const res = await axios.post(
        'https://web-production-8d29.up.railway.app/summarize',
        {
          id: `${id}`,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      setSummary(res.data.sun);
    } catch (error) {
      console.error('Error fetching Summary:', error);
    }
  }
  console.log(summary);
  async function handleOpen() {
    await getSummary();
    onOpen();
  }

  return (
    <>
      <Button variant='outline' color='white' onClick={handleOpen}>
        Summarise
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
