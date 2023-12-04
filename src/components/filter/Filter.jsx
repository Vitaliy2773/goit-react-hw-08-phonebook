import React from 'react';
import css from '../Contacts.module.css';

export default function Filter({ value, onChange }) {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        aria-label="Search contacts"
        onChange={onChange}
        value={value}
        className={css.input}
      />
    </label>
  );
}
