import { useEffect, useContext } from "react";
import { DarkModeContext } from "@app/layout";
// const ReservoirType = ({ reservoirState: { state: { reservoirType, mFactor, }, stateSetter: { setReservoirType, setMFactor, }, }, }) => {
const Saturations = ({ reservoirState: { state: { sato, swco, satg, swcg, reservoirType, }, stateSetter: { setSato, setSwco, setSatg, setSwcg, }, }, onSaturationsChange, }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);  
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
    <fieldset className={`mt-0 mb-0 rounded-md bg-gray-100 text-xs p-2 w-full sm:w-48pct min-w-250 flex justify-around mx-1 ${darkMode ? 'bg-gray-900 text-white' : ''}`}>
      <legend className="font-bold bg-gradient-to-r from-blue-600 via-red-500 to-green-500 bg-clip-text text-transparent">Saturations:</legend>
      <div className="inline-block text-center mr-2">
        <p>Sato:</p>
        <input
          className={`ml-2 border w-12 bg-blue-100 text-center  shadow-md rounded-sm text-lg leading-3 ${darkMode ? 'text-black' : ''}`}
          type="number"
          id="sato"
          name="sato"
          value={sato}
          disabled={reservoirType === 'gas'}
          onChange={(e) => handleSatoChange(e)}
        />
        <p>%</p>
      </div>
      <div className="inline-block text-center mr-2">
        <p>Swco:</p>
        <input
          className={`ml-2 border w-12 bg-blue-100 text-center shadow-md rounded-sm text-lg leading-3 ${darkMode ? 'text-black' : ''}`}
          type="number"
          id="swco"
          name="swco"
          value={swco}
          disabled={reservoirType === 'gas'}
          onChange={(e) => handleSwcoChange(e)}
        />
        <p>%</p>
      </div>
      <div className="inline-block text-center mr-2">
        <p>Satg:</p>
        <input
          className={`ml-2 border w-12 bg-blue-100 text-center shadow-md rounded-sm text-lg leading-3 ${darkMode ? 'text-black' : ''}`}
          type="number"
          id="satg"
          name="satg"
          value={satg}
          disabled={reservoirType === 'oil'}
          onChange={(e) => handleSatgChange(e)}
        />
        <p>%</p>
      </div>
      <div className="inline-block text-center">
        <p>Swcg:</p>
        <input
          className={`ml-2 border w-12 bg-blue-100 text-center shadow-md rounded-sm text-lg leading-3 ${darkMode ? 'text-black' : ''}`}
          type="number"
          id="swcg"
          name="swcg"
          value={swcg}
          disabled={reservoirType === 'oil'}
          onChange={(e) => handleSwcgChange(e)}
        />
        <p>%</p>
      </div>
    </fieldset>
  );
};

export default Saturations;