import React from 'react';
import './styles.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import ListItemIcon from '@material-ui/core/ListItemIcon';

export default ({ simfileResults }) => {
    const results = simfileResults.map(
        (simfile, index) => (
            <ListItem key={index.toString()}>
                <ListItemIcon>
                    <MusicNoteIcon />
                </ListItemIcon>
                {JSON.stringify(simfile, null, 1)}
            </ListItem>)
    );

    return (
        <div className='simfileResults'>
            <List>
                {results}
            </List>
        </div>)
}
