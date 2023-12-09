import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'auth/auth.reducer';
import { selectAuthenticated } from 'auth/auth.selectors';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Box,
} from '@chakra-ui/react';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectAuthenticated);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/contacts');
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk({ email, password }));
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
            Sign In
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default LoginPage;
