import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import AirportInfo from './components/AirportInfo';
import AirportMap from './components/AirportMap';
import Header from './components/Header';
import WeatherData from './components/WeatherData';
import { useRouter } from 'next/router';
import Link from 'next/link';


const Airport = () => {
  const router = useRouter();
  const { IataCode } = router.query;

  const [airportCoordinates, setAirportCoordinates] = useState({
    longitude: '',
    latitude: '',
  });

  const [airportWeather, setAirportWeather] = useState({
    raw: '',
    timeStamp: '',
    rules: '',
    altimeter: '',
    clouds: [],
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

  const getAirportCoordinates = async (IataCode) => {
    // try {
      const request = await fetch(
        `https://avwx.rest/api/station/${IataCode}?format=json&` +
        new URLSearchParams({
          token: '3VscM03wDOQIXkxWJTAAqoPzsYH32Z8GWX6VF6uTe7M',
        })
      );
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
  
        // .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //       setAirportCoordinates({
    //         longitude: data.longitude,
    //         latitude: data.latitude,
    //         name: data.name,
    //         city: data.city,
    //         state: data.state,
    //         country: data.country,
    //         IATA: data.iata,
    //         ICAO: data.icao,
    //         elevation: data.elevation_ft,
    //         type: data.type,
    //         wiki: data.wiki,
    //         website: data.website,
    //       });
    //     })
    // } catch (error) {
    //   console.log(error)
    // }
 
  }

  //working code with error if no airport found
  const getAirportWeather = async (IataCode) => {
    // try {
 const request = await fetch(
      `https://avwx.rest/api/metar/${IataCode}?` +
        new URLSearchParams({
          token: '3VscM03wDOQIXkxWJTAAqoPzsYH32Z8GWX6VF6uTe7M',
        })
 )
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

    //   .then((response) => response.json())
    //   .then((data) => {
    //     setAirportWeather({
    //       raw: data.raw,
    //       timeStamp: data.meta.timestamp,
    //       rules: data.flight_rules,
    //       altimeter: data.altimeter.value,
    //       clouds: data.clouds,
    //       visibility: data.visibility.repr,
    //       windDirection: data.wind_direction.repr,
    //       windGust: data.wind_guest,
    //       windSpeed: data.wind_speed.value,
    //       temp: data.temperature.value,
    //       metarTime: data.time.repr,
    //       remarks: data.remarks,
    //       dewpoint: data.dewpoint.value,
    //       wxCode: data.wx_codes,
    //     });
    //   })  
    // } catch (error) {
    //   console.log(error)
    // }
  };

  //new fux throws error
//   useEffect(() => {
// fetch(
//   `https://avwx.rest/api/metar/${IataCode}?` +
//     new URLSearchParams({
//       token: '3VscM03wDOQIXkxWJTAAqoPzsYH32Z8GWX6VF6uTe7M',
//     })
// )
//   .then((response) => {
//     if (response.ok) {
//       response.json();
//     }
//     throw response;
//   })
//   .then((data) => {
//     setAirportWeather({
//       raw: data.raw,
//       timeStamp: data.meta.timestamp,
//       rules: data.flight_rules,
//       altimeter: data.altimeter.value,
//       clouds: data.clouds,
//       visibility: data.visibility.repr,
//       windDirection: data.wind_direction.repr,
//       windGust: data.wind_guest,
//       windSpeed: data.wind_speed.value,
//       temp: data.temperature.value,
//       metarTime: data.time.repr,
//       remarks: data.remarks,
//       dewpoint: data.dewpoint.value,
//       wxCode: data.wx_codes,
//     });
//   })
//   .catch((error) => {
//     console.log('error fetching data');
//   })
//   }, [IataCode])

  

  //working code with error if no airport found
  useEffect(() => {
    console.log(IataCode);
    if (IataCode) {
      getAirportCoordinates(IataCode);
      getAirportWeather(IataCode);
    } else {
      console.log('Airport Not found');
    }
  }, [IataCode]);

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
        <AirportInfo airportInfo={airportCoordinates} />
        <WeatherData airportWeather={airportWeather} />
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
