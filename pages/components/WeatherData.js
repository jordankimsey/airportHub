import React from 'react'
import tw from 'tailwind-styled-components'
import Clouds from './Clouds';

const WeatherData = (props) => {
  // if (props.airportWeather) {
    return (
      <Wrapper>
        <WeatherInfo>
          <WeatherTitle>Raw METAR:</WeatherTitle> {props.airportWeather.raw}
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Time:</WeatherTitle> {props.airportWeather.timeStamp}
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Metar Time:</WeatherTitle>{' '}
          {props.airportWeather.metarTime}
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Flight Rules:</WeatherTitle>{' '}
          {props.airportWeather.rules}
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Altimeter:</WeatherTitle>{' '}
          {props.airportWeather.altimeter} inHg
        </WeatherInfo>
        <WeatherInfo>
          <CloudContainer>
            <WeatherTitle>Clouds:</WeatherTitle>
            <Clouds cloud={props.airportWeather.clouds} />
          </CloudContainer>
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Visibility:</WeatherTitle>{' '}
          {props.airportWeather.visibility} sm
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Wind Direction:</WeatherTitle>{' '}
          {props.airportWeather.windDirection}&deg;
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Wind Speed:</WeatherTitle>{' '}
          {props.airportWeather.windSpeed} kts
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Wind Guest:</WeatherTitle>{' '}
          {props.airportWeather.windGuest}
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Temperature:</WeatherTitle> {props.airportWeather.temp}{' '}
          &deg;C
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Dewpoint:</WeatherTitle> {props.airportWeather.dewpoint}{' '}
          &deg;C
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Remarks:</WeatherTitle> {props.airportWeather.remarks}
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Other:</WeatherTitle> {props.airportWeather.wxCode}
        </WeatherInfo>
      </Wrapper>
    );
  // }
  // else {
  //   let clouds = [];
  // }
  
 
    // return (
    //   <Wrapper>
    //     <WeatherInfo>
    //       <WeatherTitle>Raw METAR:</WeatherTitle> {props.airportWeather.raw}
    //     </WeatherInfo>
    //     <WeatherInfo>
    //       <WeatherTitle>Time:</WeatherTitle> {props.airportWeather.timeStamp}
    //     </WeatherInfo>
    //     <WeatherInfo>
    //       <WeatherTitle>Metar Time:</WeatherTitle>{' '}
    //       {props.airportWeather.metarTime}
    //     </WeatherInfo>
    //     <WeatherInfo>
    //       <WeatherTitle>Flight Rules:</WeatherTitle>{' '}
    //       {props.airportWeather.rules}
    //     </WeatherInfo>
    //     <WeatherInfo>
    //       <WeatherTitle>Altimeter:</WeatherTitle>{' '}
    //       {props.airportWeather.altimeter} inHg
    //     </WeatherInfo>
    //     <WeatherInfo>
    //       <CloudContainer>
    //         <WeatherTitle>Clouds:</WeatherTitle>
    //         <Clouds cloud={props.airportWeather.clouds} />
    //       </CloudContainer>
    //     </WeatherInfo>
    //     <WeatherInfo>
    //       <WeatherTitle>Visibility:</WeatherTitle>{' '}
    //       {props.airportWeather.visibility} sm
    //     </WeatherInfo>
    //     <WeatherInfo>
    //       <WeatherTitle>Wind Direction:</WeatherTitle>{' '}
    //       {props.airportWeather.windDirection}&deg;
    //     </WeatherInfo>
    //     <WeatherInfo>
    //       <WeatherTitle>Wind Speed:</WeatherTitle>{' '}
    //       {props.airportWeather.windSpeed} kts
    //     </WeatherInfo>
    //     <WeatherInfo>
    //       <WeatherTitle>Wind Guest:</WeatherTitle>{' '}
    //       {props.airportWeather.windGuest}
    //     </WeatherInfo>
    //     <WeatherInfo>
    //       <WeatherTitle>Temperature:</WeatherTitle> {props.airportWeather.temp}{' '}
    //       &deg;C
    //     </WeatherInfo>
    //     <WeatherInfo>
    //       <WeatherTitle>Dewpoint:</WeatherTitle> {props.airportWeather.dewpoint}{' '}
    //       &deg;C
    //     </WeatherInfo>
    //     <WeatherInfo>
    //       <WeatherTitle>Remarks:</WeatherTitle> {props.airportWeather.remarks}
    //     </WeatherInfo>
    //     <WeatherInfo>
    //       <WeatherTitle>Other:</WeatherTitle> {props.airportWeather.wxCode}
    //     </WeatherInfo>
    //   </Wrapper>
    // );
}

export default WeatherData;

const Wrapper = tw.div`
    bg-white m-3 p-3 rounded-lg container-sm border-4 border-yellow
`
const WeatherInfo = tw.div`
    text-lg
`

const CloudContainer = tw.div`
  flex
`

const WeatherTitle = tw.h3`
  inline text-2xl text-gray-400
`
