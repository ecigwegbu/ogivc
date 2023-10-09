import { useContext } from "react";
import { DarkModeContext } from "@app/layout";
// const ReservoirType = ({ reservoirType, setReservoirType, mFactor, setMFactor, onTypeBarChange }) => {
const ReservoirType = ({ reservoirState: { state: { reservoirType, mFactor, }, stateSetter: { setReservoirType, setMFactor, }, }, }) => {
  const { darkMode } = useContext(DarkModeContext);  
    // reservoirType, setReservoirType, mFactor, setMFactor, onTypeBarChange
    const handleReservoirTypeChange = (e) => {
      setReservoirType(e.target.value);
      if (e.target.value !== 'both') {
        setMFactor('');
      };
    }

    const handleMFactorChange = (e) => {
      setMFactor(e.target.value);
    }

  return (
    <div className={`sticky mt-0 top-36 bg-gray-300 flex flex-row h-15 pb-1 justify-around w-full border-b-4 border-b-blue-900 self-start ${darkMode ? 'bg-[#000] text-white' : ''}`}>
    <div className={`mt-2 w-24 border ml-2 mr-2 h-8 rounded-tl-full rounded-tr-full bg-gradient-to-b
      ${
        reservoirType==='oil' ? 'from-red-500 to-blue-500' : (
          reservoirType==='gas' ? 'from-green-500 to-blue-500'
          : 'from-green-500 via-red-500 to-blue-500'
        )
      }`
    }
    >&nbsp;</div>
    <div className={`flex ${darkMode ? 'bg-black text-white' : ''}`}>
    <fieldset className={`mt-0 mb-0 ml-0 rounded-md bg-stone-200 text-xs mr-2 p-2 max-w-xs flex justify-around border border-solid border-blue-900 ${darkMode ? 'bg-gray-900 text-white' : ''}`} value={reservoirType} onChange={(e) => handleReservoirTypeChange(e)}>
        <legend className='font-bold'>Reservoir Type:</legend>
        <label className='mr-3'>
            <div className='flex justify-around'>
          <input type='radio' id='oil' name='reservoirType' value='oil' /> &nbsp;Oil
          </div>
        </label>
        <label className='mr-3'>
            <div className='flex justify-around'>
          <input type='radio' id='gas' name='reservoirType' value='gas' />&nbsp;Gas
          </div>
        </label>
        <label className='mr-3'>
            <div className='flex justify-around'>
          <input type='radio' id='both' name='reservoirType' value='both' />&nbsp;Both
          </div>
        </label>
      </fieldset>
        <div className={`items-start mt-0 mb-0 mr-2 rounded-md h-10 bg-stone-200 text-xs p-2 pt-0 pb-0 flex flex-col self-end justify-center border border-solid border-blue-900 ${darkMode ? 'bg-gray-900 text-white' : ''}`}>
          <p className='ml-1 p-0 '>M&nbsp;Factor:</p>
          <input className={`w-14 border-l mt-0 no-spinners text-center text-md leading-3 ${darkMode ? 'text-black' : ''}`} type='number' id='mFactor' name='mFactor' placeholder={reservoirType === 'both' ? '' : 'both only'} value={mFactor} readOnly={reservoirType !== 'both'} onChange={(e) => handleMFactorChange(e)}/>
        </div>
        </div>
    </div>
  )
}
export default ReservoirType;