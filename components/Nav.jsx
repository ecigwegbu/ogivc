'use client';
import Image from 'next/image'
import Link from 'next/link';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import { useState, useEffect, useContext } from 'react';
import { DarkModeContext } from '@app/layout';

const Nav = () => {
  // The useSession hooke returns an object that contains session data, renamed here to session
  // This hooke is maintained automatically by next-auth
  const { data: session } = useSession(null);
  // const signOut = () => {
    // sign out
    // setUserLoggedIn((prev_state) => !prev_state)
  // }

  // const signIn = () => {
    // sign In
    // setUserLoggedIn((prev_state) => !prev_state)
  // }

  // Mock login/out for now
  const [userLoggedIn, setUserLoggedIn] = useState('false'); // test

  // The providers state variable contains the list of available OAuth providers, like Google, GitHub.
  const [providers, setProviders] = useState(null);

  // Once only, retrieve a list of OAuth providers
  useEffect(() => {
    (async () => {
      const response = await getProviders();
      // alert('Setting Providers...');
      setProviders(response);
      // alert(Object.values(providers));
    })();
  }, []);

  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className={`sticky top-0 h-10 flex flex-row items-center justify-between w-full ${darkMode ? 'text-gray-400' : 'text-white'} bg-blue-900 text-xs`}>
        <div className='ml-2'><img src='/images/ogi-logo.png' alt='ogi-logo' className='w-12 h-8 border-1 rounded-full border border-solid border-orange-500 mt-1'/></div>
        <div className='flex flex-col pt-4 ml-5 justify-center items-start'>
          <div className='font-extrabold mb-0 pb-0 leading-3 '>Hydocarbon Volume Calculator</div>
          <p className='sticky text-[6pt] self-center text-white mt-0 pt-0 pb-1 mb-1'>Version 1.01</p>
        </div>
        {session?.user ? (
          <>
            <button className='hover:bg-blue-600 p-1 rounded-full border-2 border-white-900' type='button' onClick={signOut}>
              Logout
            </button>
            <Link href='/'>
              <Image className='rounded-full mr-2' src={session?.user.image} alt='user' width='40' height='40'/>
            </Link>
          </>
        ) : (<>
              {providers &&
              Object.values(providers).map((provider) => (
                <button
                  className='hover:bg-blue-600 p-1 rounded-full border-2 border-white-900'
                  type='button'
                  key={provider.name}
                  onClick={(e) => {
                    signIn(provider.id);
                  }}
                >
                 Login 
                </button>
              ))}
            </>
          )
        }
    </div>
  )
}

export default Nav;