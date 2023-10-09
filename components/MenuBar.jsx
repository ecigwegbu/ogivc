// import '/public/images/dark.png';
// import '/public/images/light.png';
import { useSession } from 'next-auth/react';
import resetResdata from '@utils/reset-resdata';
import { useEffect, useContext } from "react";
import { DarkModeContext } from "@app/layout";
import saveReservoir from '@utils/save-reservoir'; 
import loadReservoir from '@utils/load-reservoir';
import deleteReservoir from '@utils/delete-reservoir';
// import Link from 'next/link';
// import { useState, useEffect, useContext } from 'react';
// import { DataContext } from '@app/layout';
// <img src='/images/ogi-logo.png' alt='ogi-logo' className='w-12 h-8 border-1 rounded-full border border-solid border-orange-500 mt-1

const MenuBar = ({ reservoirState: { state, stateSetter } }) => {

const { data: session } = useSession();
  const { darkMode, setDarkMode } = useContext(DarkModeContext);  
  return (
    <div className='sticky top-10 flex flex-row justify-around py-1 font-bold items-centre w-full h-10 bg-blue-900 border-t border-t-gray-500'>
        <button className={`bg-slate-200 pb-2 my-1 px-4 shadow-md rounded-sm ${darkMode ? 'text-black' : ''} text-red-400`} id='reset2' onClick={() => resetResdata(stateSetter)}>Clear</button>
        <button className={`bg-slate-200 pb-2 my-1 px-4 ${(darkMode && session) ? 'text-black' : ''} ${!session ? 'text-gray-400 font-extrabold' : ''} shadow-md rounded-sm`} disabled={!session} onClick={(e) => {saveReservoir(state, session)}}>Save</button>
        <button className={`bg-slate-200 pb-2 my-1 px-4 ${(darkMode && session) ? 'text-black' : ''} ${!session ? 'text-gray-400 font-extrabold' : ''} shadow-md rounded-sm`} disabled={!session} onClick={(e) => {loadReservoir(state.resCode, stateSetter, session)}}>Load</button>
        <button className={`bg-slate-200 pb-2 my-1 px-4 ${(darkMode && session) ? 'text-black' : ''} ${!session ? 'text-gray-400 font-extrabold' : ''} shadow-md rounded-sm`} disabled={!session} onClick={(e) => {deleteReservoir(state.resCode, session)}}>Delete</button>
          <img src={`${darkMode ? '/images/light.png' : '/images/dark.png'}`} alt='dark-mode' className='cursor-pointer hover:opacity-70 border-1 rounded-full border border-solid border-white w-6 h-6 mt-1 self-center' title={`${darkMode ? 'Light Mode' : 'Dark Mode'}`} onClick={() => setDarkMode((prev) => !prev)}/>
    </div>
  )
}

export default MenuBar;