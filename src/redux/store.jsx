import { contactsReducer } from './conttacts/contactsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export const persistor = store;
