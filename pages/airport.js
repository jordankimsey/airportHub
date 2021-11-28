import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import AirportInfo from './components/AirportInfo';
import AirportMap from './components/AirportMap';
import Header from './components/Header';
import WeatherData from './components/WeatherData';
import { useRouter } from 'next/router';
import Link from 'next/link';
// import axios from 'axios';


const Airport = () => {
  const router = useRouter();
  const { IataCode } = router.query;

  const [airportCoordinates, setAirportCoordinates] = useState({
    longitude: '',
    latitude: '',
    name: '',
    city: '',
    state: '',
    country: '',
    IATA: '',
    ICAO: '',
    elevation: '',
    type: '',
    wiki: '',
    website: '',
  });

  const [airportWeather, setAirportWeather] = useState({
    raw: 'Loading ...',
    timeStamp: '',
    rules: '',
    altimeter: '',
    clouds: ['Clear'],
    visibility: '',
    windDirection: '',
    windGust: '',
    windSpeed: '',
    temp: '',
    metarTime: '',
    remarks: '',
    dewpoint: '',
    wxCode: '',
  });

//attempt to fix
  // useEffect(() => {
  //   async function fetchData(IataCode) {
  //     const request = await axios.get(`https://avwx.rest/api/station/${IataCode}?format=json&3VscM03wDOQIXkxWJTAAqoPzsYH32Z8GWX6VF6uTe7M`);
  //     console.log(request)
  //     return request;
  //   }
  //   fetchData();
  // }, [])

  const getAirportCoordinates = async (IataCode) => {
   
      const request = await fetch(
        `https://avwx.rest/api/station/${IataCode}?format=json&` +
        new URLSearchParams({
          token: '3VscM03wDOQIXkxWJTAAqoPzsYH32Z8GWX6VF6uTe7M',
        })
      );
    console.log(request)
    if (request.status == 400) {
      return alert('Not found')
    }
      const data = await request.json();
     setAirportCoordinates({
            longitude: data.longitude,
            latitude: data.latitude,
            name: data.name,
            city: data.city,
            state: data.state,
            country: data.country,
            IATA: data.iata,
            ICAO: data.icao,
            elevation: data.elevation_ft,
            type: data.type,
            wiki: data.wiki,
            website: data.website,
          });
  }

  // working code with error if no airport found
  const getAirportWeather = async (IataCode) => {
   
 const request = await fetch(
      `https://avwx.rest/api/metar/${IataCode}?` +
        new URLSearchParams({
          token: '3VscM03wDOQIXkxWJTAAqoPzsYH32Z8GWX6VF6uTe7M',
        })
 )
    if (request.status == 400) {
     return alert('Not found');

    }
    console.log('weather req',request)
      const data = await request.json();
      setAirportWeather({
          raw: data.raw,
          timeStamp: data.meta.timestamp,
          rules: data.flight_rules,
          altimeter: data.altimeter.value,
          clouds: data.clouds,
          visibility: data.visibility.repr,
          windDirection: data.wind_direction.repr,
          windGust: data.wind_guest,
          windSpeed: data.wind_speed.value,
          temp: data.temperature.value,
          metarTime: data.time.repr,
          remarks: data.remarks,
          dewpoint: data.dewpoint.value,
          wxCode: data.wx_codes,
      });
  };

  // working code with error if no airport found
  useEffect(() => {
    if (IataCode) {
      getAirportCoordinates(IataCode);
      getAirportWeather(IataCode); 
    } else {
      console.log('Airport Not found');
    }
    console.log(IataCode);
  }, [IataCode]);

  if (!airportCoordinates) return 'No Airport Found';
  if (!airportWeather) return 'No Airport Weather found';
  

  return (
    // create api call to fetch data and pass data to different props to render airport data
    <Wrapper>
      <Header />
      <MapContainer id='map'>
        <ButtonContainer>
          <Link href='/' passHref>
            <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
          </Link>
        </ButtonContainer>
        <AirportMap airportCoordinates={airportCoordinates} />
      </MapContainer>
      <AirportWeatherData>
        {airportCoordinates
          ?
       <AirportInfo airportInfo={airportCoordinates} />
          : null}
        
        {airportWeather
          ? <WeatherData airportWeather={airportWeather} />
          : null
        }
       
       
      </AirportWeatherData>
    </Wrapper>
  );
};

export default Airport;

const Wrapper = tw.div`
    h-screen bg-gray-200 flex flex-col w-screen justify-center overflow-y-scroll
`;

const MapContainer = tw.div`
  w-screen h-1/2
`

const ButtonContainer = tw.div`
rounded-full absolute top-5 left-4 z-10 bg-white shadow-md cursor-pointer
`;

const BackButton = tw.img`
  h-10 object-contain 
`;

const AirportWeatherData = tw.div`
     h-1/2 flex flex-col md:flex-row md:mt-12 md:justify-center md:items-start w-screen
`;
