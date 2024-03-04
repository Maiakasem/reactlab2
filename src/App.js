import './App.css';
import Cards from './Components/Cards';
import Slider from './Components/Slider';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


function App() {
  return (
    <div className="App">
      <h1>Image Slider</h1>
      <hr></hr>
      <Slider />
      <hr></hr>
      <Cards />
    </div>
  );
}

export default App;
