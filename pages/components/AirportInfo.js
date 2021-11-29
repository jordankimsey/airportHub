import React, {useEffect} from 'react'
import tw from 'tailwind-styled-components'

const AirportInfo = ({airportInfo}) => {
  if (!airportInfo) {
    return null;
  }
  
    return (
      <Wrapper>
        <AirportName>
          <h2>{airportInfo.name}</h2>
        </AirportName>
        <AirportData>
          <InfoTitle>City:</InfoTitle> {airportInfo.city}
        </AirportData>
        <AirportData>
          <InfoTitle>State:</InfoTitle>
          {airportInfo.state}
        </AirportData>
        <AirportData>
          <InfoTitle>Country:</InfoTitle> {airportInfo.country}
        </AirportData>
        <AirportData>
          <InfoTitle>Elevation:</InfoTitle> {airportInfo.elevation} ft.
        </AirportData>
        <AirportData>
          <InfoTitle>Longitude:</InfoTitle> {airportInfo.longitude}
        </AirportData>
        <AirportData>
          <InfoTitle>Latitude:</InfoTitle> {airportInfo.latitude}
        </AirportData>
        <AirportData>
          <InfoTitle>IATA:</InfoTitle> {airportInfo.IATA}
        </AirportData>
        <AirportData>
          <InfoTitle>ICAO:</InfoTitle> {airportInfo.ICAO}
        </AirportData>
        <AirportData>
          <InfoTitle>Type:</InfoTitle> {airportInfo.type}
        </AirportData>
        <AirportData>
          <InfoTitle>
            <AirportLinks>
              <a
                href={airportInfo.website}
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
                href={airportInfo.wiki}
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
