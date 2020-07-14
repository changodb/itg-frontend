import { createReducer } from '@reduxjs/toolkit';
import { backendQueryStarted, backendQueryError, backendQueryDelivered } from '../actions';

export default createReducer(
  false,
    {
      [backendQueryStarted]: (state, action) => {
          return true;
      },
      [backendQueryDelivered]: (state, action) => {
          return false;
      },
      [backendQueryError]: (state, action) => {
          return false;
      }
    }
);
