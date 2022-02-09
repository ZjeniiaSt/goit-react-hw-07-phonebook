import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './phonebook-actions';

import {
  fetchContacts,
  deleteContact,
  addContact,
} from './phonebook-operations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (state, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],

  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
