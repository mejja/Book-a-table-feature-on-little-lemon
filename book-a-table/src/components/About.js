import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { red } from '@mui/material/colors';




export default function About() {
  return (
    <Box 
     sx={{ flexGrow: 1, height: 400, borderBottom:5}}>
      <Grid container spacing={{ xs: 2, md: 4, lg: 8 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid xs={2} sm={4} md={8}>
            <h1 style={{fontSize:50}}>
              Little Lemon
            </h1>
            <h2>Chicago</h2>
          </Grid>
          <Grid xs={1} sm={2} md={2} mdOffset={'auto'}>
          </Grid>
      </Grid>
    </Box>
  );
}