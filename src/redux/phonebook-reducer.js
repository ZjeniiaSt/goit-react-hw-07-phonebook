import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './phonebook-actions';

import {
  fetchContacts,
  deleteContact,
  addContact,
} from './phonebook-operations';

const initState = {
  items: [],
  filter: '',
  isLoading: false,
  error: null,
};

const items = createReducer(initState.items, {
  [fetchContacts.fulfilled]: (state, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],

  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
});

const filter = createReducer(initState.filter, {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(initState.isLoading, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(initState.error, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [addContact.rejected]: (_, { payload }) => payload,
  [deleteContact.rejected]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter, loading, error });
