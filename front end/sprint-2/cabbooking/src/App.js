
import './App.css';

import RouterDom from './components/RouterDom';
import CenteredTabs from './components/Tabs';
import { Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Button, Card, Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Bookatrip from './components/Bookatrip';
import Viewroutes from './components/Viewroutes';
import Header from './components/Header';
import CurrentTrip from './components/CurrentTrip';

import Newtable from './components/Newtable';
import AdminFunctions from './components/AdminFunctions';
function App() {
  const [disable, setDisable] = useState(false);
  const [color, setColor] = useState('white')
  const buttonhandle = () =>
  {
    setDisable(true);
    setColor('#d6d5d2');
  }
  return (
    <div className="App" >
      {/* <HttpDemo></HttpDemo> */}
      <AppBar style={{ backgroundColor:'black'}} position="static">
  <Toolbar>
  <Typography variant="h5" style={{fontFamily:'Montserrat,sans-serif'}}>
     <NavLink style={{textDecoration: 'none',color:'white'}} to="">GoCabs </NavLink>
    </Typography>

    {/* <Button 
    style={{marginLeft: "67%", fontFamily:'Montserrat,sans-serif'}} 
    disableRipple>
      <NavLink 
        style={{fontFamily:'Montserrat,sans-serif',textDecoration: 'none',color:'white'}} 
        to="/header">About
      </NavLink>
    </Button> */}

    <Button 
    id="LoginButton"
    style={{marginLeft: "87%", fontFamily:'Montserrat,sans-serif'}} 
    disableRipple 
    disabled={disable}
    onClick={buttonhandle}>
      <NavLink 
      style={{fontFamily:'Montserrat,sans-serif',textDecoration: 'none',color:color}} 
      to="/header">Home
      </NavLink>
    </Button>
    
    {/* <Button style={{marginLeft: "0%", fontFamily:'Montserrat,sans-serif'}} disableRipple disabled={disable} onClick={buttonhandle}><NavLink style={{fontFamily:'Montserrat,sans-serif',textDecoration: 'none',color:color}} to="/header">About</NavLink></Button> */}
    {/* <Button style={{marginLeft: "90%", fontFamily:'Montserrat,sans-serif'}} disableRipple disabled={disable} onClick={buttonhandle}><NavLink style={{fontFamily:'Montserrat,sans-serif',textDecoration: 'none',color:color}} to="/header">Login</NavLink></Button> */}
    {/* <Button style={{marginLeft: "90%", fontFamily:'Montserrat,sans-serif'}} disableRipple disabled={disable} onClick={buttonhandle}><NavLink style={{fontFamily:'Montserrat,sans-serif',textDecoration: 'none',color:color}} to="/header">Login</NavLink></Button> */}

  </Toolbar>
</AppBar>
{/* <CurrentTrip></CurrentTrip> */}
{/* <Tabletesting></Tabletesting> */}
{/* <Newtable></Newtable> */}
{/* <Bookatrip></Bookatrip> */}
      {/* <Counter></Counter> */}
      {/* <CenteredTabs></CenteredTabs> */}
      <RouterDom/>
      {/* <AdminFunctions></AdminFunctions> */}
    </div>
  );
}

export default App;
