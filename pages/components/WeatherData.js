import React from 'react'
import tw from 'tailwind-styled-components'
import Clouds from './Clouds';

const WeatherData = ({ airportWeather }) => {
  if (!airportWeather) {
    return null;
  }
 
    return (
      <Wrapper>
        <WeatherInfo>
          <WeatherTitle>Raw METAR:</WeatherTitle> {airportWeather.raw}
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Time:</WeatherTitle> {airportWeather.timeStamp}
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Metar Time:</WeatherTitle>{' '}
          {airportWeather.metarTime}
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Flight Rules:</WeatherTitle>{' '}
          {airportWeather.rules}
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Altimeter:</WeatherTitle>{' '}
          {airportWeather.altimeter} inHg
        </WeatherInfo>
        <WeatherInfo>
          <CloudContainer>
            <WeatherTitle>Clouds:</WeatherTitle>
            {airportWeather.clouds
              ? <Clouds cloud={airportWeather.clouds} />
              : null}
          </CloudContainer>
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Visibility:</WeatherTitle>{' '}
          {airportWeather.visibility} sm
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Wind Direction:</WeatherTitle>{' '}
          {airportWeather.windDirection}&deg;
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Wind Speed:</WeatherTitle>{' '}
          {airportWeather.windSpeed} kts
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Wind Guest:</WeatherTitle>{' '}
          {airportWeather.windGuest}
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Temperature:</WeatherTitle> {airportWeather.temp}{' '}
          &deg;C
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Dewpoint:</WeatherTitle> {airportWeather.dewpoint}{' '}
          &deg;C
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Remarks:</WeatherTitle> {airportWeather.remarks}
        </WeatherInfo>
        <WeatherInfo>
          <WeatherTitle>Other:</WeatherTitle> {airportWeather.wxCode}
        </WeatherInfo>
      </Wrapper>
    );

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
