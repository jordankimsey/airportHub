import tw from 'tailwind-styled-components';
import Header from './components/Header';
import MainSearch from './components/mainSearch';

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <MainSearch />
    </Wrapper>
  )
}

const Wrapper = tw.div`
  bg-gray-300 h-screen overflow-y-hidden
`