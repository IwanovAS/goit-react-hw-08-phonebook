import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://6556457284b36e3a431f7d7f.mockapi.io/',
});

export const getContacts = async () => {
  const { data } = await contactsInstance.get('/contacts');
  return data;
};

export const postContact = async newContact => {
  const { data } = await contactsInstance.post('/contacts', newContact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`/contacts/${id}`);
  return data;
};
