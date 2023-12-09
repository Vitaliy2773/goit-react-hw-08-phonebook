import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from 'contacts/contacts.reducer';
import {
  selectContacts,
  selectContactsIsLoading,
  selectContactsError,
  selectContactsFilter,
} from 'contacts/contacts.selectors';
import ContactForm from 'components/contactForm/ContactForm';
import ContactList from 'components/contactList/ContactList';
import Filter from 'components/filter/Filter';
import Loader from 'components/Loader/Loader';
import { Heading, Text } from '@chakra-ui/react';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const filter = useSelector(selectContactsFilter) || '';

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleAddContact = newContact => {
    dispatch(addContactThunk(newContact));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  const filteredContacts = contacts.filter(
    contact =>
      typeof contact.name === 'string' &&
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Heading as="h1" size="xl" mb={4} textAlign="center">
        Contacts
      </Heading>
      {error && (
        <Text color="red.500" mb={4}>
          Error loading contacts: {error.message || error.toString()}
        </Text>
      )}
      <ContactForm onSubmit={handleAddContact} />
      <Filter />
      <ContactList
        contacts={filteredContacts}
        onDeleteItem={handleDeleteContact}
      />
    </div>
  );
};

export default ContactsPage;
