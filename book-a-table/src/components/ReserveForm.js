import { FormLabel, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import "../App.css";
import BasicDateTimePicker from "./BasicDateTimePicker";
import PeopleSlider from './PeopleSlider';
import OccassionDropDown from './OccassionDropDown';

export default function ReserveForm() {
  return (
   <form>
    <Typography sx={{fontSize:"2em", color:"#000"}}>
    <FormLabel >Customer's Name:</FormLabel>
    </Typography>
    <Grid container sx={{marginY:2}}>
        <Grid item xs={6} marginX={0} display={'flex'} flexDirection={"row"}>
            <TextField
             required
             id="outlined-required"
             label="Required"
             defaultValue="First Name"
            />
        </Grid>
        <Grid item xs={6} marginX={0}>
        <TextField
             required
             id="outlined-required"
             label="Required"
             defaultValue="Last Name"
            />
        </Grid>
        </Grid>
        <Typography sx={{fontSize:"1em", color:"#000"}}>
        <FormLabel >E-mail:</FormLabel>
        </Typography>
    <Grid item  sx={{marginY:2}} marginX={0}>
            <TextField
             required
             fullWidth="true"
             id="outlined-required"
             label="Required"
             defaultValue="name@domain.com"
            />
    </Grid>
    <Typography sx={{fontSize:"1em", color:"#000"}}>
        <FormLabel >Date & Time:</FormLabel>
        </Typography>
        < BasicDateTimePicker />
        <Typography sx={{fontSize:"1em", color:"#000"}}>
        <FormLabel >Number of People:</FormLabel>
        </Typography>
        < PeopleSlider />
        <Typography sx={{fontSize:"1em", color:"#000"}}>
        <FormLabel >Occasion</FormLabel>
        </Typography>
        < OccassionDropDown />
   </form>
  )
}

