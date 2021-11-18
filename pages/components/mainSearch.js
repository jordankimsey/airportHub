import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';

const MainSearch = () => {
  const [IATA, setIATA] = useState('');

  return (
    <Wrapper
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1466691623998-d607fab1ca29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80')`,
        width: '100vw',
        height: '95vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        overflowY: 'hidden',

      }}
    >
      <SearchContainer>
        <SearchTitle>
          <h2>Search for an Airport</h2>
        </SearchTitle>
        <SearchDescription>
          <p>Welcome to AirportHub! Your home for airport infomation.</p>
        </SearchDescription>
        <SearchInput
          type='text'
          placeholder='Enter IATA code eg.."KATL"'
          value={IATA}
          onChange={(e) => setIATA(e.target.value) }/>
        <Link
          href={{
            pathname: '/airport',
            query: {
              IataCode: IATA
            },
          }}
        >
          <SearchButton>Search</SearchButton>
        </Link>
      </SearchContainer>
    </Wrapper>
  );
};

export default MainSearch;

const Wrapper = tw.div`
    w-screen h-screen object-fill flex justify-center items-center 
`;

const SearchContainer = tw.div`
    bg-gray-600 opacity-90 text-white h-1/3 
    sm:h-1/4 p-3 rounded-lg md:w-3/4 lg:w-1/2 2xl:w-1/3 flex items-center
    justify-center flex-col text-center
 
`;

const SearchInput = tw.input`
    w-full md:w-3/4 text-black border-none rounded-lg p-2
`;

const SearchTitle = tw.div`
   sm:text-xl md:text-3xl 
`;
const SearchDescription = tw.div`
    text-md p-4
`;

const SearchButton = tw.button`
    bg-yellow w-40 p-2 mt-3 sm:mt-6 rounded-lg
`;
