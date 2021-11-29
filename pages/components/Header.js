import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Image from 'next/image';
import logo from '../../public/assets/airportLogo.png';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

const Header = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        setUser({
        name: user.displayName,
          photoUrl: user.photoURL,
        });
  } else {
    setUser(null);
        router.push('/login');
  }
    });
  }, [router]);

  return (
    <Wrapper>
      <Image src={logo} alt='AirportHub logo' width={175} height={60} />
      <LoginData>
        <Name>{user && user.name}</Name>
        <ProfilePic src={user && user.photoUrl} onClick={() => signOut(auth)} />
      </LoginData>
    </Wrapper>
  );
};

export default Header;

const Wrapper = tw.div`
    bg-gray-600 opacity-100 flex items-center justify-between pl-5
`;

const ProfilePic = tw.img`
  cursor-pointer rounded-full border-none outline-none mr-3 max-h-12 max-w-12
`;
const LoginData = tw.div`
flex items-center text-yellow
`;

const Name = tw.div`
pr-2 text-md
`;
