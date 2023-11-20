import { Container, Typography } from '@mui/material';
import './App.css';
import Banner from "./components/Banner";
import DishCard from "./components/DishCard";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Grid from '@mui/material/Grid';
import menus from  "./data.json";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function App({dishes}) {
  return (
    <div className="App">
    < ResponsiveAppBar />
    < Banner />
    {/* < SpacingGrid /> */}
    <Container>
      {menus.map((menu) => (
        <>
        <Stack
        direction={{xs: "column", sm: "row", md: "row"}}
        spacing={{xs: 1, sm: 2, md: 4}}
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
        <Button variant="outlined" color="error" size="large">Online Menu</Button>
        <Button variant="outlined" color="error" size="large">Online Menu</Button>
        <Button variant="outlined" color="error" size="large">Online Menu</Button>
        <Button variant="outlined" color="error" size="large">Online Menu</Button>
        <Button variant="outlined" color="error" size="large">Online Menu</Button>
        <Button variant="outlined" color="error" size="large">Online Menu</Button>
        </Stack>
        <Grid container spacing={5}>
          {menu.dishes.map((dish, index) => 
          <DishCard dish={dish} key={index}/>)}
        </Grid>
        </ >
      ))}
    </Container>
    </div>
  );
}

export default App;
