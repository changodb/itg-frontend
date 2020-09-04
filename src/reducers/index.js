import { combineReducers } from 'redux';
import queryFilters from './queryFilters';
import simfileResults from './simfileResults';
import availableFilterFields from './availableFilterFields';
import isLoading from './isLoading'
import packList from './packList'

export default combineReducers({
  queryFilters,
  simfileResults,
  availableFilterFields,
  isLoading,
  packList,
});
