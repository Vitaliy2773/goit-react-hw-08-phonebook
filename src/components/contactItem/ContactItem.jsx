import React from 'react';
import { ListItem, Button, Text } from '@chakra-ui/react';

export default function ContactItem({ contact, onDeleteItem }) {
  return (
    <ListItem d="flex" justifyContent="space-between" alignItems="center">
      <Text fontSize="lg">
        {contact.name}: {contact.number}
      </Text>
      <Button
        colorScheme="red"
        size="sm"
        onClick={() => onDeleteItem(contact.id)}
      >
        Delete
      </Button>
    </ListItem>
  );
}
