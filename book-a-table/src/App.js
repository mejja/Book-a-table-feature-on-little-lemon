import './App.css';
import Banner from "./components/Banner";
import DishCard from "./components/DishCard";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  return (
    <div className="App">
    < ResponsiveAppBar />
    < Banner />
    <DishCard />
    </div>
  );
}

export default App;
