import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Button, Card, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import RouterDom from './RouterDom';
import './DriverFunctions.css';

function DriverFunctions() {
    return (
        <div className ="title" style={{marginTop: "12%"}}>
            <NavLink  
            className ="Funcbutton" 
            to="/upcomingTrips">
              Upcoming Trips
              </NavLink>  
            <NavLink 
            className ="Funcbutton"       
            to="/currentTripDriver">
              Current Trip
              </NavLink>
            <NavLink  
            className ="Funcbutton" 
            to="/viewRoutesDriver">
              View Routes
            </NavLink>

        </div>
    )
}

export default DriverFunctions
