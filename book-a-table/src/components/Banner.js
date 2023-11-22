import React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    <header style={{ paddingLeft: 0}} >
      <div
        className='p-5 text-center bg-image'
        style={{ height: 400 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(73, 94, 87)', height: 500,  paddingLeft: 30, paddingTop: 40, color: 'white' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white' style={{paddingLeft: "6em"}}>
              <h1 className='mb-3' style={{color: 'yellow'}}>Little Lemon</h1>
              <h2 className='mb-3'>Chicago</h2>
              <h2 className='mb-3' style={{marginTop: 40, marginBottom:40, maxWidth:400}} textArea>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h2>
              <Button variant="contained" color="ochre" size="medium"
              style={{maxHeight: "4em",  minWidth: "350px", minHeight: "4em", fontFamily: "Karla,sans-serif", fontSize: "18px", fontWeight: "800", borderRadius: "3em"}}
              >Reserve a Table</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
    </ThemeProvider>
  );
}

