import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  const { contacts, isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Помилка завантаження контактів: {error}</p>;
  }

  return (
    <div>
      <h1>Контакти</h1>
      <ContactForm onSubmit={handleAddContact} />
      <Filter />
      <ContactList
        contacts={Array.isArray(contacts) ? contacts : []}
        onDeleteItem={handleDeleteContact}
      />
    </div>
  );
};

export default ContactsPage;
