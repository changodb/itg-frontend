import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core'


export default ({ simfileResults }) => {

    const [open, setOpen] = React.useState(false);

    const results = simfileResults.map(
        (simfile, index) => (
            <ListItem key={index.toString()}>
                <ListItemIcon>
                    <MusicNoteIcon />
                </ListItemIcon>
                Artist : {simfile.songArtist}
                <Divider orientation="vertical" flexItem />
                Track : {simfile.songName}
                <Divider orientation="vertical" flexItem />
                BPM : {simfile.bpm}
                <Divider orientation="vertical" flexItem />
                Pack : {simfile.packName}
                <Divider orientation="vertical" flexItem />
                {JSON.stringify(simfile.difficulty, null, 1)}

            </ListItem>
    ));

    return (
        <div>
            <List>
                {results}
            </List>
        </div>)
}
