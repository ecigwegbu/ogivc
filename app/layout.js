'use client';
import '@styles/globals.css'
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import { useState, createContext } from 'react';

// export const metadata = {
//   title: 'OGi Calculator',
//   description: 'Oil and Gas Interactive Hydocarbon Volume Calculator',
// }

const DarkModeContext = createContext();

export default function RootLayout({ children }) {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="en">
      <body className='bg-blue-900 min-w-[300px] '>
        <Provider>
          <main className={`bg-gray-300 ml-2 mr-2  ${darkMode ? 'bg-gray-800' : ''} w-[100vw] max-w-2xl flex flex-col justify-start items-center `}>
            <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
              <Nav />
              {children}
            </DarkModeContext.Provider>
          </main>
        </Provider>
      </body>
    </html>
  )
}

export { DarkModeContext };