import React, {useEffect} from 'react'
import tw from 'tailwind-styled-components'

const WeatherData = (props) => {

    return (
      <Wrapper>
        <WeatherInfo>
          <h3>
            <WeatherTitle>Raw METAR:</WeatherTitle> {props.airportWeather.raw}
          </h3>
          <h3>
            <WeatherTitle>Time:</WeatherTitle> {props.airportWeather.timeStamp}
          </h3>
          <h3>
            <WeatherTitle>Metar Time:</WeatherTitle> {props.airportWeather.metarTime}
          </h3>
          <h3>
            <WeatherTitle>Flight Rules:</WeatherTitle> {props.airportWeather.rules}
          </h3>
          <h3>
            <WeatherTitle>Altimeter:</WeatherTitle> {props.airportWeather.altimeter} inHg
          </h3>
          {/* need to map array of clouds */}
          {/* <h3>Clouds: { props.airportWeather.clouds}</h3> */}
          <h3>
            <WeatherTitle>Visibility:</WeatherTitle> {props.airportWeather.visibility} sm
          </h3>
          <h3>
            <WeatherTitle>Wind Direction:</WeatherTitle> {props.airportWeather.windDirection}
          </h3>
          <h3>
            <WeatherTitle>Wind Speed:</WeatherTitle> {props.airportWeather.windSpeed} kts
          </h3>
          <h3>
            <WeatherTitle>Wind Guest:</WeatherTitle> {props.airportWeather.windGuest}
          </h3>
          <h3>
            <WeatherTitle>Temperature:</WeatherTitle> {props.airportWeather.temp} C
          </h3>
          <h3>
            <WeatherTitle>Dewpoint:</WeatherTitle> {props.airportWeather.dewpoint} deg celcus **
          </h3>
          <h3>
            <WeatherTitle>Remarks:</WeatherTitle> {props.airportWeather.remarks}
          </h3>
          <h3>
            <WeatherTitle>Other:</WeatherTitle> {props.airportWeather.wxCode}
          </h3>
        </WeatherInfo>
      </Wrapper>
    );
}

export default WeatherData;

const Wrapper = tw.div`
    bg-white m-3 p-3 rounded-lg container-sm border-4 border-yellow
`
const WeatherInfo = tw.div`
    
`

const WeatherTitle = tw.h3`
  inline text-2xl text-gray-400
`
