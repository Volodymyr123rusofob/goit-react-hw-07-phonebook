import { combineReducers } from 'redux';
import contactReducer from './contactsList/contactSlice';
import filterReducer from './contactsFilters/filterSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: contactReducer,
  filters: filterReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
