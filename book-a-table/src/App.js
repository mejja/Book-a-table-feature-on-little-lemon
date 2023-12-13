import './App.css';
import ResponsiveHeader from "./components/ResponsiveHeader";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import About from './components/About';
import Footer from './components/Footer';
import Specials from './components/Specials'



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
    <ResponsiveHeader />
    <Banner />
    <Specials />
    </div>
    <Testimonials />
    <About />
    <Footer/>
    </ThemeProvider>

  );
}

export default App;
