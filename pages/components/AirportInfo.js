import React from 'react'
import tw from 'tailwind-styled-components'

const AirportInfo = (props) => {
    return (
      <Wrapper>
        <AirportName>{props.airportInfo.name}</AirportName>

        <AirportCity>{props.airportInfo.city}</AirportCity>

        <AirportCountry>{props.airportInfo.country}</AirportCountry>

        <AirportICAO>{props.airportInfo.ICAO}</AirportICAO>

        <AirportWiki>
          <a href={props.airportInfo.website}>{props.airportInfo.website}</a>
        </AirportWiki>
      </Wrapper>
    );
}

export default AirportInfo;

const Wrapper = tw.div`
    container 
`
const AirportName = tw.div`
    text-lg
`

const AirportCity = tw.div`
    text-md
`
const AirportCountry = tw.div`
    text-sm
`

const AirportICAO = tw.div`
    
`
const AirportWiki = tw.div`
    text-sm
`
