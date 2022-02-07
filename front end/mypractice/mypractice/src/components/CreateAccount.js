import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import './Createaccount.css';
// import { NavLink } from 'react-router-dom';
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
  
function CreateAccount() {

  const [nameValue, setNameValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [phnoValue, setPhnoValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const form ={
    username:nameValue,
    password:passValue,
    address:addressValue,
    mobileNumber:parseInt(phnoValue),
    email:emailValue,
  }
  const history = useHistory();
  const onTextChange = (e) => setNameValue(e.target.value);
  const onPassChange = (e) => setPassValue(e.target.value);
  const onAddressChange = (e) => setAddressValue(e.target.value);
  const onPhnoChange = (e) => setPhnoValue(parseInt(e.target.value));
  const onEmailChange = (e) => setEmailValue(e.target.value);
  const handleSubmit = () => console.log(form);
  const classes = useStyles();
  const submitCustomer = () =>{
    apiService("POST", "/customer/insert", form)
      .then((res)=>{
        console.log("It is working", res);
        if(res.status === 200){
          history.push("/customerFunctions")
        }
      })
  }
  // const submitDriver = () =>{
  //   apiService("POST", "/driver/insert", form)
  //     .then((res)=>{
  //       console.log("It is working", res);
  //       if(res.status === 200){
  //         history.push("/customerFunctions")
  //       }
  //     })
  // }

    return (
        <div>
          <h2>One more Step to be a Part of our GoCabs Family!</h2>
            <form className={classes.root} >


        <TextField 
        onChange={onTextChange}
        value={nameValue} 
        required
        id="standard-basic" 
        label="Username" 
        InputLabelProps={{className:'textfield '}} 
        inputProps={{style: {fontFamily:'Montserrat,sans-serif'}}}
        /> <br/>


        <TextField 
        type="password"
        onChange={onPassChange}
        value={passValue} 
        required
        id="standard-basic" 
        label="Password" 
        InputLabelProps={{className:'textfield'}} 
        inputProps={{style: {fontFamily:'Montserrat,sans-serif'}}}
        /> <br/>


        <TextField 
        onChange={onAddressChange}
        value={addressValue} 
        id="standard-basic" 
        label="Address" 
        InputLabelProps={{className:'textfield'}} 
        inputProps={{style: {fontFamily:'Montserrat,sans-serif'}}}
        /> <br/>


        <TextField 
        onChange={onPhnoChange}
        value={phnoValue} 
        type="number"
        id="standard-basic" 
        label="Phone No" 
        InputLabelProps={{className:'textfield'}} 
        inputProps={{style: {fontFamily:'Montserrat,sans-serif'}}}
        /> <br/>


        <TextField 
        type="email"
        onChange={onEmailChange}
        value={emailValue} 
        id="standard-basic" 
        label="Email" 
        InputLabelProps={{className:'textfield'}} 
        inputProps={{style: {fontFamily:'Montserrat,sans-serif'}}}
        /> <br/>
      <Button 
        variant="contained" 
        color="primary" 
        style={{backgroundColor:'black',width: '35ch'}} 
        onClick={submitCustomer}
        >
          Sign in
          </Button>

{/* <NavLink to="/customerFunctions" style={{cursor:'pointer',textDecoration: 'none'}}>
        <Button 
        variant="contained" 
        color="primary" 
        style={{backgroundColor:'black',width: '35ch'}} 
        >
          Sign in
          </Button></NavLink><br/><br/> */}
      </form>
        </div>
    )
}

export default CreateAccount
