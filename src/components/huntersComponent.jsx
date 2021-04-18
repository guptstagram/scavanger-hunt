import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(4),
  },
  table: {
    minWidth: 650,
  },
}));

const HuntersComponent = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.didSearch && !props.hunterTable.length?<Typography variant="h2" gutterBottom>Bad Bad luck, No Donut for you!!</Typography>:null}
      {props.hunterTable.length?<TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Insitution Name</TableCell>
              <TableCell align="right">Branch Name</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Contact Number</TableCell>
              <TableCell align="right">Branch Incharge</TableCell>
              <TableCell align="right">Pincode covered</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.hunterTable.map((hunter, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {hunter["Insitution Name"]}
                </TableCell>
                <TableCell align="right">{hunter["Branch Name"]}</TableCell>
                <TableCell align="right">{hunter["Address"]}</TableCell>
                <TableCell align="right">{hunter["City"]}</TableCell>
                <TableCell align="right">{hunter["Contact Number"]}</TableCell>
                <TableCell align="right">{hunter["Branch Incharge"]}</TableCell>
                <TableCell align="right">{hunter["Pincode covered"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>:null}
    </div>
  );
};

export default HuntersComponent;
