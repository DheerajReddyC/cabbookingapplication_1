import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './Createaccount.css';
import { useHistory } from "react-router-dom";


import { apiService } from './Api';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '35ch',
        fontFamily: 'Montserrat'
      },
    },
  }));
function Driver() {
  const [nameValue, setNameValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const form ={
    username:nameValue,
    password:passValue
  }
  const history = useHistory();
  const submitDriver = () =>{
    apiService("POST", "/driver/insert", form)
      .then((res)=>{
        console.log("It is working", res);
        if(res.status === 200){
          history.push("/driverFunctions")
        }
      })
  }
  const onTextChange = (e) => setNameValue(e.target.value);
  const onPassChange = (e) => setPassValue(e.target.value);
  const handleSubmit = () => console.log(form);
    const classes = useStyles();
    return (
        <div>
            <h2>Welcome Driver!</h2>
            <form className={classes.root} noValidate autoComplete="off">

        <TextField 
        onChange={onTextChange}
        value={nameValue} 
        required
        id="standard-basic" 
        label="Username" 
        InputLabelProps={{className:'textfield '}} 
        inputProps={{style: {fontFamily:'Montserrat,sans-serif'}}}
        /><br/>


        <TextField 
        type="password"
        onChange={onPassChange}
        value={passValue} 
        required 
        id="standard-basic" 
        label="Password" 
        InputLabelProps={{className:'textfield '}} 
        inputProps={{style: {fontFamily:'Montserrat,sans-serif'}}}
        /> <br/><br/>

    <NavLink to="/driverFunctions" style={{cursor:'pointer',textDecoration: 'none'}}>
      {/* <Button variant="contained" onClick={handleSubmit}
     color="primary" 
      style={{marginTop:'1%',marginBottom:'1%',backgroundColor:'black',width:'35ch'}} >
    
        Sign In
    
        </Button> */}
        </NavLink><br/>
        <Button 
        variant="contained" 
        color="primary" 
        style={{backgroundColor:'black',width: '35ch'}} 
        onClick={submitDriver}
        >
          Sign in
          </Button>

       

<NavLink to="/header" style={{cursor:'pointer',textDecoration: 'none'}}>
  <Button variant="contained" 
  color="primary" 
  style={{marginTop:'1%',marginBottom:'1%',backgroundColor:'black',width:'35ch'}} >
    
    Back
    
    </Button>

    </NavLink>

        {/* <TextField id="standard-basic" label="Standard" /> <br/> */}  
        <div >          
        <p style={{color:'#4a4949'}}>Don't have an account? <NavLink style={{cursor:'pointer',textDecoration: 'none'}} to="/createDriverAcc">create one</NavLink></p>
        </div>
      </form>
        </div>
    )
}

export default Driver
