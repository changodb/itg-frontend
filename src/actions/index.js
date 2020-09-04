import { createAction } from '@reduxjs/toolkit';
import { QUERY_FIELDS_INVERTED } from '../constants/enums';
import { API_URL } from '../constants';

export const queryFilterValueChange = createAction('query/filter/valueChange');

export const queryFilterFieldChange = createAction('query/filter/fieldChange');

export const queryFilterAdd = createAction('query/filter/add');

export const queryFilterRemove = createAction('query/filter/remove');

export const backendQueryStarted = createAction('backend/query/started');

export const backendQueryDelivered = createAction('backend/query/delivered');

export const backendQueryError = createAction('backend/query/error');

export const submitQuery = (queryFilters) => (dispatch) => {
    dispatch(backendQueryStarted());
    let url = API_URL + 'search/';
    let mappedFilters = Object.fromEntries(queryFilters.map((filter) => {
        let fieldName = QUERY_FIELDS_INVERTED[filter.field];
        return [fieldName, filter.value]
    }));
    let filters = JSON.stringify(mappedFilters);
    console.log(filters);
    console.log(API_URL);
    fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: filters,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .then(data => {
        // Convert data into something which getMatches
        // the schema shown in store/state.js#simfileResults
        console.log(data);
        return data; // if this is the raw data, this won't work
    }).then(
        data => {
            dispatch(backendQueryDelivered(data));
        }
    ).catch(error => {
        dispatch(backendQueryError(error));
    });
}

export const packListQueryStarted = createAction('packList/query/started');

export const packListQueryDelivered = createAction('packList/query/delivered');

export const packListQueryError = createAction('packList/query/error');

export const packListQuery = () => (dispatch) => {
  dispatch(packListQueryStarted());
  let url = API_URL + 'list/';
  let query = {field": "pack.name"}
  fetch(url, {
    method: 'POST',
    mode: 'cors',
    body: query,
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(response => response.json())
  .then(data => {
    console.log(data);
    return data;
  }).then(
    data => {
      dispatch(packListQueryDelivered(data));
    }
  ).catch(error => {
    dispatch(packListQueryError(error));
  });
}
