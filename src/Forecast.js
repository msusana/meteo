import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import moment from 'moment';


function Forecast(props){
    
    function capitalizarFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }


    const weather = props.weather.weather.map((thisWeather)=>
    <Row key= {thisWeather.dt} style={{ paddingLeft: '5%', paddingRight:'5%'}} className='forecast'>
        <Col xs={4} md={1} className= 'align-self-center '><i class='far fa-clock'></i>{moment(thisWeather.dt_txt).format('HH:mm')}</Col>
        <Col xs={4} md={2} className= 'align-self-center'><img style={{ width: '50%'}} src={"http://openweathermap.org/img/wn/"+ thisWeather.weather[0].icon + "@2x.png"}></img></Col>  
        <Col xs={4} md={3} className= 'align-self-center'>{capitalizarFirst(thisWeather.weather[0].description)}</Col>  
        <Col xs={4} md={4} className= 'align-self-center'><i class='fas fa-wind'></i> {thisWeather.wind.speed}km/h ({thisWeather.wind.deg}°)</Col>
        <Col xs={4} md={1} className= 'align-self-center'><i class='fas fa-temperature-high'></i>{Math.round(thisWeather.main.temp_max)}</Col>
        <Col xs={4} md={1} className= 'align-self-center'>💧{thisWeather.main.humidity} </Col>
    </Row>
    );
    return(
           <>         {weather}</>
    )
}

export default Forecast;