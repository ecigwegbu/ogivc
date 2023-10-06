'use client'

import { useEffect } from "react";

const OilPVT = ({ boi, rsi, rhoo, setBoi, setRsi, setRhoo, onOilPvtChange, resdata }) => {
  const handleBoiChange = (e) => {
    // console.log('Hello Boi');
    setBoi(e.target.value);
    // onOilPvtChange(e);
  };
  const handleRsiChange = (e) => {
    setRsi(e.target.value);
    // onOilPvtChange(e);
  };
  const handleRhooChange = (e) => {
    setRhoo(e.target.value);
    // onOilPvtChange(e);
  };

    useEffect(() => {
    onOilPvtChange();
  }, [boi, rsi, rhoo, onOilPvtChange]);


  return (
    <fieldset className={`-z-1 mt-2 mb-0 rounded-md bg-gray-100 text-xs p-2 w-full sm:w-48pct min-w-250 flex justify-around mx-1 ${resdata.reservoirType === 'gas' ? 'hidden' : ''}`}>
      <legend className="font-bold bg-gradient-to-r from-red-900 via-orange-500 to-yellow-600 bg-clip-text text-transparent">Oil Properties:</legend>
      <div className="inline-block text-center">
        <p>Boi:</p>
        <input
          className="border w-16 bg-red-200 text-right shadow-md rounded-sm"
          type="number"
          id="boi"
          name="boi"
          value={boi}
          onChange={(e) => handleBoiChange(e)}
        />
        <p>rb/stb</p>
      </div>
      <div className="inline-block text-center">
        <p>Rsi:</p>
        <input
          className="border w-16 bg-red-200 text-right shadow-md rounded-sm"
          type="number"
          id="rsi"
          name="rsi"
          value={rsi}
          onChange={(e) => handleRsiChange(e)}
        />
        <p>Mscf/stb</p>
      </div>
      <div className="inline-block text-center">
        <p>&gamma;o:</p>
        <input
          className="border w-16 bg-red-200 text-right shadow-md rounded-sm"
          type="number"
          id="rho"
          name="v/v"
          value={rhoo}
          onChange={(e) => handleRhooChange(e)}
        />
        <p>v/v</p>
      </div>
    </fieldset>
  );
};

export default OilPVT;
