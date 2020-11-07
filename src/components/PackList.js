import React, {useEffect} from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PropTypes from 'prop-types';
import {Link, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Typography, Box } from '@material-ui/core';
import _ from 'underscore';
import LoadingWheel from './loadingWheel'


export default ({ packList, isLoading, pageToggle, queryFilters, packListQuery, submitQuery}) => {

  React.useEffect(() => packListQuery(), [])
  var rows = []

  for (let [key, value] of Object.entries(packList)) {
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
    {id: "packName", disablePadding: true, label: 'Pack Name'},
    {id: "count", disablePadding: true, label: 'Song Count'}
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
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
  };

  function PackTable() {

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('packName');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(25);

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
          <Table aria-label='packlist table'>
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
                    <TableRow hover role="checkbox" key={row.packName}>
                      {headCells.map((column) => {
                        var value = _.property(column.id)(row);
                        const queryFilters = [{field:"Pack Name", value: row.packName}]
                        return (
                          <TableCell
                            key={column.id}
                            size='small'
                          >{(column.id === 'packName') ?

                          <Link href="#" color='inherit' onClick={(event) => {
                              event.preventDefault();
                              submitQuery(queryFilters);
                          }}> {value}</Link> :
                          <Typography>{value}</Typography>}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })
              }
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
        {pageToggle === true ? isLoading === false ? <PackTable /> : <LoadingWheel />: null}
    </Box>
  )
}
