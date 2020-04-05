import React from 'react';
import AddIcon from '@material-ui/icons/Add'; 
import RemoveIcon from '@material-ui/icons/Remove';
import { Button } from '@material-ui/core'
import { queryFilterPropType } from '../constants/propTypes';
import QueryFilter from './QueryFilter';

/*
TODO: Remove bullet points from the generated list elements in `ul`
TODO: Ensure + button only appears once, at the end of the list
*/
export default ({ queryFilters, onSubmit, onValueChange, onFieldChange, onAddQueryFilter, onRemoveQueryFilter }) => {
  const filters = queryFilters.map((filter, index) => (
    <li key={index.toString()}>
      {(index === 0) ? null :
        <RemoveIcon onClick={() => onRemoveQueryFilter(index)} />
      }
      <QueryFilter
        id={index}
        field={filter.field}
        value={filter.value}
        onValueChange={onValueChange}
        onFieldChange={onFieldChange}
      />
      <AddIcon onClick={() => onAddQueryFilter(index)} />
    </li>
  ));
  return (
    <form>
      <ul>
        {filters}
      </ul>
      <Button variant='contained' style={{marginLeft: '1.5em'}} onClick={() => onSubmit()}>
        Submit
      </Button>
    </form>
  )
};