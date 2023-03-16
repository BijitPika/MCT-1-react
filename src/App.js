import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Photo from './Components/Photo';
import Features from './Components/Features';
import Stats from './Components/Stats';
import Bottom from './Components/Bottom';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Photo/>
     <Features/>
     <Stats/>
     <Bottom/>
     
    </div>
  );
}

export default App;
