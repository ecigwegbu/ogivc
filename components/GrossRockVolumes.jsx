'use client'

import { useEffect } from 'react';

const GrossRockVolumes = ({ grvOil, grvCapGas, setGrvOil, setGrvCapGas, onGrossRockVolumesChange }) => {
  const handleGrvOilChange = (e) => {
    setGrvOil(e.target.value);
    // onRockPropertiesChange(e);
  }
  const handleGrvCapGasChange = (e) => {
    setGrvCapGas(e.target.value);
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
    onGrossRockVolumesChange();
  }, [grvOil, grvCapGas, onGrossRockVolumesChange]);

  return (
    <fieldset className="mt-0 mb-0 rounded-md bg-gray-100 text-xs p-2 w-full sm:w-48pct min-w-250 flex justify-around">
      <legend className="font-bold bg-gradient-to-r from-indigo-900 via-slate-500 to-black bg-clip-text text-transparent">Gross Rock Vols:</legend>
      <div className="inline-block text-center mr-2">
        <p>GRV-oil:</p>
        <input
          className="border w-12 bg-beige-100"
          type="text"
          id="grvOil"
          name="grvOil"
          onChange={(e) => handleGrvOilChange(e)}
        />
        <p>Macft</p>
      </div>
      <div className="inline-block text-center mr-2">
        <p>GRV-cap gas:</p>
        <input
          className="border w-12 bg-beige-100"
          type="text"
          id="grvCapGas"
          name="grvCapGas"
          onChange={(e) => handleGrvCapGasChange(e)}
        />
        <p>Macft</p>
      </div>
    </fieldset>
  );
};

export default GrossRockVolumes;