import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Heading, Text, Box, Center, VStack } from '@chakra-ui/react';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from 'components/contactsSlice/contactsSlice';
import ContactForm from 'components/contactForm/ContactForm';
import ContactList from 'components/contactList/ContactList';
import Filter from 'components/filter/Filter';
import Loader from 'components/Loader/Loader';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(
    contact =>
      typeof contact.name === 'string' &&
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Center mt={6}>
        <Text fontSize="xl" color="red.500">
          Помилка завантаження контактів: {error}
        </Text>
      </Center>
    );
  }

  return (
    <Box px={4} py={6} maxWidth="1500px" margin="auto">
      <VStack spacing={6} align="stretch">
        <Center>
          <Heading as="h1" size="xl">
            Контакти
          </Heading>
        </Center>
        <ContactForm onSubmit={handleAddContact} />
        <Filter />
        {contacts.length === 0 ? (
          <Text fontSize="2xl" color="gray.600" textAlign="center" mt={4}>
            Немає контактів
          </Text>
        ) : (
          <ContactList
            contacts={filteredContacts}
            onDeleteItem={handleDeleteContact}
          />
        )}
      </VStack>
    </Box>
  );
};

export default ContactsPage;
