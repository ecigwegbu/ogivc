import '@styles/globals.css'
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'OGi Calculator',
  description: 'Oil and Gas Interactive Hydocarbon Volume Calculator',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-blue-900'>
        <Provider>
          <main className='bg-gray-300 ml-2 mr-2'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
