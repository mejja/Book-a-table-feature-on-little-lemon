import { Container } from '@mui/material';
import './App.css';
import Banner from "./components/Banner";
import DishCard from "./components/DishCard";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Grid from '@mui/material/Grid';
import SpacingGrid from './components/SpacingGrid';

function App() {
  return (
    <div className="App">
    < ResponsiveAppBar />
    < Banner /> 
    < SpacingGrid />
    <Container>
    <Grid container spacing={5}>
    <DishCard />
    <DishCard />
    <DishCard />
    </Grid>
    </Container>
    
    </div>
  );
}

export default App;
