import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import QueryFilters from './containers/QueryFilters';
import SimfileResults from './containers/SimfileResults';
import Header from './components/Header';
import Divider from '@material-ui/core/Divider';
import { StylesProvider } from '@material-ui/core/styles';

function App() {
  return (
    <StylesProvider injectFirst>
      	<Provider store={store}>
            <div className='topContainer'>
        	  <div className='header'>
          		<Header />
              </div>
              <div>
          		<QueryFilters />
              </div>
            </div>
            <div className='resultsContainer'>
                <Divider />
        		<SimfileResults />
                <Divider />
            </div>
    	</Provider>
    </StylesProvider>
  );
}

export default App;
