import React from 'react'
import tw from 'tailwind-styled-components'

const AirportInfo = (props) => {
    return (
      <Wrapper>
        <AirportName>
          <h2>{props.airportInfo.name}</h2>
        </AirportName>
        <AirportData>
          <InfoTitle>City:</InfoTitle> {props.airportInfo.city}
        </AirportData>
        <AirportData>
          <InfoTitle>State:</InfoTitle>
          {props.airportInfo.state}
        </AirportData>
        <AirportData>
          <InfoTitle>Country:</InfoTitle> {props.airportInfo.country}
        </AirportData>
        <AirportData>
          <InfoTitle>Elevation:</InfoTitle> {props.airportInfo.elevation} ft.
        </AirportData>
        <AirportData>
          <InfoTitle>Longitude:</InfoTitle> {props.airportInfo.longitude}
        </AirportData>
        <AirportData>
          <InfoTitle>Latitude:</InfoTitle> {props.airportInfo.latitude}
        </AirportData>
        <AirportData>
          <InfoTitle>IATA:</InfoTitle> {props.airportInfo.IATA}
        </AirportData>
        <AirportData>
          <InfoTitle>ICAO:</InfoTitle> {props.airportInfo.ICAO}
        </AirportData>
        <AirportData>
          <InfoTitle>Type:</InfoTitle> {props.airportInfo.type}
        </AirportData>
        <AirportData>
          <InfoTitle>
            <AirportLinks>
              <a
                href={props.airportInfo.website}
                target='_blank'
                rel='noreferrer noopener'
              >
                Offical Website
              </a>
            </AirportLinks>
          </InfoTitle>
        </AirportData>
        <AirportData>
          <InfoTitle>
            <AirportLinks>
              <a
                href={props.airportInfo.wiki}
                target='_blank'
                rel='noreferrer noopener'
              >
                Wikipedia
              </a>
            </AirportLinks>
          </InfoTitle>
        </AirportData>
      </Wrapper>
    );
}

export default AirportInfo;

const Wrapper = tw.div`
     rounded-lg text-black container-sm m-3 p-4 bg-white flex flex-col shadow-2xl justify-center border-4 border-yellow
`;

const InfoTitle = tw.h3`
  inline text-2xl text-gray-400
`;
const AirportName = tw.div`
    text-3xl text-black
`;

const AirportLinks = tw.div`
  hover:text-yellow
`

const AirportData = tw.div`
text-lg
`
