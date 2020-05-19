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

export default ({ simfileResults }) => {
    const columns = [
        {id: 'artist', label: 'Artist Name', minWidth: 170 },
        {id: 'track', label: 'Track Name', minWidth: 170 },
        {id: 'bpm', label: 'BPM', minWidth: 170 },
        {id: 'pack', label: 'Pack Name', minWidth: 170 },
        {id: 'difficulty', label: 'Difficulties', minWidth: 170 },
    ];
    function createData(artist, track, bpm, pack) {
        return {artist, track, bpm, pack};
    }

    const rows =
        simfileResults.map(
            (simfile, index) => (
                simfile.songArtist, simfile.songName, simfile.bpm, simfile.packName
            )
        );
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
                                  <TableRow hover role="checkbox">
                                    {columns.map((column) => {
                                      const value = row[column.id];
                                      return (
                                        <TableCell key={column.id} align={column.align}>
                                          {column.format}
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
