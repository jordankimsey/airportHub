import React from 'react'
import tw from 'tailwind-styled-components'

const AirportInfo = (props) => {
    return (
      <Wrapper>
        <AirportName>
          <h2>{props.airportInfo.name}</h2>
        </AirportName>
        <AirportData>
          <h3>
            <InfoTitle>City:</InfoTitle> {props.airportInfo.city}
          </h3>
          <h3>
            <InfoTitle>State:</InfoTitle>
            {props.airportInfo.state}
          </h3>
          <h3>
            <InfoTitle>Country:</InfoTitle> {props.airportInfo.country}
          </h3>
          <h3>
            <InfoTitle>Elevation:</InfoTitle> {props.airportInfo.elevation} ft.
          </h3>
          <h3>
            <InfoTitle>Longitude:</InfoTitle> {props.airportInfo.longitude}
          </h3>
          <h3>
            <InfoTitle>Latitude:</InfoTitle> {props.airportInfo.latitude}
          </h3>
          <h3>
            <InfoTitle>IATA:</InfoTitle> {props.airportInfo.IATA}
          </h3>
          <h3>
            <InfoTitle>ICAO:</InfoTitle> {props.airportInfo.ICAO}
          </h3>
          <h3>
            <InfoTitle>Type:</InfoTitle> {props.airportInfo.type}
          </h3>

          <h3>
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
          </h3>
          <h3>
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
          </h3>
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
