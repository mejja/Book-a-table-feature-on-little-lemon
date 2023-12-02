import { FormLabel, Grid, TextField, Typography, Box } from '@mui/material'
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
   <form id='reservation-form'>
    <Typography sx={{marginBottom:-2}}>
    <FormLabel sx={{fontFamily:"Markazi Text,serif",fontSize:"1.1em", fontWeight:"bold",color:"#000"}}>Customer's Name:</FormLabel>
    </Typography>
    <Grid container sx={{marginY:2}}>
        <Grid item xs={6} marginX={0} display={'flex'} flexDirection={"row"}>
            <TextField
             required
             id="outlined-required"
             label="First"
             helperText="This Field can't be empty."
             size="small"
             sx={{bgcolor:'#F5F5F5'}}
            />
        </Grid>
        <Grid item xs={6} marginX={0}>
        <TextField
             required
             id="outlined-required"
             label="Last"
             helperText="This Field can't be empty."
             size="small"
             sx={{bgcolor:'#F5F5F5'}}
            />
        </Grid>
        </Grid>
        <Typography sx={{marginBottom:-2, marginTop:-1}}>
        <FormLabel sx={{fontFamily:"Markazi Text,serif",fontSize:"1.1em",fontWeight:"bold",color:"#000"}}>E-mail:</FormLabel>
        </Typography>
    <Grid item  sx={{marginY:2}} marginX={0}>
            <TextField
             required
             fullWidth="true"
             id="outlined-required"
             label="name@domain.com"
             helperText="This Field can't be empty."
             size="small"
             sx={{bgcolor:'#F5F5F5'}}
            />
    </Grid>
    <Typography sx={{marginTop:-1}}>
        <FormLabel id='Data&Time-label' sx={{fontFamily:"Markazi Text,serif",fontSize:"1.1em",fontWeight:"bold", color:"#000"}}>Date & Time:</FormLabel>
        </Typography>
        {/* Reduced date picker width */}
        <Box width={"80%"}>
        < BasicDateTimePicker />
        </Box>
        <Typography sx={{marginBottom:-3, marginTop:1}} >
        <FormLabel  id='numberOfPeopla-label' sx={{fontFamily:"Markazi Text,serif", fontSize:"1.1em",fontWeight:"bold", color:"#000"}}>Number of People:</FormLabel>
        </Typography>
        < PeopleSlider />
        <Typography sx={{marginTop:3}} >
        <FormLabel id='occasionDropDown-label' sx={{fontFamily:"Markazi Text,serif",fontSize:"1.1em",fontWeight:"bold", color:"#000"}}>Occasion:</FormLabel>
        </Typography>
        < OccassionDropDown />
        <Typography>
        <FormLabel id='comments-label' sx={{fontFamily:"Markazi Text,serif",fontSize:"1.2em",fontWeight:"bold",color:"#000"}}>Notes:</FormLabel>
        </Typography>
        <TextField id="comments" multiline maxRows={4} label="comments(optional)" sx={{bgcolor:'#F5F5F5'}} size='small' fullWidth="true"/>
        <FormGroup>
      <FormControlLabel required control={<Checkbox color='success' />}label="I agree to Little's Lemon terms & condition" />
    </FormGroup>
    <Box sx={{flexGrow:1 }}>
    <Grid container spacing={10}>
    <Grid item>
    <Button variant="contained" color='success' sx={{marginTop:1, width:"16em"}} >
    Submit
    </Button>
    </Grid>
    <Grid item>
    <Button variant="contained" color='error' sx={{marginTop:1, width:"9em"}} >
    Clear
    </Button>
    </Grid>
    </Grid>
    </Box>
   </form>
  )
}

