import { combineReducers } from 'redux';
import queryFilters from './queryFilters';
import simfileResults from './simfileResults';
import availableFilterFields from './availableFilterFields';
import loadingWheel from './loadingWheel'

export default combineReducers({
  queryFilters,
  simfileResults,
  availableFilterFields,
  loadingWheel,
});
