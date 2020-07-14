import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default ({ loadingWheel }) => {
  const isLoading = this.state
  return (
    <div>
     {isLoading ? <CircularProgress /> : null}
    </div>
  )
}
