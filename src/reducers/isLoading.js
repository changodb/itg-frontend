import { createReducer } from '@reduxjs/toolkit';
import { backendQueryStarted, backendQueryError, backendQueryDelivered, packListQueryStarted, packListQueryDelivered, packListQueryError } from '../actions';

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
      },
      [packListQueryStarted]: (state, action) => {
          return true;
      },
      [packListQueryDelivered]: (state, action) => {
          return false;
      },
      [packListQueryError]: (state, action) => {
          return false;
      }
    }
);
