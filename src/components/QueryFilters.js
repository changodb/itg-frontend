import React from 'react';
import AddIcon from '@material-ui/icons/Add'; 
import RemoveIcon from '@material-ui/icons/Remove';
import { Button } from '@material-ui/core'
import { queryFilterPropType } from '../constants/propTypes';
import QueryFilter from './QueryFilter';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default ({ queryFilters, onSubmit, onValueChange, onFieldChange, onAddQueryFilter, onRemoveQueryFilter }) => {
  const filters = queryFilters.map((filter, index) => (
    <li key={index.toString()}  className="queryFilters">
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
    </li>
  ));
  return (
    <form>
        <Grid container spacing={1}>
          <Grid item xs={1}>
              <Button className='submitButton' variant='contained'onClick={() => onSubmit()}>
                Submit
              </Button>
          </Grid>
          <Grid item xs={11} className='qfield'>
            <Typography>
              {filters}
            </Typography>
          </Grid>
        </Grid>
    </form>
  )
};
