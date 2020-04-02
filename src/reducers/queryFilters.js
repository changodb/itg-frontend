import { createReducer } from '@reduxjs/toolkit';
import {
  queryFilterValueChange,
  queryFilterFieldChange,
  queryFilterAdd,
  queryFilterRemove
} from '../actions';
import { DEFAULT_QUERY_FILTER } from '../constants';

export default createReducer(
  [Object.assign({}, DEFAULT_QUERY_FILTER)],
  {
    [queryFilterValueChange]: (state, action) => {
      state[action.payload.index].value = action.payload.value;
      return state;
    },
    [queryFilterFieldChange]: (state, action) => {
      state[action.payload.index].field = action.payload.value;
      return state;
    },
    [queryFilterAdd]: (state, action) => {
      state.splice((action.payload + 1), 0, Object.assign({}, DEFAULT_QUERY_FILTER));
      return state;
    },
    [queryFilterRemove]: (state, action) => {
      state.splice(action.payload, 1);
      return state;
    }
  }
);