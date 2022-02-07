import React,{ useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { getValidationAtServer} from '../services/CustomerService';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import './Createaccount.css';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '35ch',
        fontFamily: 'Montserrat'
      },
    },
  }));

function Customer() {
    const {register,handleSubmit

    }=useForm();
    const history = useHistory();

    const  formhandler= async (details)=>{
      console.log(details)
      const credentials={
        username:details.username,
        password:details.password
      }
      console.log(credentials)
      try{
        
       const {data}= await getValidationAtServer(credentials);
       console.log(data)
       history.push("/customerFunctionalities");
      }
    catch(ex){
   alert("username or password is invalid...");
     }
     
   }
    //  const formhandler=async (details)=>{
    //   const {data}= await getValidationAtServer(details);
    //   history.push("/CustomerFunctions");
    //      console.log(details)
    //  }
    return (
        <div>
             <h2>Welcome Customer!</h2>
        <form onSubmit={handleSubmit(formhandler)} >
        <TextField 
        type="username"
        
        
        id="standard-basic" 
        label="username" 
        {...register("username")}
        InputLabelProps={{className:'textfield '}}
        
         inputProps={{style: {fontFamily:'Montserrat,sans-serif'}}}/> <br/>

        <TextField type="password"
        {...register("password")}

        
        id="standard-basic" label="password" InputLabelProps={{className:'textfield '}} inputProps={{style: {fontFamily:'Montserrat,sans-serif'}}}/> <br/><br/>

        <Button  type="submit" variant="contained" color="primary" style={{marginTop:'1%',marginBottom:'1%',backgroundColor:'black',width:'35ch'}}>Sign in</Button><br/> 
        {/* <TextField id="standard-basic" label="Standard" /> <br/> */}  

        <NavLink to="/header" style={{cursor:'pointer',textDecoration: 'none'}}>
        <Button variant="contained" 
        color="primary" 
        style={{marginTop:'1%',marginBottom:'1%',backgroundColor:'black',width:'35ch'}} >
    
         Back
    
          </Button>
          </NavLink>
        <div >          
        <p style={{color:'##4a4949'}}>Don't have an account? <NavLink style={{cursor:'pointer',textDecoration: 'none'}} to="/createaccount">create one</NavLink></p>
        </div>
        </form>

            
        </div>
    )
}

export default Customer
