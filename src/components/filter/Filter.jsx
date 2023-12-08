import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'contacts/contacts.reducer';
import { Input, Box } from '@chakra-ui/react';

export default function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter) || '';

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box p={4} borderRadius="lg" boxShadow="md" width="30%" margin="0 auto">
      <Input
        placeholder="Search contacts"
        onChange={handleChange}
        value={filterValue}
      />
    </Box>
  );
}
