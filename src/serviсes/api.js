import axios from 'axios';
axios.defaults.baseURL = 'https://62038e1c4d21c200170b9e53.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get(`/contacts`);
  return data;
};

export const addContact = async ({ name, number }) => {
  const contact = { name, number };
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
