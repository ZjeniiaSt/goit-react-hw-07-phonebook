import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import * as API from '../serviсes/api';
axios.defaults.baseURL = 'https://62038e1c4d21c200170b9e53.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.fetchContacts();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await API.addContact(payload);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await API.deleteContact(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
