import { useEffect, useContext } from "react";
import { DarkModeContext } from "@app/layout";

// const OilPVT = ({ reservoirState: { state: { boi, rsi, rhoo, reservoirType}, stateSetter: { setBoi, setRsi, setRhoo } }, onOilPvtChange, }) => {
const GasPVT = ({ reservoirState : { state: { ei, cgr, rhog, reservoirType }, stateSetter: { setEi, setCgr, setRhog } }, onGasPvtChange, }) => {
  const handleEiChange = (e) => {
    setEi(e.target.value);
    // onGasPvtChange(e);
  }
  const handleCgrChange = (e) => {
    setCgr(e.target.value);
    // onGasPvtChange(e);
  }
  const handleRhogChange = (e) => {
    setRhog(e.target.value);
    // onGasPvtChange(e);
  }
  useEffect(() => {
    onGasPvtChange();
    console.log(darkMode);
  }, [ei, cgr, rhog, onGasPvtChange]);

  const { darkMode } = useContext(DarkModeContext);  

  return (
    <fieldset className={`mt-0 mb-0 rounded-md bg-gray-100 text-xs p-2 w-full sm:w-48pct min-w-250 flex justify-around mx-1 ${reservoirType === 'oil' ? 'hidden' : ''} ${darkMode ? 'bg-gray-900 text-white' : ''}`}>
        <legend className='font-bold bg-gradient-to-r from-green-900 via-green-700 to-green-400 bg-clip-text text-transparent'>Gas Properties:</legend>
      <div className='inline-block text-center'>
        <p>Ei:</p>
        <input className={`border w-16 bg-green-100 text-center shadow-md rounded-sm text-lg leading-3  ${darkMode ? 'text-black' : ''}`} type='number' id='ei' name='ei' value={ei} onChange={(e) => handleEiChange(e)}/>
        <p>scf/rcf</p>
      </div>
      <div className='inline-block text-center'>
        <p>CGR:</p>
        <input className={`border w-16 bg-green-100 text-center shadow-md rounded-sm text-lg leading-3  ${darkMode ? 'text-black' : ''}`} type='number' id='cgr' name='cgr' value={cgr} onChange={(e) => handleCgrChange(e)}/>
        <p>stb/MMscf</p>
      </div>
      <div className='inline-block text-center'>
        <p>&gamma;g:</p>
        <input className={`border w-16 bg-green-100 text-center shadow-md rounded-sm text-lg leading-3  ${darkMode ? 'text-black' : ''}`} type='number' id='rhog' name='rhog' value={rhog} onChange={(e) => handleRhogChange(e)}/>
        <p>v/v</p>
        </div>
      </fieldset>
  )
}
export default GasPVT;

