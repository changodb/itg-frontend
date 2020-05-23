import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default ({ simfileResults }) => {
    const columns = [
        {id: 'songArtist', label: 'Artist Name', minWidth: 170 },
        {id: 'songName', label: 'Track Name', minWidth: 170 },
        {id: 'bpm', label: 'BPM', minWidth: 170 },
        {id: 'packName', label: 'Pack Name', minWidth: 170 },
        {id: 'difficulties', label: 'Difficulties', minWidth: 170 },
    ];
    function createData(artist, track, bpm, pack) {
        return {artist, track, bpm, pack};
    }

    var rows = []
    for (let [key, value] of Object.entries(simfileResults)) {
            console.log(`${key}: ${value}`);
            rows.push(value)
            for (let [inner_key, inner_value] of Object.entries(simfileResults[key])) {
                console.log(`${inner_key}: ${inner_value}`);
            }
    }

    function StickyHeadTable() {
        const [page, setPage] = React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(10);

        const handleChangePage = (event, newPage) => {
            setPage(newPage);
        };

        const handleChangeRowsPerPage = (event) => {
            setRowsPerPage(+event.target.value);
            setPage(0);
        };

        return (
            <div>
                <TableContainer>
                    <Table simfileTable aria-label='simfile table'>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) =>
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                )}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                              return (
                                  <TableRow hover role="checkbox" key={row.songArtist}>
                                    {columns.map((column) => {
                                      var value = row[column.id]
                                      var diffs = []
                                      for (const [difficulty, val] of Object.entries(row.difficulties)) {
                                        diffs.push([difficulty, val])
                                      }
                                      var difflist = diffs.map(
                                          ([difficulty, val]) => (
                                              <ListItem key={difficulty.toString()}>
                                                {difficulty} : {val}
                                              </ListItem>
                                          )
                                      )
                                      return (
                                        <TableCell key={column.id} align={column.align}>
                                          {column.id ==='difficulties' ? difflist : value}
                                        </TableCell>
                                      );
                                    })}
                                  </TableRow>
                                );
                              })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </div>
        );
    }
    return (
        <div>
            <StickyHeadTable />
        </div>
    )
}
