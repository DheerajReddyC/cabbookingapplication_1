import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './Createaccount.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import RouterDom from './RouterDom';
import { apiService } from './Api';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: '35ch',
    },
    selectEmpty: {
      marginTop: theme.spacing(255),
    },
  }));
function Bookatrip() {
    const classes = useStyles();
    const [location1, setLocation1] = useState('');
    const [location2, setLocation2] = useState('');
    const [driverDetails, setDriverDetails] = useState([]);
    const [selecteddriverid, setSelDriver] = useState("");
    const [rating, setRating] = useState('');
    const [kmrate, setKmrate] = useState("");
    const [licence, setLicense] = useState("");
    const [cartype, setCartype] = useState("");
    const [cabid, setCabid] = useState("");
    const [drivername, setDrivername] = useState("");
    const [totlabill, setTotalBill] = useState("");
    const rate = {
      'Bengaluru': 10,
      'Chennai': 20,
      'Hyderabad': 30,
      'Mumbai': 40,
    }
  
    const handleChange1 = (event) => {
      setLocation1(event.target.value);
    };
    const handleChange2 = (event) => {
      setLocation2(event.target.value);
    };

    useEffect(()=>{
      const getDriver = () =>{
        apiService("GET", "/driver/getbestdrivers")
          .then((res)=>{
            console.log(res.data);
            setDriverDetails(res.data)
          })
      };
      getDriver();
    }, [])

    const handleDriver = (e) =>{
      console.log(e);
      const {target} = e;
      console.log(target.value.username);
      setSelDriver(target.value.driverId);
      setCabid(target.value.cab.cabId);
      setRating(target.value.rating)
      setKmrate(target.value.cab.perKmRate)
      setLicense(target.value.licenceNo)
      setCartype(target.value.cab.carType)
      setDrivername(target.value)  
      setTotalBill((rate[location1] * rate[location2])*kmrate)
    }

    const post_data = {
      bill: parseFloat((rate[location1] * rate[location2])*kmrate),
      customerId: 1,
      distanceInKm: parseFloat(rate[location1] * rate[location2]),
      driverId: parseInt(selecteddriverid),
      fromLocalDateTime:"2022-02-08T15:53:16",
      toLocalDateTime:"",
      fromLocation:location1,
      status:true,
      toLocation:location2,
      customer:{customerId:1},
      driver:{driverId:parseInt(selecteddriverid)},
    }

    const submitTrip = () =>{
      apiService("POST", "/TripBooking/insert", post_data)
      .then((res)=>{
        if(res.status === 200){
          alert("Successfully your trip is booked")
          window.location.reload()
        }else{
          alert("Failed to book trip. \nPlease try again after sometime")
        }
      })
    }

    const rows = [
      {"side_heading":"Ratinng",value: rating},
      {"side_heading":"Rate/Km",value: kmrate},
      {"side_heading":"License No",value: licence},
      {"side_heading":"Car Type",value: cartype},
      {"side_heading":"Total KM",value: rate[location1] * rate[location2]},
      {"side_heading":"Total Cost", value: kmrate + 'x' + (rate[location1] * rate[location2]) +"="+ (rate[location1] * rate[location2])*kmrate}
    ];

  
    return (
      
      <div align="center" style={{borderRadius: '5px',backgroundColor:'white',marginTop:'10%', marginLeft:'25%', marginRight:'25%',paddingTop:'1.5%',paddingBottom:'1.5%',boxShadow:'2px 2px #888888'}}>
          <h2>Book Your Trip</h2>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Departure From</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={location1}
            onChange={handleChange1}
          >
            <MenuItem value={'Bengaluru'}>Bengaluru</MenuItem>
            <MenuItem value={'Chennai'}>Chennai</MenuItem>
            <MenuItem value={'Hyderabad'}>Hyderabad</MenuItem>
            <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
          </Select>
        </FormControl> <br/>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Arrival To</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={location2}
            onChange={handleChange2}
          >
            <MenuItem value={'Bengaluru'}>Bengaluru</MenuItem>
            <MenuItem value={'Chennai'}>Chennai</MenuItem>
            <MenuItem value={'Hyderabad'}>Hyderabad</MenuItem>
            <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
          </Select>
        </FormControl><br/>
        <form className={classes.container} noValidate>  
          <TextField
            id="datetime-local"
            label="Date"
            type="datetime-local"
            defaultValue="2022-02-08T10:30"
            className={classes.formControl}
          
            InputLabelProps={{
              shrink: true,
            }}
          /><br/><br/>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Select Driver</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={drivername}
              onChange={(e)=>{handleDriver(e)}}
            >
              {driverDetails && 
                driverDetails.map((driver)=>{
                return (
                  <MenuItem 
                    value={driver}
                  >
                    {driver.username}
                  </MenuItem>
                );
              })}
            </Select>
        </FormControl><br/>
        
        {selecteddriverid && <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align='center' colSpan={2}>Trip Booking information</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.side_heading}
                  </TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>}
        <Button 
          variant="contained" 
          color="primary" 
          style={{backgroundColor:'black',width:'35ch'}}
          onClick={submitTrip}
        >
        Book Now
        </Button>
          {/* <NavLink to="/currentTripCustomer" style={{cursor:'pointer',textDecoration: 'none'}}>
            <Button 
              variant="contained" 
              color="primary" 
              style={{backgroundColor:'black',width:'35ch'}} >
            Book Now
            </Button>
          
          </NavLink> */}
          <br/>
        </form>
        <NavLink to="/customerFunctions" style={{cursor:'pointer',textDecoration: 'none'}}><Button 
          variant="contained" 
          color="primary" 
          style={{marginTop:'1%',backgroundColor:'black',width:'19ch', fontSize:'12px'}} >
            
            Back
            
            </Button>
            {/* <Button 
          variant="contained" 
          color="primary" 
          style={{marginTop:'1%',backgroundColor:'black',width:'35ch'}} 
          onclick={ViewAllTrips}>
            view All Trips
            
            </Button> */}
            </NavLink>
            <NavLink to="/viewAllTrips" style={{cursor:'pointer',textDecoration: 'none'}}><Button 
          variant="contained" 
          color="primary" 
          style={{marginLeft:'15px', marginTop:'1%',backgroundColor:'black',width:'19ch', fontSize:'12px'}} >
            
            view Trips
            
            </Button>
            </NavLink>
        <br/>

      </div>
    );
}

export default Bookatrip
