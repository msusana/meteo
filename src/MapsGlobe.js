import React, {useState, useEffect, useRef}from 'react';
import Globe from 'react-globe.gl';



const MapsGlobe = () => {

const markers = [
    {
      id: 1,
      city: "Singapore",
      color: "yellow",
      coordinates: [
        1.3521,
        103.8198
      ],
    },
    ]
    const gData = markers.map((element) => ({
      lat:  element.coordinates[0],
      lng: element.coordinates[1],
    }));
   const MAP_CENTER = { lat: 1.3521, lng: 103.8198, altitude: 0.4 }; 
  const globeEl = useRef();


  useEffect(() => {
  globeEl.current.pointOfView(MAP_CENTER, 5000);}, 
  []);

  return <Globe
    ref={globeEl}
    height="100vh"
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
    backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
    width="100%"
    pointsData={gData}
    pointColor={() => 'green'}
    pointAltitude={0}
    pointRadius={0.4}
    pointsMerge={true}
    animateIn ={true}   
    
  />;
};


// function MapsGlobe() {
//     globeEl.current.pointOfView(MAP_CENTER, 4000);
  
//   return (<><Globe   height="100vh"
//   globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
//   bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
//   backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
//   width="100%"
// pointsData={gData}

// pointColor={() => 'green'}
// pointAltitude={0}
//       pointRadius={2}
//       pointsMerge={true}
//       animateIn ={true}   
//    /></>)
// }
 
export default MapsGlobe;