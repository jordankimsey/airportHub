import React from 'react'
import tw from 'tailwind-styled-components'

const AirportInfo = (props) => {
    return (
      <Wrapper>
        <AirportName>
          <h2>{props.airportInfo.name}</h2>
        </AirportName>
        <AirportData>
          <h3>City: {props.airportInfo.city}</h3>
          <h3>State: {props.airportInfo.state}</h3>
          <h3>Country: {props.airportInfo.country}</h3>
          <h3>Elevation: {props.airportInfo.elevation} ft.</h3>
          <h3>Longitude: {props.airportInfo.longitude}</h3>
          <h3>Latitude: {props.airportInfo.latitude}</h3>
          <h3>IATA: {props.airportInfo.IATA}</h3>
          <h3>ICAO: {props.airportInfo.ICAO}</h3>
          <h3>Type: {props.airportInfo.type}</h3>
          <h3>
            <a
              href={props.airportInfo.website}
              target='_blank'
              rel='noreferrer noopener'
            >
              Offical Website
            </a>
          </h3>
          <h3>
            <a
              href={props.airportInfo.wiki}
              target='_blank'
              rel='noreferrer noopener'
            >
              Wikipedia
            </a>
          </h3>
        </AirportData>
      </Wrapper>
    );
}

export default AirportInfo;

const Wrapper = tw.div`
     rounded-lg container-sm m-3 p-4 bg-white flex flex-col shadow-2xl justify-center
`;
const AirportName = tw.div`
    text-lg
`

const AirportData = tw.div`
`
