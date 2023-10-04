// import Reservoir from './Reservoir';
import ReservoirType from './ReservoirType';
const TypeBar = ({ reservoirType, setReservoirType, mFactor, setMFactor, onTypeBarChange }) => {
  const handleReservoirTypeChange = () => {
    //
    onTypeBarChange();
    console.log('Reservoir Type Changed:');
  }
  return (
    <div className='sticky top-10 bg-slate-300 flex flex-row h-15 justify-around w-full border-4 border-solid border-red-900 self-start'>
        <div className='mt-2 w-4 bg-gradient-to-b from-green-500 via-red-500 to-blue-500 mr-1'>&nbsp;</div>
        <ReservoirType setReservoirType={setReservoirType} setMFactor={setMFactor} onChange={handleReservoirTypeChange}/>
    </div>
  )
}

export default TypeBar;