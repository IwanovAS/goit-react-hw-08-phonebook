import ContactForm from 'components/ContactForm/ContactForm';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import Filter from 'components/Filter/Filter';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactsFetch } from 'redux/conttacts/contactsSlice';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsFetch());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactListItem />
    </>
  );
};

export default ContactsPage;
