import { combineReducers } from 'redux';
import contactReducer from './contactsList/contactSlice';
import filterReducer from './contactsFilters/filterSlice';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filters: filterReducer,
});

export default rootReducer;
