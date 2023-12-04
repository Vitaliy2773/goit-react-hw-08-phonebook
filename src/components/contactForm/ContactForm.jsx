import React, { useState } from 'react';
import css from '../Contacts.module.css';

export default function ContactForm({ onSubmit }) {
  const [contact, setContact] = useState({ name: '', number: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setContact(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(contact);
    setContact({ name: '', number: '' });
  }

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={contact.name}
          className={css.input}
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          onChange={handleChange}
          value={contact.number}
          className={css.input}
          required
        />
      </label>
      <button type="submit" className={css.buttonAddContact}>
        Add contact
      </button>
    </form>
  );
}
