import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';


import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
 
  margin: {
    margin: theme.spacing(1),
    width: '35ch'
  },
}));



function GetTripsCabWise() {
    const classes = useStyles();

    return (
        <div style={{borderRadius: '5px',backgroundColor:'white',marginTop:'10%', marginLeft:'25%', marginRight:'25%',paddingTop:'1.5%',paddingBottom:'1.5%',boxShadow:'2px 2px #888888'}}>
            <h2>Search Trips Cab Wise</h2>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Enter Cab Type" style={{width:'35ch'}}/>
            </form><br/><br/>

            <NavLink to="/adminFunctions" style={{cursor:'pointer',textDecoration: 'none'}}>
  <Button variant="contained" 
  color="primary" 
  style={{marginTop:'1%',backgroundColor:'black',width:'35ch'}} >
    
    Search
    
    </Button>
    </NavLink><br/>

<NavLink to="/adminFunctions" style={{cursor:'pointer',textDecoration: 'none'}}>
  <Button variant="contained" 
  color="primary" 
  style={{marginTop:'1%',backgroundColor:'black',width:'35ch'}} >
    
    Back
    
    </Button>
    </NavLink>
        </div>
    )
}

export default GetTripsCabWise
