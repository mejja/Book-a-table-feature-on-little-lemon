import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';




export default function About() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 10, bgcolor: "rgba(73, 94, 87)", height: 400}}>
      <Grid container spacing={{ xs: 2, md: 4, lg: 8 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid xs={1} sm={2} md={2}>
            <h1>
              This section is for about the area.
            </h1>
          </Grid>
          <Grid xs={1} sm={2} md={2} mdOffset={'auto'}>
          </Grid>
      </Grid>
    </Box>
  );
}