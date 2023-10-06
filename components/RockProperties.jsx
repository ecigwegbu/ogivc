'use client'

import { useEffect } from 'react';

const RockProperties = ({ poro, ntgo, porg, ntgg, setPoro, setNtgo, setPorg, setNtgg, onRockPropertiesChange, resdata }) => {
  const handlePoroChange = (e) => {
    setPoro(e.target.value);
    // onRockPropertiesChange(e);
  }
  const handleNtgoChange = (e) => {
    setNtgo(e.target.value);
    // onRockPropertiesChange(e);
  }
  const handlePorgChange = (e) => {
    setPorg(e.target.value);
    // onRockPropertiesChange(e);
  }
  const handleNtggChange = (e) => {
    setNtgg(e.target.value);
    // onRockPropertiesChange(e);
  }
  useEffect(() => {
    onRockPropertiesChange();
  }, [poro, ntgo, porg, ntgg, onRockPropertiesChange]);

  return (
    <fieldset className="mt-0 mb-0 rounded-md bg-gray-100 text-xs p-2 w-full sm:w-48pct min-w-250 flex justify-around mx-1">
      <legend className="font-bold bg-gradient-to-r from-indigo-900 via-slate-500 to-black bg-clip-text text-transparent">Rock Properties:</legend>
      <div className="inline-block text-center mr-2">
        <p>Poro:</p>
        <input
          className="border w-12 bg-beige-100 text-right shadow-md rounded-sm"
          type="number"
          id="poro"
          name="poro"
          value={poro}
          disabled={resdata.reservoirType === 'gas'}
          onChange={(e) => handlePoroChange(e)}
        />
        <p>(frac)</p>
      </div>
      <div className="inline-block text-center mr-2">
        <p>N/Go:</p>
        <input
          className="border w-12 bg-beige-100 text-right shadow-md rounded-sm"
          type="number"
          id="ntgo"
          name="ntgo"
          value={ntgo}
          disabled={resdata.reservoirType === 'gas'}
          onChange={(e) => handleNtgoChange(e)}
        />
        <p>(frac)</p>
      </div>
      <div className="inline-block text-center mr-2">
        <p>Porg:</p>
        <input
          className="border w-12 bg-beige-100 text-right shadow-md rounded-sm"
          type="number"
          id="porg"
          name="v/v"
          value={porg}
          disabled={resdata.reservoirType === 'oil'}
          onChange={(e) => handlePorgChange(e)}
        />
        <p>(frac)</p>
      </div>
      <div className="inline-block text-center">
        <p>N/Gg:</p>
        <input
          className="border w-12 bg-beige-100 text-right shadow-md rounded-sm"
          type="number"
          id="ntgg"
          name="v/v"
          value={ntgg}
          disabled={resdata.reservoirType === 'oil'}
          onChange={(e) => handleNtggChange(e)}
        />
        <p>(frac)</p>
      </div>
    </fieldset>
  );
};

export default RockProperties;