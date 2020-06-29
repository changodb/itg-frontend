import React, { Component } from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, List, ListItem, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Box} from '@material-ui/core';
import _ from 'underscore';

export default ({ simfileResults }) => {


  const columns = [
      {id: 'artist', label: 'Artist Name'},
      {id: 'name', label: 'Track Name'},
      {id: 'bpm', label: 'BPM'},
      {id: ['pack', 'name'], label: 'Pack Name'},
      {id: 'difficultyMap', label: 'Difficulties'},
  ];

  String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };
  var rows = []
  for (let [key, value] of Object.entries(simfileResults)) {
          console.log(`${key}: ${value}`);
          rows.push(value)
          for (let [inner_key, inner_value] of Object.entries(simfileResults[key])) {
              console.log(`${inner_key}: ${inner_value}`);
          }
  }
//
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const headCells = [
    {id: 'artist', disablePadding: true, label: 'Artist Name'},
    {id: 'name', disablePadding: true,  label: 'Track Name'},
    {id: 'bpm', disablePadding: true,  label: 'BPM'},
    {id: ['pack', 'name'], disablePadding: true, label: 'Pack Name'},
    {id: 'difficultyMap', disablePadding: true,  label: 'Difficulties'},
  ];

  function EnhancedTableHead(props) {
    const { order, orderBy,  onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className='hidden'>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
  };
//

    function EnhancedTable() {
      const [order, setOrder] = React.useState('asc');
      const [orderBy, setOrderBy] = React.useState('artist');
      const [page, setPage] = React.useState(0);
      const [rowsPerPage, setRowsPerPage] = React.useState(10);

      const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
      };
      const handleChangePage = (event, newPage) => {
          setPage(newPage);
      };
      const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(+event.target.value);
          setPage(0);
      };
        return (

            <Box>
                <TableContainer>
                    <Table simfileTable aria-label='simfile table'>
                        <EnhancedTableHead
                          order={order}
                          orderBy={orderBy}
                          onRequestSort={handleRequestSort}
                        />
                        <TableBody>
                          {stableSort(rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                              return (
                                  <TableRow hover role="checkbox" key={row.songArtist}>
                                    {columns.map((column) => {
                                      var value = _.property(column.id)(row);
                                      var diffs = []
                                      console.log(row);
                                      for (const [difficulty, val] of Object.entries(row.difficultyMap)) {
                                        diffs.push([difficulty, val])
                                      }
                                      var difflist = diffs.map(
                                          ([difficulty, val]) => (
                                              <ListItem >
                                                <Typography>
                                                  {difficulty.toProperCase()}: {val}
                                                </Typography>
                                              </ListItem>
                                          )
                                      )
                                      return (
                                        <TableCell
                                            key={column.id}
                                            size='small'
                                            align='flex-start'
                                            >
                                          {column.id ==='difficultyMap' ?
                                          <ExpansionPanel className='difficultiesPanel'>
                                            <ExpansionPanelSummary
                                                expandIcon={<MusicNoteIcon />}
                                                className='summaryPanel'
                                            >
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails className='detailsPanel'>
                                              <Typography>
                                                {difflist}
                                              </Typography>
                                            </ExpansionPanelDetails>
                                          </ExpansionPanel>
                                          :
                                          <Typography>{value}</Typography>
                                            }
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
            </Box>
        );
    }
    return (
        <Box>
            <EnhancedTable />
        </Box>
    )
}
