import React from 'react';
import css from '../Contacts.module.css';

export default function ContactItem({ contact, onDeleteItem }) {
  return (
    <li className={css.item}>
      {contact.name}: {contact.number}
      <button
        onClick={() => onDeleteItem(contact.id)}
        className={css.btnDelete}
      >
        Delete
      </button>
    </li>
  );
}
