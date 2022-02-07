import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Button, Card, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import RouterDom from './RouterDom';
import './CustomerFunctions.css';

function CustomerFunctions() {
  const [disable, setDisable] = useState(false);
  const [color, setColor] = useState('white')
  const buttonhandle = () =>
  {
    setDisable(false);
    setColor('#d6d5d2');
  }
    return (
        <div style={{marginTop: "12%"}}>
          
            <NavLink  
            className ="Funcbutton" 
            to="/bookatrip">
              Book a Trip
              </NavLink>  
            <NavLink 
            className ="Funcbutton"       
            to="/currentTripCustomer">
              Current Trip
              </NavLink>
            <NavLink  
            className ="Funcbutton" 
            to="/viewroutes">
              View Routes
            </NavLink>

           
        </div>
    )
}

export default CustomerFunctions
