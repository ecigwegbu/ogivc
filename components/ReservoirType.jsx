const ReservoirType = ({ reservoirType, setReservoirType, mFactor, setMfactor, onTypeBarChange }) => {
    // reservoirType, setReservoirType, mFactor, setMFactor, onTypeBarChange
    const handleReservoirTypeChange = (e) => {
        // alert(e.target.value);
    }

  return (
    <div className='sticky top-10 bg-slate-300 flex flex-row h-15 pb-1 justify-around w-full border-4 border-solid border-red-900 self-start'>
    <div className='mt-2 w-24 border ml-2 mr-2 h-8 rounded-tl-full rounded-tr-full bg-gradient-to-b from-green-500 via-red-500 to-blue-500'>&nbsp;</div>
    <div className='flex'>
    <fieldset className="mt-0 mb-0 ml-0 rounded-md bg-stone-200 text-xs mr-2 p-2 max-w-xs flex justify-around border border-solid border-blue-900" onChange={(e) => handleReservoirTypeChange(e)}>
        <legend className='font-bold'>Reservoir Type:</legend>
        <label className='mr-3'>
            <div className='flex justify-around'>
          <input type='radio' id='oil' name='reservoirType' value='oil'/> &nbsp;Oil
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
        <div className='items-start mt-0 mb-0 mr-2 rounded-md h-10 bg-stone-200 text-xs p-2 pt-0 pb-0 flex flex-col self-end justify-center border border-solid border-blue-900'>
          <p className='ml-1 p-0 '>M&nbsp;Factor:</p>
          <input className='w-14 border-l mt-0 text-center' type='text' id='mFactor' name='mFactor' placeholder='both only' readOnly/>
        </div>
        </div>
    </div>
  )
}
  
export default ReservoirType;
/*
    <div className='sticky top-10 bg-slate-300 flex flex-row h-15 justify-around w-full border-4 border-solid border-red-900 self-start'>
/*
    <div className='sticky top-10 bg-slate-300 flex flex-row h-15 justify-around w-full border-4 border-solid border-red-900 self-start'>
        <div className='mt-2 w-4 bg-gradient-to-b from-green-500 via-red-500 to-blue-500 mr-1'>&nbsp;</div>
        <ReservoirType setReservoirType={setReservoirType} setMFactor={setMFactor} onChange={handleReservoirTypeChange}/>
    </div> */