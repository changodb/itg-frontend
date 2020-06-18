import React from 'react';
import { TextField, Select, MenuItem, FormControl } from '@material-ui/core';

export default ({ availableFilterFields, idx, field, value, onValueChange, onFieldChange }) => {
  const queryFieldMenuItems = Object.entries(availableFilterFields).map( ([key, value]) => (
        <MenuItem key={key} value={value}>
          {value}
        </MenuItem>
      )
  );
  return (
    <div className="queryfield">
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
