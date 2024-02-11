import * as contactApi from '../../api/contacts-api';
import {
  fetchContactLoading,
  fetchContactSuccess,
  fetchContactError,
  addContactLoading,
  addContactSuccess,
  addContactError,
  deleteContactLoading,
  deleteContactSuccess,
  deleteContactError,
} from './contactSlice';

export const fetchContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(fetchContactLoading());
      const data = await contactApi.requestContacts();
      dispatch(fetchContactSuccess(data));
    } catch (error) {
      dispatch(fetchContactError(error.message));
    }
  };
  return func;
};

export const addContact = body => {
  const func = async dispatch => {
    try {
      dispatch(addContactLoading());
      const data = await contactApi.requestAddContact(body);
      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error.message));
    }
  };
  return func;
};

export const deleteContact = id => {
  const func = async dispatch => {
    try {
      dispatch(deleteContactLoading());
      await contactApi.requestDeleteContact(id);
      dispatch(deleteContactSuccess(id));
    } catch (error) {
      dispatch(deleteContactError(error.message));
    }
  };
  return func;
};
