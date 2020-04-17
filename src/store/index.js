import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import state from './state';
import rootReducer from '../reducers';

const middleware = [thunk];

export default configureStore({
    reducer: rootReducer,
    preloadedState: state
});
