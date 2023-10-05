import { useEffect } from "react";

const GasPVT = ({ ei, cgr, rhog, setEi, setCgr, setRhog, onGasPvtChange, reservoirType }) => {
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
  }, [ei, cgr, rhog, onGasPvtChange]);

  return (
    <fieldset className={`mt-0 mb-0 rounded-md bg-gray-100 text-xs p-2 w-full sm:w-48pct min-w-250 flex justify-around ${reservoirType === 'oil' ? 'hidden' : ''}`}>
        <legend className='font-bold bg-gradient-to-r from-green-900 via-green-700 to-green-400 bg-clip-text text-transparent'>Gas Properties:</legend>
      <div className='inline-block text-center'>
        <p>Ei:</p>
        <input className='border w-16 bg-green-100' type='text' id='ei' name='ei' onChange={(e) => handleEiChange(e)}/>
        <p>scf/rcf</p>
      </div>
      <div className='inline-block text-center'>
        <p>CGR:</p>
        <input className='border w-16 bg-green-100' type='text' id='cgr' name='cgr' onChange={(e) => handleCgrChange(e)}/>
        <p>stb/Mscf</p>
      </div>
      <div className='inline-block text-center'>
        <p>&rho;g:</p>
        <input className='border w-16 bg-green-100' type='text' id='rhog' name='rhog' onChange={(e) => handleRhogChange(e)}/>
        <p>v/v</p>
        </div>
      </fieldset>
  )
}

export default GasPVT;

