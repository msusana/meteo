import React, { Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import Days from './Days';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const APIKEY = "b86876c84522fe8bb7cac5aa10314f50"


class WeatherDays extends Component{
    constructor(props) {
        super(props);
        this.state = {
        newCity:"",
        day1:[],
        day2:[],
        day3:[],
        day4:[],
        day5:[],
        resApi: false,
        userInput:"",
        latitude: "",
        longitude: ""
        }
        this.geo = this.geo.bind(this);
        this.parseDate = this.parseDate.bind(this);
    }

componentDidMount(){
    this.geo()  
}
apiGeo =() =>{   
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.latitude}&lon=${this.state.longitude}&units=metric&lang=en&appid=${APIKEY}`)
      .then((res) => res.json())
      .then(async(data) => { 
            await this.parseDate(data)
            await this.setState({resApi : true, newCity : data.city.name})
            await localStorage.setItem(this.state.newCity, JSON.stringify(this.state)) 
        })
        .catch(error => this.setState({resApi : false}))
 
}
api =() =>{   
    this.setState({resApi : false})
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.newCity}&units=metric&lang=en&appid=${APIKEY}`)
          .then((res) => res.json())
          .then(async(data) => { 
              await this.parseDate(data)
              console.log('test');
                await this.setState({resApi : true, newCity : data.city.name})
                await localStorage.setItem(this.state.newCity, JSON.stringify(this.state)) 
            
          })
          .catch(error => this.setState({resApi : false, newCity : ""}))
     
}

geo_success = (position)=> {
    this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude })
    this.apiGeo()
  }
  
geo_error() {
    alert("Sorry, no position available.");
  }

geo = ()=>{
    var wpid = navigator.geolocation.watchPosition(this.geo_success, this.geo_error);
}  

parseDate = (data) => {
    console.log('test', data);
    this.setState({
        day1: [],
        day2: [],
        day3: [],
        day4: [],
        day5: [],
        latitude: data.city.coord.lat,
        longitude: data.city.coord.lon 
    })    
    console.log(data);
let dateArray = '';   
let day1Date = moment().format('YYYY-MM-DD' );    
let day2Date = moment().add(1, 'day').format('YYYY-MM-DD' );
let day3Date = moment().add(2, 'day').format('YYYY-MM-DD' );
let day4Date = moment().add(3, 'day').format('YYYY-MM-DD' );
let day5Date = moment().add(4, 'day').format('YYYY-MM-DD' );
console.log('const',day1Date, day2Date, day3Date, day4Date, day5Date)
for (let index = 0; index < data.list.length; index++) {
dateArray = data.list[index].dt_txt.split(" ", 1)
switch (dateArray[0]){
    case day1Date:
        let day1Array = this.state.day1.slice()
        day1Array.push(data.list[index])
        this.setState({day1: day1Array})
        break;  

    case day2Date:
        let day2Array = this.state.day2.slice()
        day2Array.push(data.list[index])
        this.setState({day2: day2Array})
        break;

    case day3Date:
        let day3Array = this.state.day3.slice()
        day3Array.push(data.list[index])
        this.setState({day3: day3Array})
        break;  

    case day4Date:
        let day4Array = this.state.day4.slice()
        day4Array.push(data.list[index])
        this.setState({day4: day4Array})
        break;      
        
    case day5Date:
        let day5Array = this.state.day5.slice()
        day5Array.push(data.list[index])
        this.setState({day5: day5Array})
        break; 
        } 
    }   
}
onChange = (event) => {
    this.setState({userInput: event.target.value})
  };

handleSubmit = async(event) =>{
    event.preventDefault();
    await this.setState({latitude : '', longitude : ''}) 
    await this.setState({newCity: this.state.userInput})
    await this.setState({userInput: ""})
    await this.api()
  }


render(){
   
    return ( 
    <div> 
            <Form className="form">
                <Row className="justify-content-center">
                    <Col xs={10} md={3}>
                    <Form.Control placeholder="City" onChange={this.onChange} value={this.state.userInput} />
                    </Col>
                    <Col xs={10} md={3}>
                    <Button type="submit" variant="light" onClick={this.handleSubmit} variant='success'>Search city</Button>
                    </Col>
                    <Col xs={10} md={3}>
                    <Link to='/WeatherCities'>
                    <Button type="submit" variant="light" onClick={this.localCity} variant='primary'>Your Search History </Button>
                    </Link>
                   
                    </Col>
                </Row>
            </Form>
            <Row  className="justify-content-center text-center text-white" >
            {this.state.resApi === true &&
            <Days state = {this.state}/>
            }
            {this.state.resApi === false &&
            <div className="resApi">Select a city</div>
            }
            
       </Row>
 
    </div>

    )
}
}
export default WeatherDays;