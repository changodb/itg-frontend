import { createAction } from '@reduxjs/toolkit';

export const submitQuery = createAction('query/submit');

export const queryFilterValueChange = createAction('query/filter/valueChange');

export const queryFilterFieldChange = createAction('query/filter/fieldChange');

export const queryFilterAdd = createAction('query/filter/add');

export const queryFilterRemove = createAction('query/filter/remove');