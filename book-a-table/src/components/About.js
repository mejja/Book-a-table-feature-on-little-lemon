import * as React from 'react';
import "../App.css";
import { Box } from '@mui/material';


export default function About() {
  return (
    <Box sx={{borderBottom:7, marginRight:0}}>
            <div className='about'>
            <div className='about-content'>
            <h4>
              Little Lemon
            </h4>
            <h5 >Chicago</h5>
            <p>
            Little Lemon is mediterenian restaurant serverving local delicacies with African Twist
            </p>
            </div>
            <div className='owners'>
            <img id='chefs'src={require('../assets/images/owners.jpg')} alt='Male Owners'/>
            <img id='restaurant' src={require('../assets/images/restaurant.jpg')} alt='Female Owners' />
            </div>
            </div>
            </Box>
  );
}