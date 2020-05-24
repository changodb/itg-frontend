import React from 'react';
import AddIcon from '@material-ui/icons/Add'; 
import RemoveIcon from '@material-ui/icons/Remove';
import { Button } from '@material-ui/core'
import { queryFilterPropType } from '../constants/propTypes';
import QueryFilter from './QueryFilter';
import Divider from '@material-ui/core/Divider';

export default ({ queryFilters, onSubmit, onValueChange, onFieldChange, onAddQueryFilter, onRemoveQueryFilter }) => {
  const filters = queryFilters.map((filter, index) => (
    <li key={index.toString()}  className="queryFilters">
      <AddIcon
            onClick={() => onAddQueryFilter(index)}
            disabled={index >= 6} />

      <Divider orientation="vertical" flexItem />
      <QueryFilter
        idx={index}
        field={filter.field}
        value={filter.value}
        onValueChange={onValueChange}
        onFieldChange={onFieldChange}
      />
      <Divider orientation="vertical" flexItem />
      {(index === 0) ? null :
        <RemoveIcon onClick={() => onRemoveQueryFilter(index)} />
      }
    </li>
  ));
  return (
    <form>
      <Button className='submitButton' variant='contained' style={{marginLeft: '1em', marginTop: '1em'}} onClick={() => onSubmit()}>
        Submit
      </Button>
      <ul className='queryContainer'>
        {filters}
      </ul>
    </form>
  )
};
