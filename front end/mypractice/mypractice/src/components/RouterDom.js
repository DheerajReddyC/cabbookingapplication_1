import React from 'react'
import { Link, Route, useParams, Switch } from 'react-router-dom'
import Header from './Header'
import CreateAccount from './CreateAccount';
import { Button, Card } from '@material-ui/core';
import Admin from './Admin'
import Driver from './Driver'
import Customer from './Customer'
import CustomerFunctions from './CustomerFunctions';

import Bookatrip from './Bookatrip';
import Viewroutes from './Viewroutes';
import AdminFunctions from './AdminFunctions';
import GetTripsCabWise from './GetTripsCabWise';
import GetTripsCustomerWise from './GetTripsCustomerWise';
import GetTripsDateWise from './GetTripsDateWise';
import DayWiseTrips from './DayWiseTrips';
import DriverFunctions from './DriverFunctions';
import CurrentTripCustomer from './CurrentTripCustomer';
import CurrentTripDriver from './CurrentTripDriver';
import ViewRoutesDriver from './ViewRoutesDriver';
import CreateDriverAcc from './CreateDriverAcc';
import ViewAllTrips from './ViewAllTrips';
import GetBestDrivers from './GetBestDrivers';


function RouterDom() {

    
    return (

        <div align="center">
            <Route path="/header">
                <Header></Header>
            </Route>

            <Route path="/bookatrip">
                <Bookatrip></Bookatrip>
            </Route>

            <Route path="/customerFunctions">
                <CustomerFunctions></CustomerFunctions>
            </Route>

            <Route path="/currentTripCustomer">
                <CurrentTripCustomer></CurrentTripCustomer>
            </Route>

            <Route path="/currentTripDriver">
                <CurrentTripDriver></CurrentTripDriver>
            </Route>

            <Route path="/viewroutes">
                <Viewroutes></Viewroutes>
            </Route>

            <Route path="/viewRoutesDriver">
                <ViewRoutesDriver></ViewRoutesDriver>
            </Route>

            <Route path="/adminfunctions">
                <AdminFunctions></AdminFunctions>
            </Route>

            <Route path="/GetTripsCabWise">
                <GetTripsCabWise></GetTripsCabWise>
            </Route>

            <Route path="/GetTripsCustomerWise">
                <GetTripsCustomerWise></GetTripsCustomerWise>
            </Route>

            <Route path="/GetTripsDateWise">
                <GetTripsDateWise></GetTripsDateWise>
            </Route>

            <Route path="/DayWiseTrips">
                <DayWiseTrips></DayWiseTrips>
            </Route>

            <Route path="/getbestdrivers">
                <GetBestDrivers></GetBestDrivers>
            </Route>

            <Route path="/driverFunctions">
                <DriverFunctions></DriverFunctions>
            </Route>
            <Route path="/ViewAllTrips">
                <ViewAllTrips></ViewAllTrips>
            </Route>

            <div>



            <Card style={{ width: '60%', height:'auto',marginTop:'7%',
    alignContent: 'center',
    borderRadius:'5px',}} elevation= '4'>
        <Switch>
            <Route path="/createaccount" >
                <CreateAccount></CreateAccount>
            </Route>
            <Route path="/admin" >
            <Admin></Admin>
            </Route>
            <Route path="/createDriverAcc">
                <CreateDriverAcc></CreateDriverAcc>
            </Route>

            <Route path="/customer" >
            <Customer></Customer>
            </Route>

            <Route path="/driver" >
            <Driver></Driver>
            </Route>
            </Switch>
            </Card>
            </div>
        </div>
    )
}

export default RouterDom
