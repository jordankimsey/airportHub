import React, {useEffect} from 'react'
import tw from 'tailwind-styled-components'

const WeatherData = (props) => {

    return (
      <Wrapper>
        <FlightRules>VFR</FlightRules>
        <RawMetar>
          {props.airportWeather.raw}
        </RawMetar>
      </Wrapper>
    );
}

export default WeatherData;

const Wrapper = tw.div`
    bg-red-300 container
`
const FlightRules = tw.div`
    container
`
const RawMetar = tw.div`
    container
`;
