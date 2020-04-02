import { configureStore } from '@reduxjs/toolkit';
import state from './state';
import rootReducer from '../reducers';

export default configureStore({
    reducer: rootReducer,
    preloadedState: state
});
