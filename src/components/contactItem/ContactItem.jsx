import React from 'react';
import { Button, Text, Box, Flex } from '@chakra-ui/react';

export default function ContactItem({ contact, onDeleteItem }) {
  return (
    <Flex justifyContent="center">
      <Box width="40%" p={3} my={2} boxShadow="md" borderRadius="md" bg="white">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="md">
            {contact.name}: {contact.number}
          </Text>
          <Button
            colorScheme="red"
            size="sm"
            onClick={() => onDeleteItem(contact.id)}
          >
            Delete
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
