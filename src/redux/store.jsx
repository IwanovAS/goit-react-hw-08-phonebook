import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { contactsReducer } from './conttacts/contactsSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './users/userSlice';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: persistReducer(authConfig, userReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER },
      },
    }),
});

export const persistor = persistStore(store);
