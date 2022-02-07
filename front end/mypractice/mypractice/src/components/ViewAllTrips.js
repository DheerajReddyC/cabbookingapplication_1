import React, { useEffect, useState } from 'react'
import { apiService } from './Api';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: '35ch',
    },
    selectEmpty: {
      marginTop: theme.spacing(255),
    },
  }));
function ViewAllTrips() {
    const [viewall, setViewall]=useState("");
    const [viewdetails, setviewdetails]=useState("");
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
      useEffect(()=>{
        console.log("it is working ");
          const getalltrips = () =>{
              apiService("GET", "/TripBooking/viewall/1")
                  .then((res)=>{
                  console.log(res.data);
                  setviewdetails(res.data)
                  })
          };
        getalltrips();
      }, [])
      
      const cancelTrip = (book_id, bill, customer,customerId,distanceInKm,driver,driverId,fromLocalDateTime,fromLocation,toLocation) =>{
        apiService('PUT', '/TripBooking/update', {
          tripBookingId: book_id, status: false, bill:bill, customer:customer, customerId:customerId, distanceInKm: distanceInKm, driver:driver, driverId:driverId, fromLocalDateTime:fromLocalDateTime, fromLocation:fromLocation, toLocation:toLocation})
        .then((data)=>{
          if(data.status === 200){
            alert("Your trip successfully cancelled");
            window.location.reload();
          }else{
            alert("Unable to cancel the trip");
          }
        })
      }

      const deleteTrip = (book_id) =>{
        apiService('DELETE', '/TripBooking/delete/'+book_id)
        .then((data)=>{
          if(data.status === 200){
            alert("Trip Deleted Succssefully")
            window.location.reload()
          }else{
            alert("Unable to Deleted trip")
          }
        })
      }
    
  
    return (
            <div style={{ 'paddingTop': 20, 'paddingBottom':20 }}>
              <Container fixed>
              <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={4}>
              {viewdetails && 
                viewdetails.map((trip)=>{
                    return (
                      <Grid key={trip.tripBookingId} item>
                        <Card className={classes.root}>
                            <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Trip information
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {trip.fromLocation} - {trip.toLocation}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                              {trip.fromLocalDateTime}
                            </Typography>
                            <Typography variant="body2" component="p">
                              Cab Type: {trip.driver.cab.carType} <br />
                              Driver Name: {trip.driver.username} <br />
                              Status: <Chip label={trip.status ? 'Booked' : 'Cancelled'} color={trip.status ? 'primary': 'secondary'}/>
                            </Typography>
                            </CardContent>
                            <CardActions>
                              {trip.status && <Button size="small" color="primary" onClick={()=>cancelTrip(trip.tripBookingId, trip.bill, trip.customer, trip.customerId, trip.distanceInKm,trip.driver,trip.driverId,trip.fromLocalDateTime,trip.fromLocation,trip.toLocation)}>Cancel Trip</Button>}
                              {!trip.status && <Button size="small" color="secondary" onClick={()=>deleteTrip(trip.tripBookingId)}>Delete Trip</Button>}
                            </CardActions>
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

export default ViewAllTrips
