import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, Router } from 'react-router-dom';
import Navigation from 'Layout/Layout.jsx';
import {
  fetchContacts,
  addContact,
  deleteContact,
  setFilter,
} from './contactsSlice/contactsSlice.jsx';
import Loader from './Loader/Loader.jsx';
import ContactForm from './contactForm/ContactForm.jsx';
import Filter from './filter/Filter.jsx';
import ContactList from './contactList/ContactList.jsx';
import css from './Contacts.module.css';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

export default function App() {
  const dispatch = useDispatch();
  const {
    items: contacts,
    isLoading,
    error,
    filter,
  } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = (name, number) => {
    if (!Array.isArray(contacts)) {
      return;
    }

    const contactExists = contacts.some(contact => {
      if (typeof contact.name === 'string') {
        return contact.name.toLowerCase() === name.toLowerCase();
      }
      return false;
    });

    if (contactExists) {
      alert(`Contact with the name ${name} already exists.`);
      return;
    }

    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const changeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  const filteredContacts =
    contacts &&
    contacts.filter(
      contact =>
        typeof contact.name === 'string' &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2 className={css.title}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList
        contacts={filteredContacts}
        onDeleteItem={handleDeleteContact}
      />

      <Navigation>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Navigation>
    </div>
  );
}
