import React from 'react';
import ContactItem from 'components/contactItem/ContactItem';
import css from '../Contacts.module.css';

export default function ContactList({ contacts, onDeleteItem }) {
  if (!contacts || contacts.length === 0) {
    return <p>Немає контактів</p>;
  }
  return (
    <ul className={css.contactsList}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </ul>
  );
}
