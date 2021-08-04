import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDay from './CardDay';
import moment from 'moment';

function Days(props){
    const [numberDay, setNumberDay] = useState('');
    // let myOptions = {
    //     zoom: 15,
    //     center: props.state.latitude + props.state.longitude,
    //     mapTypeControl: false,
    //     navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    //     }
    //     var map = new google.maps.Map(document.getElementByClass("mapcanvas"), myOptions)
    //     var marker = new google.maps.Marker({
    //     position: props.state.latitude + props.state.longitude ,
    //     map: map,
    //     title:"Estás aquí! (en un radio de "+position.coords.accuracy+" metros)"
    //     })
    // https://xitrus.es/blog/109/Geolocalizaci%C3%B3n_con_JavaScript
    function day(i){
        switch (i){
            case 1:
                setNumberDay(i)
                break; 
            case 2:
                setNumberDay(i)
                break;
            case 3:
                setNumberDay(i)
                break;
            case 4:
                setNumberDay(i)
                break; 
            case 5:
                setNumberDay(i)
                break;                 
            }
  
}

    return(
        <div>
        {numberDay === "" &&
        <CardDay weather={props.state.day1} city={props.state.newCity}/>
        }
        {numberDay === 1 &&
        <CardDay weather={props.state.day1} city={props.state.newCity}/>
        }
        {numberDay === 2 &&
        <CardDay weather={props.state.day2} city={props.state.newCity}/>
        }
        {numberDay === 3 &&
        <CardDay weather={props.state.day3} city={props.state.newCity}/>
        }
        {numberDay === 4 &&
        <CardDay weather={props.state.day4} city={props.state.newCity}/>
        }
        {numberDay === 5 &&
        <CardDay weather={props.state.day5} city={props.state.newCity}/>
        }

        {props.state.resApi === true &&
            <div className="card-action d-flex flex-row justify-content-around flex-wrap">
                <div onClick={()=>day(1)}>{props.state.day1[0] ? 'Today' :''} </div>
                <div onClick={()=>day(2)}>{props.state.day2[0] ? 'Tomorrow' :''} </div>
                <div onClick={()=>day(3)}>{props.state.day3[0] ? moment(props.state.day3[0].dt_txt).format('dddd') :''} </div>
                <div onClick={()=>day(4)}>{props.state.day4[0] ? moment(props.state.day4[0].dt_txt).format('dddd') :''} </div>
                <div onClick={()=>day(5)}>{props.state.day5[0] ? moment(props.state.day5[0].dt_txt).format('dddd') :''} </div>
            </div>
        
        }
        <div className="mapcanvas" style={{width: "400px", height:"400px"}}></div>
        </div>
    )
}

export default Days;