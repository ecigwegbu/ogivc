import { useEffect, useContext } from "react";
import { DarkModeContext } from "@app/layout";
import { useSession } from 'next-auth/react';
import resetResdata from '@utils/reset-resdata';

const Reservoir = ({ reservoirState: { state: { field, layer, block, resCode, }, stateSetter: { setField, setLayer, setBlock, setResCode, }, }, reservoirState: { stateSetter }, onResChange, }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);  
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
    setResCode(`${field.trim()}-${layer.trim()}-${block.trim()}`);
    // onResChange();
  }, [field, layer, block, setResCode])
  // alert(`Res Data: ${setResdata}`);
  // <div className='sticky top-[6.3rem] bg-gray-300 flex flex-row justify-between text-xs w-full'>
  return (
    <div className={`sticky top-20 mb-0 h-16 pb-1 bg-gray-300 flex flex-row justify-between text-xs w-full ${darkMode ? 'bg-violet-900 text-white' : ''}`}>
      <fieldset className={`mt-0 mb-0 mx-2 bg-gray-100 text-md text-extrabold p-1 w-full flex justify-around border border-solid border-blue-900 border-2 rounded-md ${darkMode ? 'bg-gray-900 text-white' : ''}`}>
        <legend className='font-bold pl-2'>Reservoir:</legend>
      <div className='inline-block text-center'>
        <input className={`border w-16 bg-white-100 text-center shadow-md rounded-sm  ${darkMode ? 'text-black' : ''}`} type='text' id='field' name='field' value={field} onChange={(e) => handleFieldChange(e)}/>
        <p>Field</p>
      </div>
      <div className='inline-block text-center'>
        <input className={`border w-16 bg-white-100 text-center shadow-md rounded-sm  ${darkMode ? 'text-black' : ''}`} type='text' id='layer' name='layer' value={layer} onChange={(e) => handleLayerChange(e)} />
        <p>Layer</p>
      </div>
      <div className='inline-block text-center'>
        <input className={`border w-10 bg-white-100 text-center shadow-md rounded-sm  ${darkMode ? 'text-black' : ''}`} type='text' id='block' name='block' value={block} onChange={(e) => handleBlockChange(e)}/>
        <p>Block</p>
        </div>
      <div className='inline-block text-center'>
        <input className={`border w-26 bg-white-100 text-center text-slate-400 shadow-md rounded-sm  ${darkMode ? 'text-black' : ''}`} type='text' id='resCode' name='resCode' value={resCode} readOnly />
        <p className='text-slate-400'>Res. Code</p>
        </div>
      </fieldset>
    </div>
  )
}
export default Reservoir;
/*
      <div className='ml-2 flex flex-col w-16 justify-around mr-2 mt-1 font-bold shadow-lg'>
        <button className='bg-slate-200 shadow-md rounded-sm' onClick={() => resetResdata(stateSetter)}>Reset</button>
        <button className={`bg-slate-200 ${!session ? 'text-gray-400 font-extrabold' : ''} shadow-md rounded-sm`} disabled={!session}>Save</button>
        <button className={`bg-slate-200 ${!session ? 'text-gray-400 font-extrabold' : ''} shadow-md rounded-sm`} disabled={!session}>Load</button>
      </div>
*/