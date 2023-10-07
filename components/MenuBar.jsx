'use client';
import '/public/images/dark.png';
import '/public/images/light.png';
import { useSession } from 'next-auth/react';
import resetResdata from '@utils/reset-resdata';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '@app/layout';
// <img src='/images/ogi-logo.png' alt='ogi-logo' className='w-12 h-8 border-1 rounded-full border border-solid border-orange-500 mt-1

const MenuBar = ({ setResdata }) => {
const { data: session } = useSession();
  return (
    <div className='sticky top-10 flex flex-row justify-around py-1 px-2 font-bold items-centre w-full h-10 bg-gray-300 rounded-md border border-blue-600'>
        <button className='bg-slate-200 pb-2 my-1 px-4 shadow-md rounded-sm' id='reset2' onClick={() => resetResdata(setResdata)}>Reset</button>
        <button className={`bg-slate-200 pb-2 my-1 px-4 ${!session ? 'text-gray-400 font-extrabold' : ''} shadow-md rounded-sm`} disabled={!session}>Save</button>
        <button className={`bg-slate-200 pb-2 my-1 px-4 ${!session ? 'text-gray-400 font-extrabold' : ''} shadow-md rounded-sm`} disabled={!session}>Load</button>
        <img src='/images/dark.png' alt='dark-mode' className='border-1 rounded-full border border-solid border-white w-6 h-6 mt-1 self-center' />
    </div>
  )
}

export default MenuBar;