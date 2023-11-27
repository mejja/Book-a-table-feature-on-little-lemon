import "../App.css";
import React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Hidden from '@mui/material/Hidden';

// Color theme function
const theme = createTheme({
  palette: {
    ochre: {
      main: '#f4ce14',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    }
  }
})

export default function Banner() {
  return (
    <ThemeProvider theme={theme}>
    <header className="banner-box">
      <Box style={{ height: 550, paddingLeft: 30, paddingTop: 40}}>
        <Grid container spacing={{ xs: 2, md: 4, lg: 8 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid xs={2} sm={4} md={4}>
          {/* <div className='d-flex justify-content-center align-items-center h-100'> */}
            <div className='text-white' style={{paddingLeft: "6em"}}>
              <h1  style={{color: 'yellow', fontSize:50}}>Little Lemon</h1>
              <h2>Chicago</h2>
              <h2 style={{marginTop: 40, marginBottom:40, maxWidth:400}} textArea>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h2>
              <Button variant="contained" color="ochre" size="medium"
              style={{maxHeight: "4em",  minWidth: "300px", minHeight: "4em", fontFamily: "Karla,sans-serif", fontSize: "18px", fontWeight: "800", borderRadius: "3em"}}
              >Reserve a Table</Button>
            </div>
        </Grid>
        <Hidden mdDown={true}>
        <Grid md={3} lg={4} mdOffset={'auto'}>
        <div className='featured'>
            <img alt='featured Dish'
            src={require("../assets/images/restauranfood.jpg")}/>
          </div>
        </Grid>
        </Hidden>
      </Grid>
      </Box>
    </header>
    </ThemeProvider>
  );
}

