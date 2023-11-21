import  ContactForm  from 'components/ContactForm/ContactForm';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import  Filter  from 'components/Filter/Filter';
import './App.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { contactsFetch } from 'redux/conttacts/contactsSlice';

export const App = () => {
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
}

export default App;
