import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import css from './ContactListItem.module.css';
import { contactDelete } from 'redux/conttacts/contactsSlice';
import { selectVisibleContacts } from 'redux/conttacts/contactsSelector';

export const ContactListItem = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectVisibleContacts);

  const handleRemoveContact = id => {
    dispatch(contactDelete(id));
    Notify.success('The contact was deleted');
  };

  return (
    <ul>
      {filter.map(contact => {
        const { id, name, number } = contact;
        return (
          <li className={css.listItem} key={id}>
            <span className={css.listItemText}>{name}:</span>
            <span className={css.listItemText}>{number}</span>
            <button
              className={css.deleteBtn}
              type="button"
              onClick={() => handleRemoveContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactListItem;
