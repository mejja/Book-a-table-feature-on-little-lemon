import { Container, Typography } from '@mui/material';
import './App.css';
import ResponsiveHeader from "./components/ResponsiveHeader";
import Banner from "./components/Banner";
import DishCard from "./components/DishCard";
import Testimonials from "./components/Testimonials";
import Grid from '@mui/material/Grid';
import menus from  "./data.json";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import About from './components/About';
import Footer from './components/Footer';


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
    < ResponsiveHeader />
    < Banner />
    <Container>
      {menus.map((menu) => (
        <>
        <Stack
        direction={{xs: "column", sm: "column", md: "row"}}
        spacing={{xs: 1, sm: 2, md: 5, lg: 70 }}
        marginTop={20}
        marginBottom={15}>
        <Typography
        variant="h1"
        component="h1"
        marginTop={5}
        marginButtom={3}
        >
          {menu.name}
        </Typography>
        <div id="onlinemenu-button">
        <Button variant="contained" color="ochre" size="medium" >
        Online Menu
        </Button>
        </div>
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
    <About />
    <Footer/>
    </ThemeProvider>

  );
}

export default App;
