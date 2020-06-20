import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import QueryFilters from './containers/QueryFilters';
import SimfileResults from './containers/SimfileResults';
import Header from './components/Header';
import {Divider, Grid, Box} from '@material-ui/core/';
import { StylesProvider } from '@material-ui/core/styles';


function App() {
  return (

        <StylesProvider injectFirst>
          	<Provider store={store}>
            	<Header />
                <Box className='bottomContainer'>
              		<QueryFilters />
            		<SimfileResults />
                </Box>
        	</Provider>
        </StylesProvider>

  );
}

export default App;
