import React, { Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import City from './City';
import SearchCity from './SearchCity';

const APIKEY = "b86876c84522fe8bb7cac5aa10314f50"


class Weather extends Component{
  state = {
  newCity:"",
  resApi: false,
  weather: []
  }


componentDidMount(){
    console.log(this.state.weather)
}

api =() =>{   

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.newCity}&units=metric&lang=es&appid=${APIKEY}`)
          .then((res) => res.json())
          .then(async(data) => { 
              await this.setState({weather : data})
              await this.setState({resApi : true})
          });
     
}
newCitySearch = (city) => {
    this.setState({newCity: city})
  }
capitalizarFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
card(){
    let srcImg = ""
    if(this.state.weather.weather){
       srcImg = "http://openweathermap.org/img/wn/"+this.state.weather.weather[0].icon+"@2x.png" 
    }else{
        srcImg = ""
    }
    
    return(
        <Card.Body>
            <Card.Img variant="top" src={srcImg} style={{ width: '50%'}}/>
            <Card.Title>{this.state.weather.name}</Card.Title>
            <Card.Text>
                <span className="temperature">{Math.round(this.state.weather.main ? this.state.weather.main.temp: "")}°</span>
                <div className="wind">Vent {this.state.weather.wind ? this.state.weather.wind.speed : ''}km/h 
                                            ({this.state.weather.wind ? this.state.weather.wind.deg : ''}°)</div>
                <div>{this.capitalizarFirst(this.state.weather.weather ? this.state.weather.weather[0].description : "")}</div>
            </Card.Text>
        </Card.Body>
    )
}
render(){
   
    return ( 
        <Row  className="justify-content-center text-center text-white" >
            <Col xs={12} md={6} className= 'align-self-center weather'>
                <Card style={{ width: '100%', background: '#0b0829', padding: '20%' }}>
                < SearchCity newCitySearch = {this.newCitySearch} api={this.api}/>
                {this.state.resApi && 
                this.card()
                }
                </Card>
            </Col>
            
      </Row>

    )
}
}
export default Weather;