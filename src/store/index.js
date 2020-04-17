import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import state from './state';
import rootReducer from '../reducers';

const middleware = [thunk];

export default configureStore({
    reducer: rootReducer,
    preloadedState: state
});
