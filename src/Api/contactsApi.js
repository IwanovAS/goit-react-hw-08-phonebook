import { contactsInstance } from './userApi';

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
