import React, {useEffect} from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1Ijoiam9yZGFua2ltc2V5IiwiYSI6ImNrdDdjeG8yMjByMjMyb3F3YmttaDdzZzQifQ.y_GHG-CnXA9BsZUEobVUKw';

const AirportMap = (props) => {
    
     useEffect(() => {
       const map = new mapboxgl.Map({
         container: 'map',
         style: 'mapbox://styles/mapbox/streets-v11',
         center: [-101.299591, 47.116386],
         zoom: 3,
       });
         if (props.airportCoordinates.longitude && props.airportCoordinates.latitude) {
           addToMap(map, props.airportCoordinates);
            map.fitBounds(
              [
                [
                  props.airportCoordinates.longitude,
                  props.airportCoordinates.latitude,
                ],
                [
                  props.airportCoordinates.longitude + 0.01,
                  props.airportCoordinates.latitude + 0.01,
                ],
              ],
              {
                padding: 60,
              }
            );
         }
     }, [props.airportCoordinates]);
  
  
  const addToMap = (map, coordinates) => {
      const marker1 = new mapboxgl.Marker()
        .setLngLat([coordinates.longitude, coordinates.latitude])
        .addTo(map);
  }
  
  //removed the id='map for map to render too may cause error later'
    return <Wrapper></Wrapper>;
  }

export default AirportMap;

const Wrapper = tw.div`
  
`;