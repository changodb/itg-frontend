import { createReducer } from '@reduxjs/toolkit';
import { submitQuery } from '../actions';
import { reduxForm, Field } from 'redux-form'

// Dummy reducer; does nothing.
export default (state=[], action) => state;