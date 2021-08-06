import React, { Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import Days from './Days';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MapsGlobeCities from './MapsGlobeCities';

const APIKEY = "b86876c84522fe8bb7cac5aa10314f50"

class WeatherCities extends Component{
    constructor(props){
        super(props);
        this.state = {
            city : [],
            resApi: false,
            newCity:"",
            day1:[],
            day2:[],
            day3:[],
            day4:[],
            day5:[],
            latitude:'',
            longitude:'',
            resStorage : false
            }
    }


    componentDidMount(){
        this.getLocalStorage()
    }

    getLocalStorage = () =>{
        let cityList = [];
        let data;
        for(let i=0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            data = JSON.parse(localStorage.getItem(key))
            cityList.push({"name": key, "latitude": data.latitude, "longitude": data.longitude})
            this.setState({city : cityList})
          }
        this.setState({resStorage : true})
    }

apiLocalStorage  =() =>{   
    
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.latitude}&lon=${this.state.longitude}&units=metric&lang=en&appid=${APIKEY}`)
          .then((res) => res.json())
          .then(async(data) => { 
              console.log(data)
                await this.parseDateLocalStorage(data)
                await this.setState({resApi : true, newCity : data.city.name}) 
            
          })
          .catch(error => this.setState({resApi : false, newCity : ""}))
     
}


parseDateLocalStorage = (data) =>{
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

mappedCity = () => {

    return this.state.city.map((key)=> {

       return (
            <Button variant='dark' value={key.name} key={key.name} onClick={()=>this.chooseCurrentCity(key)}>{key.name}</Button>
            )
        })
   }

async chooseCurrentCity(city){
    await this.setState({latitude: city.latitude, longitude: city.longitude})
    await this.apiLocalStorage()
   }

   






render(){
   
    return ( 
    <div> 
       
        <div className="card-cities d-flex flex-row justify-content-around flex-wrap">
            {this.mappedCity()}
        </div> 
        
        {this.state.resApi === true &&
            <Days state = {this.state}/>
            }
           
        <div className="d-flex flex-row justify-content-center flex-wrap" 
            style = {{backgroundImage: "url('https://unpkg.com/three-globe@2.18.6/example/img/night-sky.png')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', 
            height: '600px'}}>
          <MapsGlobeCities/>
        </div> 
        
       
        
         
            
           
    </div>

    )
}
}
export default WeatherCities;