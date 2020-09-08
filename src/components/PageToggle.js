import React from 'react';
import { Select, MenuItem, FormControl, Box, InputLabel } from '@material-ui/core';


export default ({ pageToggle, onViewChange, page, value}) => {
  return (
    <Box>
      <FormControl>
        <InputLabel id='page-select'>Page</InputLabel>
        <Select
          value={page}
          onChange={(event) => onViewChange(event.target.value)}>
          <MenuItem value={false}>Search</MenuItem>
          <MenuItem value={true}>Pack List</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
