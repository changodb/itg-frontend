import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export default ({ simfileResults }) => {

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    const results = simfileResults.map(
        (simfile, index) => (

            <ListItem button onClick={handleClick} key={index.toString()}>
                <ListItemIcon>
                    <MusicNoteIcon />
                </ListItemIcon>
                Artist : "{simfile.songArtist}"
                <Divider orientation="vertical" flexItem />
                Track : "{simfile.songName}"
                <Divider orientation="vertical" flexItem />
                BPM : {simfile.bpm}
                <Divider orientation="vertical" flexItem />
                Pack : {simfile.packName}
                <Divider orientation="vertical" flexItem />
                {open ? <ExpandLess /> : <ExpandMore />}
                Difficulty :
                <Collapse in={open} timeout='auto' unmountOnExit>
                    {JSON.stringify(simfile.difficulty, null, 1)}
                </Collapse>

            </ListItem>
    ));

    return (
        <div>
            <List>
                {results}
            </List>
        </div>)
}
