import * as React from 'react';
import "../App.css";
import { Box } from '@mui/material';




export default function About() {
  return (
    <Box sx={{borderBottom:7}}>
            <div className='about'>
            <div className='about-content'>
            <h4>
              Little Lemon
            </h4>
            <h5 >Chicago</h5>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.
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