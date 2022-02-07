import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Card, Grid } from '@material-ui/core';
const useStyles = makeStyles({
    table: {
      width: '100%',
    },
    tablecell: {
        fontFamily: 'Montserrat,sans-serif',
        color: 'black',
        fontSize:'17px'
        
    },
    tablecellfont:{
        fontFamily: 'Montserrat,sans-serif',
        color: '#303330'
    }
  });
  
  function createData(Floc, Sloc, Distance) {
    return { Floc, Sloc, Distance };
  }
  
  const rows = [
    createData('Bengaluru', 'Chennai', 262,),
    createData('Bengaluru', 'Hyderabad', 152,),
    createData('Bengaluru', 'Mumbai', 172,),
    createData('Chennai', 'Hyderabad', 162,),
    createData('Chennai', 'Mumbai', 262,),
    createData('Hyderabad', 'Mumbai', 462,),
  ];
  
 function CurrentTrip() {
    const classes = useStyles();
  
    return (
        <div style={{marginTop:'4%', marginLeft:'0%'}} align="center">
            <h2 style={{marginBottom:'3%'}}>Your Current Trip</h2>
            <Card style={{width:'100%'}} elevation='4'>
      <TableContainer elevation='4'>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            {/* <TableRow >
              <TableCell className={classes.tablecell}>First Location</TableCell>
              <TableCell className={classes.tablecell}>Second Location</TableCell>
              <TableCell className={classes.tablecell}>Distance (km)</TableCell>
            </TableRow> */}
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.Floc}>
                <TableCell className={classes.tablecellfont} component="th" scope="row">
                  {row.Floc}
                </TableCell>
                <TableCell className={classes.tablecellfont}>{row.Sloc}</TableCell>
                <TableCell className={classes.tablecellfont}>{row.Distance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Card>
      </div>
    );
  }
export default CurrentTrip

