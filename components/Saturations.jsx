'use client'

import { useEffect } from 'react';

const Saturations = ({ sato, swco, satg, swcg, setSato, setSwco, setSatg, setSwcg, onSaturationsChange }) => {
  const handleSatoChange = (e) => {
    setSato(e.target.value);
    // onRockPropertiesChange(e);
  }
  const handleSwcoChange = (e) => {
    setSwco(e.target.value);
    // onRockPropertiesChange(e);
  }
  const handleSatgChange = (e) => {
    setSatg(e.target.value);
    // onRockPropertiesChange(e);
  }
  const handleSwcgChange = (e) => {
    setSwcg(e.target.value);
    // onRockPropertiesChange(e);
  }
  useEffect(() => {
    onSaturationsChange();
  }, [sato, swco, satg, swcg, onSaturationsChange]);

  return (
    <fieldset className="mt-0 mb-0 rounded-md bg-gray-100 text-xs p-2 w-full sm:w-48pct min-w-250 flex justify-around">
      <legend className="font-bold bg-gradient-to-r from-blue-600 via-red-500 to-green-500 bg-clip-text text-transparent">Saturations:</legend>
      <div className="inline-block text-center mr-2">
        <p>Sato:</p>
        <input
          className="ml-2 border w-12 bg-blue-100"
          type="text"
          id="sato"
          name="sato"
          onChange={(e) => handleSatoChange(e)}
        />
        <p>(frac)</p>
      </div>
      <div className="inline-block text-center mr-2">
        <p>Swco:</p>
        <input
          className="ml-2 border w-12 bg-blue-100"
          type="text"
          id="swco"
          name="swco"
          onChange={(e) => handleSwcoChange(e)}
        />
        <p>(frac)</p>
      </div>
      <div className="inline-block text-center mr-2">
        <p>Satg:</p>
        <input
          className="ml-2 border w-12 bg-blue-100"
          type="text"
          id="satg"
          name="satg"
          onChange={(e) => handleSatgChange(e)}
        />
        <p>(frac)</p>
      </div>
      <div className="inline-block text-center">
        <p>Swcg:</p>
        <input
          className="ml-2 border w-12 bg-blue-100"
          type="text"
          id="swcg"
          name="swcg"
          onChange={(e) => handleSwcgChange(e)}
        />
        <p>(frac)</p>
      </div>
    </fieldset>
  );
};

export default Saturations;