import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchContactLoading: state => {
      state.isLoading = true;
    },
    fetchContactSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    fetchContactError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    addContact: {
      reducer: (state, { payload }) => [...state, payload],
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteContact: (state, { payload }) =>
      state.filter(item => item.id !== payload),
  },
});

export const {
  addContact,
  deleteContact,
  fetchContactLoading,
  fetchContactSuccess,
  fetchContactError,
} = contactSlice.actions;
export default contactSlice.reducer;
