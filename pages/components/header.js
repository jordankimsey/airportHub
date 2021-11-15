import React from 'react';
import tw from 'tailwind-styled-components';

const header = () => {
    return (
        <Wrapper>
            AirportHub
 </Wrapper>
    )
}

export default header

const Wrapper = tw.div`
    bg-gray-600 opacity-70 h-12
`