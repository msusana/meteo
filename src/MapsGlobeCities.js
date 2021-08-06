import React from 'react';
import Globe from 'react-globe.gl';


function MapsGlobeCities(){

    function getCitiesStorage(){
        let cityList = [];
        let data;
        for(let i=0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            data = JSON.parse(localStorage.getItem(key))
            cityList.push({"id": data.latitude, "city": key, "color": "red", coordinates: [data.latitude, data.longitude]})
        }
        return cityList;
    }
const cities = getCitiesStorage()
  
    const gData = cities.map((element) => ({
        lat:  element.coordinates[0],
        lng: element.coordinates[1],
      }));

  return <Globe
    height= {600}
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
    backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
    width={600}
    pointsData={gData}
    pointColor={() => 'green'}
    pointAltitude={0.4}
    pointRadius={1}
    pointsMerge={true}
    animateIn ={true}   
    
  />;
};
 
export default MapsGlobeCities;