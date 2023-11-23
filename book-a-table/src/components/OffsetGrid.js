import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';




export default function OffsetGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 10, bgcolor: "rgba(73, 94, 87)"}}>
      <Grid container spacing={{ xs: 2, md: 4, lg: 8 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid xs={1} sm={2} md={2}>

            <img
                id="profile-img"
                src={require("../assets/images/Major_M_75x75.jpg")}
                alt="Profile"
                />
          </Grid>
          <Grid xs={1} sm={2} md={2} mdOffset={'auto'}>
            <img
                id="profile-img"
                src={require("../assets/images/Major_M_75x75.jpg")}
                alt="Profile"
                />
          </Grid>
          {/* <Grid xs={1} sm={2} md={2}>
            <Item>xs=2</Item>
          </Grid>
          <Grid xs={1} sm={2} md={2}>
            <Item>xs=2</Item>
          </Grid>
          <Grid xs={1} sm={2} md={2}>
            <Item>xs=2</Item>
          </Grid>
          <Grid xs={1} sm={2} md={2}>
            <Item>xs=2</Item>
          </Grid> */}
      </Grid>
    </Box>
  );
}