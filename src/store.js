import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './components/contactsSlice/contactsSlice.jsx';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
