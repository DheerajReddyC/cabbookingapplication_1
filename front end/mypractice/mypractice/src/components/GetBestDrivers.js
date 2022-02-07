import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './Createaccount.css';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { apiService } from './Api';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: '35ch',
    },
    controls:{
        textAlign: 'left',
    },
    selectEmpty: {
      marginTop: theme.spacing(255),
    },
  }));
function GetBestDrivers(){
    const[driverDetail,setDriverDetail]=useState("");
    const classes = useStyles();

    useEffect(()=>{
      const getDriver = () =>{
        apiService("GET", "/driver/getbestdrivers")
          .then((res)=>{
            console.log(res.data);
            setDriverDetail(res.data)
          })
      };
      getDriver();
    }, [])

    return(
         <div style={{ 'paddingTop': 20, 'paddingBottom':20 }}>
              <Container fixed>
              <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={4}>
              {driverDetail && 
                driverDetail.map((driver)=>{
                    return (
                      <Grid key={driver.driverId} item>
                        <Card className={classes.root}>
                            <CardContent>
                            <Typography variant="h5" component="h2">
                                {driver.username} - {driver.rating}<Icon>star</Icon>
                            </Typography>                            
                            <Typography className={classes.pos} color="textSecondary">
                              {driver.email}
                            </Typography>
                            <Typography variant="body2" component="p" className={classes.controls}>
                              Address: {driver.address} <br />
                              Mobile No: {driver.mobileNumber} <br />
                              Cab Type: {driver.cab ? driver.cab.carType : 'Not found'} <br />
                              Per KM rate: {driver.cab ? driver.cab.perKmRate: 'Not found'} <br />
                              License Number: {driver.licenceNo ? driver.licenceNo : 'Not found'}
                            </Typography>
                            </CardContent>
                            {/* <CardActions>
                              {trip.status && <Button size="small" color="primary" onClick={()=>cancelTrip(trip.tripBookingId, trip.bill, trip.customer, trip.customerId, trip.distanceInKm,trip.driver,trip.driverId,trip.fromLocalDateTime,trip.fromLocation,trip.toLocation)}>Cancel Trip</Button>}
                              {!trip.status && <Button size="small" color="secondary" onClick={()=>deleteTrip(trip.tripBookingId)}>Delete Trip</Button>}
                            </CardActions> */}
                        </Card>   
                      </Grid>     
                    );
                      }
                )}
                </Grid>
                </Grid>
                </Grid>
                </Container>
            </div>

    );
}
export default GetBestDrivers;