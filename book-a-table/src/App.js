import { Container, Typography } from '@mui/material';
import './App.css';
import Banner from "./components/Banner";
import DishCard from "./components/DishCard";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Grid from '@mui/material/Grid';
import SpacingGrid from './components/SpacingGrid';
import menus from  "./data.json";

function App({dishes}) {
  return (
    <div className="App">
    < ResponsiveAppBar />
    < Banner /> 
    < SpacingGrid />
    <Container>
      {menus.map((menu) => (
        <>
        <Typography 
        variant="h4"
        component="h2"
        marginTop={5}
        marginButtom={3}
        >
          Top {menu.name} Tours
        </Typography>
        <Grid container spacing={5}>
          {menu.dishes.map((dish, index) => 
          <DishCard dish={dish} key={index}/>)}
        </Grid>
        </>
      ))}

    </Container>
    </div>
  );
}

export default App;
