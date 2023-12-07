import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Button, Box } from '@chakra-ui/react';

export default function ContactForm({ onSubmit }) {
  const [contact, setContact] = useState({ name: '', number: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setContact(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(contact);
    setContact({ name: '', number: '' });
  };

  return (
    <Box width="30%" margin="0 auto">
      <form onSubmit={handleSubmit}>
        <FormControl p={4} borderRadius="lg" boxShadow="md">
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            id="name"
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
          <FormLabel htmlFor="number">Number</FormLabel>
          <Input
            id="number"
            type="tel"
            name="number"
            value={contact.number}
            onChange={handleChange}
            required
          />
          <Button mt={4} colorScheme="blue" type="submit">
            Add Contact
          </Button>
        </FormControl>
      </form>
    </Box>
  );
}
