import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import state from './state';
import rootReducer from '../reducers';

export default configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), thunk],
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: state
});
