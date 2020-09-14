import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function LoadingWheel () {
  return (
    <div className='loadingWheel'>
      <CircularProgress />
    </div>
  )
}

export default LoadingWheel
