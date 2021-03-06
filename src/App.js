import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import QueryFilters from './containers/QueryFilters';
import SimfileResults from './containers/SimfileResults';
import PackList from './containers/PackList'
import PageToggle from './containers/PageToggle'
import Header from './components/Header';
import {Divider, Grid, Box, Container} from '@material-ui/core/';
import { StylesProvider } from '@material-ui/core/styles';


function App() {
  return (
        <StylesProvider injectFirst>
          	<Provider store={store}>
              <Box className ='topContainer'>
                  <Header />
                  <Box className='filler' />
                  <QueryFilters />
              </Box >
              <Box className='bottomContainer'>
                <PageToggle />
                <PackList />
                <SimfileResults />
              </Box>
        	</Provider>
        </StylesProvider>
  );
}

export default App;
