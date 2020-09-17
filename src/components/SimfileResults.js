import React, { Component } from 'react';
import {useDispatch} from 'react-redux';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, List, ListItem, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Box, Link} from '@material-ui/core';
import _ from 'underscore';
import LoadingWheel from './loadingWheel';
import { submitQuery } from '../actions';

export default ({ simfileResults, isLoading, pageToggle, queryFilters}) => {
  const dispatch = useDispatch()
  var rows = []
  for (let [key, value] of Object.entries(simfileResults)) {

          rows.push(value)
  }

  function descendingComparator(a, b, orderBy) {
    const valueExtractorFunction = _.property(orderBy);
    const aValue = valueExtractorFunction(a);
    const bValue = valueExtractorFunction(b);
    if (bValue < aValue) {
      return -1;
    }
    if (bValue > aValue) {
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
    {id: 'artist', disablePadding: true, label: 'Artist'},
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
            {(headCell.label !== 'Difficulties') ?
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
            : headCell.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
  };
//

    function EnhancedTable() {
      const [order, setOrder] = React.useState('asc');
      const [orderBy, setOrderBy] = React.useState(['pack', 'name']);
      const [page, setPage] = React.useState(0);
      const [rowsPerPage, setRowsPerPage] = React.useState(10);

      const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
      };
      const handleChangePage = (event, newPage) => {
          setPage(newPage);
          window.scrollTo({
            top: 200,
            left: 0,
            behavior: 'smooth'
          });
      };
      const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(+event.target.value);
          setPage(0);
      };
        return (

            <Box>
                <TableContainer>
                    <Table aria-label='simfile table'>
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
                                    {headCells.map((column) => {
                                      var value = _.property(column.id)(row);
                                      const queryFilters =[{field: column.label, value: value}]
                                      var diffs = []
                                      for (const [difficulty, val] of Object.entries(row.difficultyMap)) {
                                        diffs.push([difficulty, val])
                                      }
                                      let sortedDiffs = _.sortBy(diffs, '1')
                                      var difflist = sortedDiffs.map(
                                          ([difficulty, val]) => (
                                              <ListItem >
                                                  {difficulty}: {val}
                                              </ListItem>
                                          )
                                      )
                                      return (
                                        <TableCell
                                            key={column.id}
                                            size='small'
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
                                          : column.id !=='bpm' ?
                                          <Link href="#" color='inherit' onClick={(event) => {
                                              event.preventDefault();
                                              dispatch(submitQuery(queryFilters));
                                          }}> {value}</Link> :
                                          <Link href="#" color='inherit' onClick={(event) => {
                                              event.preventDefault();
                                              dispatch(submitQuery([{field: "Min BPM", value: value}]));
                                          }}> {value}</Link>
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
          {pageToggle === false ? isLoading === false ? <EnhancedTable /> : <LoadingWheel />: null}
        </Box>
    )
}
