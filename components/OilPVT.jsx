import { useEffect, useContext } from "react";
import { DarkModeContext } from "@app/layout";

const OilPVT = ({ reservoirState: { state: { boi, rsi, rhoo, reservoirType, }, stateSetter: { setBoi, setRsi, setRhoo, }, }, onOilPvtChange, }) => {
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
    console.log(darkMode);
  }, [boi, rsi, rhoo, onOilPvtChange]);

  const { darkMode } = useContext(DarkModeContext);  

  // <fieldset className={`-z-1 mt-2 mb-0 rounded-md bg-gray-100 text-xs p-2 w-full sm:w-48pct min-w-250 flex justify-around mx-1 ${resdata.reservoirType === 'gas' ? 'hidden' : ''}`}>
  return (
    <fieldset className={`-z-1 mt-2 mb-0 rounded-md bg-gray-100 text-xs p-2 w-full sm:w-48pct min-w-250 flex justify-around mx-1 ${reservoirType === 'gas' ? 'hidden' : ''} ${darkMode ? 'bg-[#000] text-white' : ''}`}>
      <legend className="font-bold bg-gradient-to-r from-red-900 via-orange-500 to-yellow-600 bg-clip-text text-transparent">Oil Properties:</legend>
      <div className="inline-block text-center">
        <p>Boi:</p>
        <input
          className={`border w-16 bg-red-200 text-center shadow-md rounded-sm text-lg leading-3 ${darkMode ? 'text-black' : ''}`}
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
          className={`border w-16 bg-red-200 text-center shadow-md rounded-sm text-lg leading-3  ${darkMode ? 'text-black' : ''}`}
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
          className={`border w-16 bg-red-200 text-center shadow-md rounded-sm text-lg leading-3  ${darkMode ? 'text-black' : ''}`}
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
