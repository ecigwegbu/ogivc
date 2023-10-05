'use client'

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

const Reservoir = ({ field, layer, block, setStoiip, setField, setLayer, setBlock, setFullName, fullName, onResChange }) => {
  const { data: session } = useSession();
  const handleFieldChange = (e) => {
    setField(e.target.value);
    // setFullName(`${e.target.value}-${layer}-${block}`);
    // setStoiip(e.target.value); // test
    // console.log(fullName);
    // onResChange(e);
  };
  const handleLayerChange = (e) => {
    setLayer(e.target.value);
    // setFullName(`${field}-${e.target.value}-${block}`);
    // console.log(fullName);
    // onResChange(e);
  };
  const handleBlockChange = (e) => {
    setBlock(e.target.value);
    // setFullName(`${field}-${layer}-${e.target.value}`);
    // console.log(fullName);
    // onResChange(e);
  };

  useEffect(() => {
    setFullName(`${field}-${layer}-${block}`);
    // onResChange();
  }, [field, layer, block, setFullName])

  return (
    <div className='sticky top-[6.3rem] bg-gray-300 flex flex-row justify-between text-xs w-full'>
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
        <input className='border w-20 bg-white-100 text-center' type='text' id='fullName' name='fullName' value={fullName} readOnly />
        <p>Full Name</p>
        </div>
      </fieldset>
      <div className='ml-2 flex flex-col w-16 justify-around mr-2 mt-1 font-bold shadow-lg'>
        <button className='bg-slate-200'>Reset</button>
        <button className={`bg-slate-200 ${!session ? 'text-gray-400 font-extrabold' : ''}`}>Save</button>
        <button className={`bg-slate-200 ${!session ? 'text-gray-400 font-extrabold' : ''}`}>Load</button>
      </div>
    </div>
  )
}
export default Reservoir;