import { createSlice } from '@reduxjs/toolkit';

const filtreSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: { filterContact: (state, { payload }) => (state = payload) },
});

export const { filterContact } = filtreSlice.actions;
export default filtreSlice.reducer;
