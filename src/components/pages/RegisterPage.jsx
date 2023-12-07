import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'auth/auth.reducer';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
} from '@chakra-ui/react';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (password.length < 7) {
      alert('Password must be at least 7 characters long.');
      return;
    }
    dispatch(registerThunk({ name, email, password }));
  };

  return (
    <Box
      p={8}
      maxWidth="400px"
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      margin="20px auto"
    >
      <form onSubmit={onSubmit}>
        <VStack spacing={4}>
          <FormControl id="userName" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="userEmail" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="best@mail.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="userPassword" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="*******"
              minLength={7}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormControl>
          <Button width="full" mt={4} type="submit" colorScheme="teal">
            Sign Up
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default RegisterPage;
