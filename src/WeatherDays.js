import React, { Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import Days from './Days';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const APIKEY = "b86876c84522fe8bb7cac5aa10314f50"
//const momentRound = require('moment-round');
class WeatherDays extends Component{
  state = {
  newCity:"Lyon",
  day1:[],
  day2:[],
  day3:[],
  day4:[],
  day5:[],
  weatherDay: [],
  resApi: false,
  userInput:""
  }


componentDidMount(){
    //this.api()
}

api =() =>{   

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.newCity}&units=metric&lang=es&appid=${APIKEY}`)
          .then((res) => res.json())
          .then(async(data) => { 
              await this.parseDate(data)
              await this.setState({resApi : true})
          });
     
}
weatherDay = (day) =>{
    this.setState({WeatherDay: day})
}

parseDate = (data) =>{
this.setState({day1: [],day2: [],day3: [],day4: [],day5: [] })    
let dateArray = '';   
const day1Date = moment().format('YYYY-MM-DD' );    
const day2Date = moment().add(1, 'day').format('YYYY-MM-DD' );
const day3Date = moment().add(2, 'day').format('YYYY-MM-DD' );
const day4Date = moment().add(3, 'day').format('YYYY-MM-DD' );
const day5Date = moment().add(4, 'day').format('YYYY-MM-DD' );
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

handleSubmit = (event) =>{
    event.preventDefault();
    this.setState({newCity: this.state.userInput})
    this.setState({userInput: ""})
    this.api()
  }

render(){
   
    return ( 
    <div> 
        <Row  className="justify-content-center text-center text-white" >
            <Form>
                <Row>
                    <Col>
                    <Form.Control placeholder="Ville" onChange={this.onChange} />
                    </Col>
                    <Col>
                    <Button type="submit" variant="light" onClick={this.handleSubmit} >Submit form</Button>
                    </Col>
                </Row>
            </Form>
            <Days state = {this.state}/>
       </Row>
        
    </div>

    )
}
}
export default WeatherDays;