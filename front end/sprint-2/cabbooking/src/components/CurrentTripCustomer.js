import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Card, Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
        // maxWidth: 220,
        width:'100%'
      },
    listItemText:{
        fontFamily:'Montserrat,sans-serif'
      }
  });
  
  function createData(TripID, DepartureFrom, ArrivalTo,DepartureTime, EstimatedArrival,Distance, EstimatedBill,DriverDetails ) {
    return { TripID, DepartureFrom, ArrivalTo,DepartureTime, EstimatedArrival,Distance, EstimatedBill,DriverDetails };
  } 
  const rows = [
    createData('123','Bengaluru','Chennai','2:50','3:50','220km','1500','driver name' ),
  ];
  
 function CurrentTripCustomer() {
    const classes = useStyles();
  
    return (
        <div style={{marginTop:'4%', marginLeft:'0%'}} align="center">
            <h2 style={{marginBottom:'3%'}}>Your Current Trip Details</h2>
            {rows.map((row) => (
                <Card style={{width:'40%'}} elevation='2' >
                    <List  component="nav" className={classes.root} aria-label="mailbox folders">
      <ListItem >
        <ListItemText classes={{primary:classes.listItemText}} primary="Trip ID" />
        <ListItemText classes={{primary:classes.listItemText}} align="right" primary={row.TripID} />
      </ListItem>
      <Divider />
      <ListItem  divider>
        <ListItemText classes={{primary:classes.listItemText}} primary="DepartureFrom" />
        <ListItemText classes={{primary:classes.listItemText}} align="right" primary={row.DepartureFrom} />
      </ListItem>
      <ListItem >
        <ListItemText classes={{primary:classes.listItemText}} primary="ArrivalTo" />
        <ListItemText classes={{primary:classes.listItemText}} align="right" primary={row.ArrivalTo} />
      </ListItem>
      <Divider light />
      <ListItem divider>
        <ListItemText classes={{primary:classes.listItemText}} primary="DepartureTime" />
        <ListItemText classes={{primary:classes.listItemText}} align="right" primary={row.DepartureTime} />
      </ListItem>
      <ListItem >
        <ListItemText classes={{primary:classes.listItemText}} primary="EstimatedArrival" />
        <ListItemText classes={{primary:classes.listItemText}} align="right" primary={row.EstimatedArrival} />
      </ListItem>
      <Divider />
      <ListItem  divider>
        <ListItemText classes={{primary:classes.listItemText}} primary="Distance" />
        <ListItemText classes={{primary:classes.listItemText}} align="right" primary={row.Distance} />
      </ListItem>
      <ListItem >
        <ListItemText classes={{primary:classes.listItemText}} primary="EstimatedBill" />
        <ListItemText classes={{primary:classes.listItemText}} align="right" primary={row.EstimatedBill} />
      </ListItem>
      <Divider light />
      <ListItem >
        <ListItemText classes={{primary:classes.listItemText}} primary="DriverDetails" />
        <ListItemText classes={{primary:classes.listItemText}} align="right" primary={row.DriverDetails} />
      </ListItem>
    </List>
           </Card>
        
            ))}
            <NavLink to="/customerFunctions" style={{cursor:'pointer',textDecoration: 'none'}}><Button 
  variant="contained" 
  color="primary" 
  style={{marginTop:'3%',backgroundColor:'black',width:'35ch'}} >
    
    Back
    
    </Button>
    </NavLink>
    <br/>
      
      </div>
    );
  }
export default CurrentTripCustomer

// {rows.map((row) => (
//       <TableCell className={classes.tablecellfont} component="th" scope="row">
//         {row.Floc}
//       </TableCell>
//   ))}