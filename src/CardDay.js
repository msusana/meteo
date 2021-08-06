import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import Forecast from './Forecast';
import MapsGlobe from './MapsGlobe';

function CardDay(props){
    
    function capitalizarFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

    let srcImg = ""
    if(props.weather[0]){
       srcImg = "http://openweathermap.org/img/wn/"+props.weather[0].weather[0].icon+"@2x.png" 
    }else{
        srcImg = ""
    }
    return(
           <Row>
                <Col xs={12} md={5} className= 'align-self-center weather'>
                    <Card style={{ width: '100%', background: '#0b0829'}}>
                      <Card.Body>
                        <Card.Img variant="top" src={srcImg} style={{ width: '35%'}}/>
                        <Card.Title>{capitalizarFirst(props.city)}</Card.Title>
                        <Card.Text>
                            <span className="temperature">{Math.round(props.weather[0] ? props.weather[0].main.temp: "")}°</span>
                            <div className="wind">Wind {props.weather[0] ? props.weather[0].wind.speed : ''}km/h 
                                                        ({props.weather[0] ? props.weather[0].wind.deg : ''}°)</div>
                            <div>{capitalizarFirst(props.weather[0] ? props.weather[0].weather[0].description : "")}</div>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                
                <Col xs={12} md={7} className= 'align-self-center weather'>
                   {props.weather[0] &&
                     <Forecast weather={props}/>
                    }
                </Col> 
                
           </Row>
    )
}

export default CardDay;