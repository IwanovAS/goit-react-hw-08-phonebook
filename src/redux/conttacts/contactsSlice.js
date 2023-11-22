import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { deleteContact, getContacts, postContact } from 'Api/contactsApi';

export const contactsFetch = createAsyncThunk(
  'contacts/allFetch',
  async (_, thunkAPI) => {
    try {
      const contacts = await getContacts();
      return contacts;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const contactAdd = createAsyncThunk(
  'contacts/contactAdd',
  async (newContact, thunkAPI) => {
    try {
      const contact = await postContact(newContact);
      return contact;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const contactDelete = createAsyncThunk(
  'contacts/contactDelete',
  async (newContact, thunkAPI) => {
    try {
      const contactDelete = await deleteContact(newContact);
      return contactDelete;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder

      .addCase(contactsFetch.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })

      .addCase(contactAdd.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = [action.payload, ...state.contacts.items];
      })

      .addCase(contactDelete.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        );
      })

      .addMatcher(
        isAnyOf(
          contactAdd.pending,
          contactsFetch.pending,
          contactDelete.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          contactAdd.rejected,
          contactsFetch.rejected,
          contactDelete.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
