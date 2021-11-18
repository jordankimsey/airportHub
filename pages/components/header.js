import React from 'react';
import tw from 'tailwind-styled-components';
import Image from 'next/image';
import logo from '../../public/assets/airportLogo.png';

const header = () => {
  return (
    <Wrapper>
      <Image src={logo} alt='AirportHub logo' width={200} height={60} />
    </Wrapper>
  );
};

export default header;

const Wrapper = tw.div`
    bg-gray-600 opacity-90 h-16 flex items-center pl-5
`;
