import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Button, Card, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import RouterDom from './RouterDom';

import './Header.css';

function Header() {

    const[changeAdmin, setChangeAdmin] = useState('#232424');
    const[changeCustomer, setChangeCustomer] = useState('#232424');
    const[changeDriver, setChangeDriver] = useState('#232424');
const admin = () =>
{
    console.log("hello");
    setChangeAdmin('red');
    setChangeDriver('#232424');
    setChangeCustomer('#232424');
}
const customer = () =>
{
    console.log("hello");
    setChangeAdmin('#232424');
    setChangeCustomer('red')
    setChangeDriver('#232424')
}
const driver = () =>
{
    console.log("hello");
    setChangeAdmin('#232424');
    setChangeCustomer('#232424');
    setChangeDriver('red')
}
    return (
        <Grid align="center" >
            {/* <NavLink activeClassName to="/home">click to go home </NavLink> <br/>
            <NavLink to="/products">click to go products</NavLink> <br/>
            <NavLink to="/singleproduct/10">click to go singleproduct</NavLink> */}

<div style={{marginTop: "15%"}}>
            <h3 className = "title"> Login As</h3><br/><br/>
            <NavLink className ="loginbutton" onClick={admin} to="/admin">Admin</NavLink>  
            <NavLink className ="loginbutton" onClick={customer}  to="/customer">Customer</NavLink>
            <NavLink  className ="loginbutton" onClick={driver}  to="/driver">Driver</NavLink>
</div>

        </Grid>
    )
}

export default Header
