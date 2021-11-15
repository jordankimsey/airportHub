import React from 'react';
import tw from 'tailwind-styled-components';
import AirportInfo from './components/AirportInfo';
import AirportMap from './components/AirportMap';
import Header from './components/header';
import WeatherData from './components/weatherData';

const Airport = () => {
  return (
    // create api call to fetch data and pass data to different props to render airport data
    <Wrapper>
      <Header />
      <AirportMap />
      <WeatherData />
      <AirportInfo />
    </Wrapper>
  );
};

export default Airport;

const Wrapper = tw.div`
    h-screen bg-gray-300
`;
