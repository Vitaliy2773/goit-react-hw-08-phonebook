import React from 'react';
import { List, ListItem, Text, Center } from '@chakra-ui/react';
import ContactItem from 'components/contactItem/ContactItem';

export default function ContactList({ contacts, onDeleteItem }) {
  if (!contacts || contacts.length === 0) {
    return (
      <Center>
        <Text fontSize="xl" color="gray.600" my={4}>
          No contacts
        </Text>
      </Center>
    );
  }

  return (
    <List spacing={4} boxShadow="md" p={4} borderRadius="lg">
      {contacts.map(contact => (
        <ListItem
          key={contact.id}
          d="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <ContactItem contact={contact} onDeleteItem={onDeleteItem} />
        </ListItem>
      ))}
    </List>
  );
}
