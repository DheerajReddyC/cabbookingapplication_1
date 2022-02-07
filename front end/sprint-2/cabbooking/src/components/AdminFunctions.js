import React from 'react'
import { Button, Card } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import './AdminFunctions.css';



function AdminFunctions() {
    return (
        <body className="AdminBody">
        <div style={{marginTop:'12%'}} align="center">
            <h2 className ="title">Functions</h2><br/>
  <NavLink to="/ViewAllTrips" className ="FuncbuttonAdmin">All Trips</NavLink><br/><br/>
  {/* <NavLink to="/GetTripsCabWise" className ="FuncbuttonAdmin"> Trips Cab Wise</NavLink><br/><br/> */}
 <NavLink to="/GetTripsCustomerWise" className ="FuncbuttonAdmin">Trips Customer-wise</NavLink><br/><br/>
  <NavLink to="/GetTripsDateWise" className ="FuncbuttonAdmin">Trips Date-Wise</NavLink><br/><br/>
  {/* <NavLink to="/DayWiseTrips" className ="FuncbuttonAdmin">All Trips For Days</NavLink><br/><br/> */}
<NavLink to="/GetBestDrivers" className ="FuncbuttonAdmin">Best Drivers</NavLink>
         </div>
         </body>
    )
}

export default AdminFunctions
