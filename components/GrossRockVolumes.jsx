import { useEffect, useContext } from "react";
import { DarkModeContext } from "@app/layout";

// const Saturations = ({ reservoirState: { state: { sato, swco, satg, swcg, reservoirType, }, stateSetter: { setSato, setSwco, setSatg, setSwcg, }, }, onSaturationsChange, }) => {
const GrossRockVolumes = ({ reservoirState: { state: { grvOil, grvCapGas, reservoirType, }, stateSetter: { setGrvOil, setGrvCapGas, }, }, onGrossRockVolumesChange }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);  
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
    <fieldset className={`mt-0 mb-0 rounded-md bg-gray-100 text-xs p-2 w-full sm:w-48pct min-w-250 flex justify-around mx-1 ${darkMode ? 'bg-gray-900 text-white' : ''}`}>
      <legend className="font-bold bg-gradient-to-r from-indigo-500 via-slate-500 to-gray-600 to-black bg-clip-text text-transparent">Gross Rock Volumes:</legend>
      <div className="inline-block text-center mr-2">
        <p>GRV-oil:</p>
        <input
          className={`rounded-sm border w-16 bg-beige-100 text-center text-lg leading-3 shadow-md ${darkMode ? 'text-black' : ''} `}
          type="number"
          id="grvOil"
          name="grvOil"
          value={grvOil}
          disabled={reservoirType === 'gas'}
          onChange={(e) => handleGrvOilChange(e)}
        />
        <p>Macft</p>
      </div>
      <div className="inline-block text-center mr-2">
        <p>GRV-cap gas:</p>
        <input
          className={`rounded-sm border w-16 bg-beige-100 text-center text-lg leading-3 shadow-md ${darkMode ? 'text-black' : ''}`}
          type="number"
          id="grvCapGas"
          name="grvCapGas"
          value={grvCapGas}
          disabled={reservoirType === 'oil'}
          onChange={(e) => handleGrvCapGasChange(e)}
        />
        <p>Macft</p>
      </div>
    </fieldset>
  );
};

export default GrossRockVolumes;
