import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//import Weather from './Weather';
//import Days from './Days';
import Header from './Header';
import WeatherDays from './WeatherDays';
import WeatherCities from './WeatherCities';

function App() {
  return (
    <div className="App">
       <Router>
         < Header/>
        <Route path='/' exact component={WeatherDays}/>
        <Route path='/WeatherCities' exact component={WeatherCities}/>
      </Router>
    </div>
  );
}

export default App;
