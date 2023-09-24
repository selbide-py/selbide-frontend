"use client"
import React, { useState, useEffect } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';
import Cookies from 'js-cookie';

const LoginModal = () => {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const userIdCookie = Cookies.get('user_id');
    if (userIdCookie) {
      onClose();
    }
  }, []);

  const handleLogin = async () => {
  try {
    const response = await axios.post('https://web-production-8d29.up.railway.app/login', {
      email: email,
      password: password,
    });

    // Extract user_id from the response
    const { user_id } = response.data;

    // Set the user_id as a cookie
    Cookies.set('user_id', user_id);

    // Log the user_id to the console
    console.log(user_id);

    // Close the modal
    onClose(); // Close the modal after successful login
  } catch (error) {
    console.error('Login failed:', error);
  }
};

  return (
    <Modal isOpen={!Cookies.get('user_id')} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Email"
            mb="3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="green" onClick={handleLogin}>
            Login
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
