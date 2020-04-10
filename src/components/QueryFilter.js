import React from 'react';
import { TextField, Select, MenuItem, FormControl } from '@material-ui/core';
import { QUERY_FIELDS } from '../constants/enums';

const queryFieldMenuItems = Object.entries(QUERY_FIELDS).map( ([key, value]) => (
    <MenuItem key={key} value={value}>
      {key}
    </MenuItem>
  )
);

export default ({ idx, field, value, onValueChange, onFieldChange }) => {

  return (
    <div>
      <FormControl>
        <Select
          className='field-select'
          value={field}
          onChange={(event) => onFieldChange(idx, event.target.value)}>
          {queryFieldMenuItems}
        </Select>
      </FormControl>  
      <FormControl>
        <TextField
          className='value-input'
          value={value}
          onChange={(event) => onValueChange(idx, event.target.value)} 
        />
      </FormControl>
    </div>
  )
};