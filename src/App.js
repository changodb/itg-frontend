import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import QueryFilters from './containers/QueryFilters';
import SimfileResults from './containers/SimfileResults';
import Header from './components/Header';

function App() {
  return (
  	<Provider store={store}>
	  <div>
  		<Header />
  		<QueryFilters />
		<SimfileResults />
  	  </div>
	</Provider>
  );
}

export default App;
