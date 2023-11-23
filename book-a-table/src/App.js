import { Container, Typography } from '@mui/material';
import './App.css';
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Banner from "./components/Banner";
import DishCard from "./components/DishCard";
import Testimonials from "./components/Testimonials";
import Grid from '@mui/material/Grid';
import menus from  "./data.json";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import OffsetGrid from './components/OffsetGrid';


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
function App({dishes}) {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    < ResponsiveAppBar />
    < Banner />
    <Container>
      {menus.map((menu) => (
        <>
        <Stack
        direction={{xs: "column", sm: "column", md: "row"}}
        spacing={{xs: 1, sm: 2, md: 32, lg: 72,  }}
        marginTop={25}
        marginBottom={20}>
        <Typography
        variant="h1"
        component="h1"
        marginTop={5}
        marginButtom={3}
        >
          {menu.name}
        </Typography>
        <Button variant="contained" color="ochre" size="medium" 
        style={{maxHeight: "4em", maxWidth: "4em", minWidth: "350px", minHeight: "4em", fontFamily: "Karla,sans-serif", fontSize: "18px", fontWeight: "800", borderRadius: "3em"}}>
        Online Menu
          </Button>
        </Stack>
        <Grid container spacing={5}>
          {menu.dishes.map((dish, index) => 
          <DishCard dish={dish} key={index}/>)}
        </Grid>
        </>
      ))}
    </Container>
    </div>
    < Testimonials />
    <OffsetGrid />
    </ThemeProvider>

  );
}

export default App;
