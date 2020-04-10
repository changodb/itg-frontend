import { combineReducers } from 'redux';
import queryFilters from './queryFilters';
import simfileResults from './simfileResults';

export default combineReducers({
  queryFilters,
  simfileResults,
});