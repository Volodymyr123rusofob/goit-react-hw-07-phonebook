import * as contactApi from '../../api/contacts-api';
import {
  fetchContactLoading,
  fetchContactSuccess,
  fetchContactError,
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
