import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactApi from '../../api/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/featchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await contactApi.requestContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, { rejectWithValue }) => {
    try {
      const data = await contactApi.requestAddContact(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: ({ name }, { getState }) => {
      const { contacts } = getState();
      const normalizedName = name.toLowerCase();
      const dublicate = contacts.items.find(item => {
        const normalizedCurrentName = item.name.toLowerCase();
        return normalizedCurrentName === normalizedName;
      });
      if (dublicate) {
        alert(`Contact ${name} already in list`);
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await contactApi.requestDeleteContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
