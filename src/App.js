import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store'
import QueryFilters from './containers/QueryFilters';
import SimfileResults from './containers/SimfileResults';
import Header from './components/Header';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { spacing } from '@material-ui/system';

function App() {
  return (
  	<Provider store={store}>
	  <div>
  		<Header />
  		<QueryFilters />
        <Divider className="divider" />
		<SimfileResults />
  	  </div>
	</Provider>
  );
}

export default App;
