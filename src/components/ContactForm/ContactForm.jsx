import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactAdd } from 'redux/conttacts/contactsSlice';
import css from './ContactForm.module.css';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const isUniqueContact = (userName, userNumber) => {
    const isExistContact = contacts.some(
      contact =>
        contact.name.toLowerCase() === userName.toLowerCase() &&
        contact.number === userNumber
    );
    if (isExistContact) {
      Notify.failure('Contact is already exist');
      return false;
    }
    return true;
  };

  const handleInputChangeName = e => {
    setName(e.target.value);
  };

  const handleInputChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (!isUniqueContact(name, number)) {
      return;
    }
    dispatch(
      contactAdd({
        id: nanoid(),
        name,
        number,
      })
    );

    Notify.success('The contact was added to phonebook');

    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.label} htmlFor="name">
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Kurt Cobain"
          value={name}
          onChange={handleInputChangeName}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only consist of letters, an apostrophe, spaces. For example Adrian, Jacob Mercer."
          required
        />
      </label>
      <label className={css.label} htmlFor="number">
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          placeholder="123-45-67"
          value={number}
          onChange={handleInputChangeNumber}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="The phone number must consist of numbers and can contain spaces, dashes, parentheses and can begin with +"
          required
        />
      </label>

      <button className={css.addBtn} type="submit">
        <span>Add contact</span>
      </button>
    </form>
  );
}

export default ContactForm;
