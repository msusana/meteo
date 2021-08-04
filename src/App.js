import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//import Weather from './Weather';
//import Days from './Days';
import Header from './Header';
import WeatherDays from './WeatherDays';

function App() {
  return (
    <div className="App">
      < Header/>

      <WeatherDays/>
       {/* < Weather/>
        <div class="row">
            <div className="col s12 m6 push-m3">
                <div className="weather card blue-grey darken-1">
                
                  < Days />
                </div>
            </div>
        </div> */}
    </div>
  );
}

export default App;
