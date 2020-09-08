import { createReducer } from '@reduxjs/toolkit';
import { viewChange } from '../actions'

export default createReducer(
  true, {
    [viewChange]: (state, action) => {
      return action.payload;
    }
  }
)
