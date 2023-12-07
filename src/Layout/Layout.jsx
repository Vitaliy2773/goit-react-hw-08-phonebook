import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Flex, Link } from '@chakra-ui/react';
import UserMenu from 'components/userMenu/UserMenu';
import { selectAuthenticated } from 'auth/auth.selectors';

const Navigation = () => {
  const isAuthenticated = useSelector(selectAuthenticated);

  return (
    <Flex
      as="nav"
      bg="teal.500"
      color="white"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
    >
      {!isAuthenticated ? (
        <>
          <Link as={NavLink} to="/register" p={2}>
            Register
          </Link>
          <Link as={NavLink} to="/login" p={2}>
            Login
          </Link>
        </>
      ) : (
        <Link as={NavLink} to="/contacts" p={2}>
          Contacts
        </Link>
      )}
      <UserMenu />
    </Flex>
  );
};

export default Navigation;
