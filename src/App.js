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
      	<Provider store={store}>'
            <div className='top-container'>
        	  <div className='App-header'>
          		<Header />
              </div>
          		<QueryFilters />
            </div>
                <Divider />
        		<SimfileResults />
                <Divider />
    	</Provider>
    </StylesProvider>
  );
}

export default App;
