import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  deleteContact,
  addContact,
} from './contacts-operations';

const pending = state => {
  state.isLoading = true;
  state.error = null;
};

const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // addContactLoading: state => {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // addContactSuccess: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.items.push(payload);
    // },
    // addContactError: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, rejected)
      .addCase(addContact.pending, pending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(addContact.rejected, rejected)
      .addCase(deleteContact.pending, pending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(deleteContact.rejected, rejected);
  },
});

export default contactSlice.reducer;
