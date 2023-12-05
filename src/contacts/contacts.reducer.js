import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { instance } from 'auth/auth.reducer';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/contacts');
      console.log('Fetched contacts:', data);
      return data;
    } catch (err) {
      console.error('Error fetching contacts:', err);
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/add',
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/contacts', formData);
      console.log('Added contact:', data);
      return data;
    } catch (err) {
      console.error('Error adding contact:', err);
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/delete',
  async (contactId, { rejectWithValue }) => {
    try {
      await instance.delete(`/contacts/${contactId}`);
      console.log('Deleted contact ID:', contactId);
      return contactId;
    } catch (err) {
      console.error('Error deleting contact:', err);
      return rejectWithValue(err.response ? err.response.data : err.message);
    }
  }
);

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        console.log('Contacts fetch successful', payload);
        state.isLoading = false;
        state.contacts = payload;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.contacts = [...state.contacts, payload];
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      })
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          addContactThunk.pending,
          deleteContactThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          addContactThunk.rejected,
          deleteContactThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
