import axios from 'axios';

const contactInstance = axios.create({
  baseURL: 'https://65c7eb18e7c384aada6f1634.mockapi.io/contacts/contacts',
});

export const requestContacts = async () => {
  const { data } = await contactInstance.get('/');
  return data;
};
