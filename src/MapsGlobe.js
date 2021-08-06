import React, {useState, useEffect, useRef}from 'react';
import Globe from 'react-globe.gl';



const MapsGlobe = (props) => {
let lat = props.lat
let lon = props.lon
const markers = [
    {
      id: 1,
      city: "",
      color: "yellow",
      coordinates: [
        lat,
        lon
      ],
    },
    ]
    const gData = markers.map((element) => ({
      lat:  element.coordinates[0],
      lng: element.coordinates[1],
    }));
   const MAP_CENTER = { lat: lat, lng: lon, altitude: 0.4 }; 
  const globeEl = useRef();


  useEffect(() => {
  globeEl.current.pointOfView(MAP_CENTER, 8000);}, 
  []);

  return <Globe
    ref={globeEl}
    height= {400}
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
    backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
    width={400}
    pointsData={gData}
    pointColor={() => 'green'}
    pointAltitude={0}
    pointRadius={0.4}
    pointsMerge={true}
    animateIn ={true}   
    
  />;
};

 
export default MapsGlobe;