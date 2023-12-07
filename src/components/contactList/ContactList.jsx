import React from 'react';
import { List, ListItem } from '@chakra-ui/react';
import ContactItem from 'components/contactItem/ContactItem';

export default function ContactList({ contacts, onDeleteItem }) {
  if (!contacts || contacts.length === 0) {
    return <p>Немає контактів</p>;
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
