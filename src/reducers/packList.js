import { createReducer } from '@reduxjs/toolkit';
import { packListQueryDelivered } from '../actions';

export default createReducer(
    [], {
        [packListQueryDelivered]: (state, action) => {
            return action.payload;
        }
    }
);
