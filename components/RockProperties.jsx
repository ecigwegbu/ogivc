import { useEffect, useContext } from "react";
import { DarkModeContext } from "@app/layout";

// const ReservoirType = ({ reservoirState: { state: { reservoirType, mFactor, }, stateSetter: { setReservoirType, setMFactor, }, }, }) => {
const RockProperties = ({ reservoirState: { state: { poro, ntgo, porg, ntgg, reservoirType, }, stateSetter: { setPoro, setNtgo, setPorg, setNtgg, } }, onRockPropertiesChange, }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);  
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
    <fieldset className={`mt-0 mb-0 rounded-md bg-gray-100 text-xs p-2 w-full sm:w-48pct min-w-250 flex justify-around mx-1 ${darkMode ? 'bg-black text-white' : ''} `}>
      <legend className="font-bold bg-gradient-to-r from-indigo-500 via-slate-500 to-gray-500 bg-clip-text text-transparent">Rock Properties:</legend>
      <div className="inline-block text-center mr-2">
        <p>Poro:</p>
        <input
          className={`border w-12 bg-beige-100 text-center shadow-md rounded-sm text-lg leading-3 ${darkMode ? 'text-black' : ''}`}
          type="number"
          id="poro"
          name="poro"
          value={poro}
          disabled={reservoirType === 'gas'}
          onChange={(e) => handlePoroChange(e)}
        />
        <p>(frac)</p>
      </div>
      <div className="inline-block text-center mr-2">
        <p>N/Go:</p>
        <input
          className={`border w-12 bg-beige-100 text-center shadow-md rounded-sm text-lg leading-3 ${darkMode ? 'text-black' : ''}`}
          type="number"
          id="ntgo"
          name="ntgo"
          value={ntgo}
          disabled={reservoirType === 'gas'}
          onChange={(e) => handleNtgoChange(e)}
        />
        <p>(frac)</p>
      </div>
      <div className="inline-block text-center mr-2">
        <p>Porg:</p>
        <input
          className={`border w-12 bg-beige-100 text-center shadow-md rounded-sm text-lg leading-3 ${darkMode ? 'text-black' : ''}`}
          type="number"
          id="porg"
          name="v/v"
          value={porg}
          disabled={reservoirType === 'oil'}
          onChange={(e) => handlePorgChange(e)}
        />
        <p>(frac)</p>
      </div>
      <div className="inline-block text-center">
        <p>N/Gg:</p>
        <input
          className={`border w-12 bg-beige-100 text-center shadow-md rounded-sm text-lg leading-3 ${darkMode ? 'text-black' : ''}`}
          type="number"
          id="ntgg"
          name="v/v"
          value={ntgg}
          disabled={reservoirType === 'oil'}
          onChange={(e) => handleNtggChange(e)}
        />
        <p>(frac)</p>
      </div>
    </fieldset>
  );
};

export default RockProperties;