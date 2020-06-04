import React from 'react';
import AddIcon from '@material-ui/icons/Add'; 
import RemoveIcon from '@material-ui/icons/Remove';
import { Button } from '@material-ui/core'
import { queryFilterPropType } from '../constants/propTypes';
import QueryFilter from './QueryFilter';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

export default ({ queryFilters, onSubmit, onValueChange, onFieldChange, onAddQueryFilter, onRemoveQueryFilter }) => {
  const filters = queryFilters.map((filter, index) => (
    <ListItem key={index.toString()}  className="queryFilters">
      <AddIcon onClick={() => onAddQueryFilter(index)} />

      <QueryFilter
        idx={index}
        field={filter.field}
        value={filter.value}
        onValueChange={onValueChange}
        onFieldChange={onFieldChange}
      />
      {(index === 0) ? null :
        <RemoveIcon onClick={() => onRemoveQueryFilter(index)} />
      }
    </ListItem>
  ));
  return (
    <form>
            <Button className='submitButton' variant='contained'onClick={() => onSubmit(queryFilters)}>
                Submit
            </Button>
        <List>
            <Typography>
              {filters}
            </Typography>
        </List>
    </form>
  )
};
