'use client'

import { useEffect } from 'react';

const RockProperties = ({ poro, ntgo, porg, ntgg, setPoro, setNtgo, setPorg, setNtgg, onRockPropertiesChange }) => {
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
    <fieldset className="mt-0 mb-0 rounded-md bg-gray-100 text-xs p-2 w-full sm:w-48pct min-w-250 flex justify-around">
      <legend className="font-bold bg-gradient-to-r from-indigo-900 via-slate-500 to-black bg-clip-text text-transparent">Rock Properties:</legend>
      <div className="inline-block text-center mr-2">
        <p>Poro:</p>
        <input
          className="border w-12 bg-beige-100"
          type="text"
          id="poro"
          name="poro"
          onChange={(e) => handlePoroChange(e)}
        />
        <p>(frac)</p>
      </div>
      <div className="inline-block text-center mr-2">
        <p>N/Go:</p>
        <input
          className="border w-12 bg-beige-100"
          type="text"
          id="ntgo"
          name="ntgo"
          onChange={(e) => handleNtgoChange(e)}
        />
        <p>(frac)</p>
      </div>
      <div className="inline-block text-center mr-2">
        <p>Porg:</p>
        <input
          className="border w-12 bg-beige-100"
          type="text"
          id="porg"
          name="v/v"
          onChange={(e) => handlePorgChange(e)}
        />
        <p>(frac)</p>
      </div>
      <div className="inline-block text-center">
        <p>N/Gg:</p>
        <input
          className="border w-12 bg-beige-100"
          type="text"
          id="ntgg"
          name="v/v"
          onChange={(e) => handleNtggChange(e)}
        />
        <p>(frac)</p>
      </div>
    </fieldset>
  );
};

export default RockProperties;