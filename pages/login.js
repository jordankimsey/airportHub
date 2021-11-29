import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import tw from 'tailwind-styled-components';
import Header from './components/Header';
import { auth, provider } from '../firebase';



const Login = () => {

  const router = useRouter()
  
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        router.push('/')
      }
    })
  }, [router])

  return (
    <Wrapper
      style={{
        //change url to host url with file path
        backgroundImage: `url(https://airport-hub.vercel.app/assets/login.jpg)`,
        width: '100vw',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Header />
      <Container>
        <LoginCard>
          <LoginWelcome>
            <h1>Welcome Back!</h1>
          </LoginWelcome>
          <LoginText>Please sign in to access your account</LoginText>
          <GoogleButton onClick={() => signInWithPopup(auth, provider)}>
            Sign in with Google{' '}
          </GoogleButton>
        </LoginCard>
      </Container>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`
  h-screen overflow-y-hidden
`;
const Container = tw.div`
    h-screen flex items-center justify-center
`;
const LoginCard = tw.div`
     bg-gray-600 opacity-75 text-white h-1/3 
    sm:h-1/3 p-5 sm:p-9 rounded-lg w-3/4 md:w-2/3 lg:w-1/2 2xl:w-1/3 flex 
     text-center shadow-2xl flex-col items-center justify-between
`;




const LoginWelcome = tw.div`
    text-xl
`;

const LoginText = tw.div`
    
`;

const GoogleButton = tw.button`
    bg-yellow text-black w-full py-3 rounded-lg
`;
