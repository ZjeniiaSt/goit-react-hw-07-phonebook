import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook-reducer';
import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: { phonebook: phonebookReducer },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
