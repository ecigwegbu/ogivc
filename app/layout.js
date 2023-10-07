'use client';
import '@styles/globals.css'
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import { useState, createContext } from 'react';

// export const metadata = {
//   title: 'OGi Calculator',
//   description: 'Oil and Gas Interactive Hydocarbon Volume Calculator',
// }

const DataContext = createContext();

export default function RootLayout({ children }) {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="en">
      <body className='bg-blue-900'>
        <Provider>
          <main className='bg-gray-300 ml-2 mr-2'>
            <DataContext.Provider value={{ darkMode, setDarkMode }}>
              <Nav />
              {children}
            </DataContext.Provider>
          </main>
        </Provider>
      </body>
    </html>
  )
}

export { DataContext };