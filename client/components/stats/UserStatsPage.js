import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reducer, { updateUserThunk } from '../../store/auth';
import { _getStats } from '../../store/run';
import { useHistory } from 'react-router';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment-timezone';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  dialog: {
    fontWeight: '900',
    fontSize: '3em'
  },
});

export default function UserStats(props) {
  const classes = useStyles();
  const user = useSelector((state) => state.auth);
  const runs = useSelector((state) => state.run.allRuns);

  //was in userStats previously
  const userId = props.match.params.id;

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadStats() {
      await dispatch(_getStats(userId));
    }
    loadStats();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Run Name</StyledTableCell>
            <StyledTableCell align="right">Run Date</StyledTableCell>
            <StyledTableCell align="right">Run Pace</StyledTableCell>
            <StyledTableCell align="right">Run Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {runs.length === 0 ? (
            <TableRow className={classes.dialog}>
              <StyledTableCell align="right"></StyledTableCell>

              <StyledTableCell align="right">No Data</StyledTableCell>

            </TableRow>
          ) : (
            runs.map((run, idx) => (
              <StyledTableRow key={idx}>
                <StyledTableCell component="th" scope="row">
                  {run.route.name}
                </StyledTableCell>
                <StyledTableCell align="right">{run.startDate}</StyledTableCell>
                <StyledTableCell align="right">
                  {run.pace / 60 + ' min/mile'}
                </StyledTableCell>
                <StyledTableCell align="right">{run.status}</StyledTableCell>
              </StyledTableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
