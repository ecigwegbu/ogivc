'use client'

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

const Reservoir = ({ field, layer, block, setField, setLayer, setBlock, setResCode, resCode, onResChange }) => {
  const { data: session } = useSession();
  const handleFieldChange = (e) => {
    setField(e.target.value);
    // setResCode(`${e.target.value}-${layer}-${block}`);
    // setStoiip(e.target.value); // test
    // onResChange(e);
  };
  const handleLayerChange = (e) => {
    setLayer(e.target.value);
    // setResCode(`${field}-${e.target.value}-${block}`);
    // onResChange(e);
  };
  const handleBlockChange = (e) => {
    setBlock(e.target.value);
    // setResCode(`${field}-${layer}-${e.target.value}`);
    // onResChange(e);
  };

  useEffect(() => {
    setResCode(`${field}-${layer}-${block}`);
    // onResChange();
  }, [field, layer, block, setResCode])

  // <div className='sticky top-[6.3rem] bg-gray-300 flex flex-row justify-between text-xs w-full'>
  return (
    <div className='sticky top-10 mb-0 h-16 bg-gray-300 flex flex-row justify-between text-xs w-full'>
      <fieldset className="mt-0 mb-0 ml-2 bg-gray-100 text-xs p-2 w-full flex justify-around border border-solid border-blue-900 border-2">
        <legend className='font-bold'>Reservoir:</legend>
      <div className='inline-block text-center'>
        <input className='border w-16 bg-white-100 text-center' type='text' id='field' name='field' onChange={(e) => handleFieldChange(e)}/>
        <p>Field</p>
      </div>
      <div className='inline-block text-center'>
        <input className='border w-16 bg-white-100 text-center' type='text' id='layer' name='layer' onChange={(e) => handleLayerChange(e)} />
        <p>Layer</p>
      </div>
      <div className='inline-block text-center'>
        <input className='border w-10 bg-white-100 text-center' type='text' id='block' name='block' onChange={(e) => handleBlockChange(e)}/>
        <p>Block</p>
        </div>
      <div className='inline-block text-center'>
        <input className='border w-20 bg-white-100 text-center text-slate-400' type='text' id='resCode' name='resCode' value={resCode} readOnly />
        <p className='text-slate-400'>Res. Code</p>
        </div>
      </fieldset>
      <div className='ml-2 flex flex-col w-16 justify-around mr-2 mt-1 font-bold shadow-lg'>
        <button className='bg-slate-200'>Reset</button>
        <button className={`bg-slate-200 ${!session ? 'text-gray-400 font-extrabold' : ''}`} disabled={!session}>Save</button>
        <button className={`bg-slate-200 ${!session ? 'text-gray-400 font-extrabold' : ''}`} disabled={!session}>Load</button>
      </div>
    </div>
  )
}
export default Reservoir;