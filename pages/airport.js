import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import AirportInfo from './components/AirportInfo';
import AirportMap from './components/AirportMap';
import Header from './components/header';
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
  });

  const getAirportCoordinates = (IataCode) => {
    fetch(
      `https://avwx.rest/api/station/${IataCode}?format=json&` +
        new URLSearchParams({
          token: '3VscM03wDOQIXkxWJTAAqoPzsYH32Z8GWX6VF6uTe7M',
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setAirportCoordinates({
          longitude: data.longitude,
          latitude: data.latitude,
          name: data.name,
          city: data.city,
          country: data.country,
          ICAO: data.icao,
          website: data.website,
        });
      });
  };

  const getAirportWeather = (IataCode) => {
    fetch(
      `https://avwx.rest/api/metar/${IataCode}?` +
        new URLSearchParams({
          token: '3VscM03wDOQIXkxWJTAAqoPzsYH32Z8GWX6VF6uTe7M',
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setAirportWeather({
          raw: data.raw,
        });
      });
  };

  useEffect(() => {
    getAirportCoordinates(IataCode);
    getAirportWeather(IataCode);
  }, [IataCode]);

  return (
    // create api call to fetch data and pass data to different props to render airport data
    <Wrapper>
      <Header />
      <ButtonContainer>
        <Link href='/'>
          <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
        </Link>
      </ButtonContainer>
      <AirportMap airportCoordinates={airportCoordinates} />
      <AirportData>
        <WeatherData airportWeather={airportWeather} />
        <AirportInfo airportInfo={airportCoordinates} />
      </AirportData>
    </Wrapper>
  );
};

export default Airport;

const Wrapper = tw.div`
    h-screen bg-gray-300 flex flex-col w-screen
`;

const ButtonContainer = tw.div`
rounded-full absolute top-20 left-4 z-10 bg-white shadow-md cursor-pointer
`;

const BackButton = tw.img`
  h-10 object-contain 
`;

const AirportData = tw.div`
    flex flex-1 justify-evenly w-screen
`;
