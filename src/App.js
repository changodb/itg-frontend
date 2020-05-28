import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import QueryFilters from './containers/QueryFilters';
import SimfileResults from './containers/SimfileResults';
import Header from './components/Header';
import Divider from '@material-ui/core/Divider';
import { StylesProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
function App() {
  return (
    <StylesProvider injectFirst>
      	<Provider store={store}>
            <Container fixed className="header">
            	<Header />
            </Container>
            <Grid container spacing={1}>
                <Grid item xs={6} className='queryContainer'>
              		<QueryFilters />
                </Grid>
                <Grid item xs={12} className='resultsContainer'>
            		<SimfileResults />
                </Grid>
            </Grid>
    	</Provider>
    </StylesProvider>
  );
}

export default App;
