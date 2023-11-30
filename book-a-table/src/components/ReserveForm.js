import { FormLabel, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import "../App.css";
import BasicDateTimePicker from "./BasicDateTimePicker";
import PeopleSlider from './PeopleSlider';
import OccassionDropDown from './OccassionDropDown';
import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function ReserveForm() {
  return (
   <form>
    <Typography sx={{marginBottom:-2}}>
    <FormLabel sx={{fontFamily:"Markazi Text,serif", fontSize:"1.5em", fontWeight:"bold",color:"#000"}}>Customer's Name:</FormLabel>
    </Typography>
    <Grid container sx={{marginY:2}}>
        <Grid item xs={6} marginX={0} display={'flex'} flexDirection={"row"}>
            <TextField
             required
             id="outlined-required"
             label="First"
            />
        </Grid>
        <Grid item xs={6} marginX={0}>
        <TextField
             required
             id="outlined-required"
             label="Last"
            />
        </Grid>
        </Grid>
        <Typography sx={{marginBottom:-2, marginTop:-1}}>
        <FormLabel sx={{fontFamily:"Markazi Text,serif", fontSize:"1.5em",fontWeight:"bold",color:"#000"}}>E-mail:</FormLabel>
        </Typography>
    <Grid item  sx={{marginY:2}} marginX={0}>
            <TextField
             required
             fullWidth="true"
             id="outlined-required"
             label="name@email.com"
            />
    </Grid>
    <Typography sx={{marginTop:-1}}>
        <FormLabel sx={{fontFamily:"Markazi Text,serif", fontSize:"1.5em",fontWeight:"bold", color:"#000"}}>Date & Time:</FormLabel>
        </Typography>
        < BasicDateTimePicker />
        <Typography sx={{marginBottom:-3, marginTop:1}} >
        <FormLabel sx={{fontFamily:"Markazi Text,serif", fontSize:"1.5em",fontWeight:"bold", color:"#000"}}>Number of People:</FormLabel>
        </Typography>
        < PeopleSlider />
        <Typography sx={{marginTop:3}} >
        <FormLabel sx={{fontFamily:"Markazi Text,serif", fontSize:"1.5em",fontWeight:"bold", color:"#000"}}>Occasion:</FormLabel>
        </Typography>
        < OccassionDropDown />
        <Typography>
        <FormLabel sx={{fontFamily:"Markazi Text,serif", fontSize:"1.5em",fontWeight:"bold",color:"#000"}}>Notes:</FormLabel>
        </Typography>
        <TextField sx={{marginTop:1}} id="outlined-basic" multiline maxRows={4} label="comments(optional)" variant="outlined"  fullWidth="true"/>
        <FormGroup>
      <FormControlLabel required control={<Checkbox color='success' />}label="I agree to Little's Lemon terms & condition" />
    </FormGroup>
        <Button variant="contained" color='success' sx={{marginTop:1, backgroundColor:"#495e57"}} fullWidth="true">
        Success
      </Button>
   </form>
  )
}

