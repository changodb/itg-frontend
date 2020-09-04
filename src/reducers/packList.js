import { createReducer } from '@reduxjs/toolkit';
import { packListQueryDelivered } from '../actions';
import state from '../store/state';

// Dummy reducer; does nothing.
export default createReducer(
    state.packList, {
        [packListQueryDelivered]: (state, action) => {
            return action.payload;
        }
    }
);
