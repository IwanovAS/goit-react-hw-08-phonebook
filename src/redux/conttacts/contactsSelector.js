import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.contacts.contacts.items;
export const selectFilter = state => state.contacts.filter;

export const selectVisibleContacts = createSelector(
  [selectItems, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
