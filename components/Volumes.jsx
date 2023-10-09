import { useEffect, useContext } from "react";
import { DarkModeContext } from "@app/layout";

// const OilPVT = ({ reservoirState: { state: { boi, rsi, rhoo, reservoirType}, stateSetter: { setBoi, setRsi, setRhoo }, }, onOilPvtChange, }) => {
const Volumes = ({ reservoirState: { state: { grvOil, grvCapGas, stoiip, sgiip, fgiip, ciip, rfo, rfsg, rffg, rfcond, uro, ursg, urfg, urcond, }, stateSetter: { setGrvOil, setGrvCapGas, setRfo, setRfsg, setRffg, setRfcond, }, }, onVolumesChange,  }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);  

    const handleGrvOilChange = (e) => {
        setGrvOil(e.target.value);
    }
    const handleGrvCapGasChange = (e) => {
        setGrvCapGas(e.target.value);
    }
    const handleRfoChange = (e) => {
        setRfo(e.target.value);
    }
    const handleRfsgChange = (e) => {
        setRfsg(e.target.value);
    }
    const handleRffgChange = (e) => {
        setRffg(e.target.value);
    }
    const handleRfcondChange = (e) => {
        setRfcond(e.target.value);
    }
    useEffect(() => {
        onVolumesChange();
        console.log(darkMode);
    }, [grvOil, grvCapGas, rfo, rfsg, rffg, rfcond, onVolumesChange]);

    const liquidsUnit = 'MMstb';
    const gasUnit= 'Bscf';
    const rfUnit = '(frac)';

    const isValid = true;

  return (
    <div className={`flex flex-col items-center mx-1 ${darkMode ? 'bg-gray-800 text-white' : ''}`}>
    <h3 className={`text-blue-900 mt-0 mb-0 font-extrabold ${darkMode ? 'text-blue-500' : ''}`}>Resource Volumes</h3>
    <p className={`text-blue-600 text-xs mt-1 b-0 font-bold self-start ${darkMode ? 'text-blue-400' : ''}`}>Oil and Condensate</p>
    <div className={`grid grid-rows-4 grid-cols-4 gap-0.5 bg-slate-200 border border-2 border-solid border-red-100 ${darkMode ? 'bg-gray-700 text-white' : ''}`}>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-center h-full ${darkMode ? 'bg-black text-white' : ''}`} type='text' name='headings' id='headings' readOnly/></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-center font-bold h-full ${darkMode ? 'bg-black text-white' : ''}`} type='text' name='oil' id='volOil' placeholder='Oil' readOnly /></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-center font-bold h-full ${darkMode ? 'bg-black text-white' : ''}`} type='text' name='cond' id='volCond' placeholder='Cond.' readOnly /></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-center font-bold h-full ${darkMode ? 'bg-black text-white' : ''}`} type='text' name='remOilAndCond' id='remOilAndCond' placeholder='Unit' readOnly /></div>

        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border font-bold text-right h-full ${darkMode ? 'bg-black text-white' : ''}`} type='text' name='HCIIP' id='hciip' placeholder='HCIIP' readOnly /></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-right h-full ${darkMode ? 'bg-black text-white' : ''}`} type='number' name='stoiip' id='stoiip' value={isValid ? stoiip : ''} readOnly /></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-right h-full ${darkMode ? 'bg-black text-white' : ''}`} type='number' name='ciip' id='ciip' value={isValid ? ciip : ''} readOnly  /></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-xs text-center h-full ${darkMode ? 'bg-black text-white' : ''}`} type='text' name='hciipUnitOilAndCond' id='hciipUnitOilAndCond' value={liquidsUnit} readOnly  /></div>

        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border font-bold text-right text-sm h-full ${darkMode ? 'bg-black text-white' : ''}`} type='text' name='rf' id='rf' placeholder='Enter RF->' readOnly /></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-right text-sm placeholder-red-400 h-full ${darkMode ? 'bg-black text-white' : ''}`} type='number' name='rfo' id='rfo' placeholder='<RF-oil>' value={rfo}  onChange={(e) => handleRfoChange(e)}/></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-right text-sm placeholder-red-400 h-full ${darkMode ? 'bg-black text-white' : ''}`} type='number' name='rfcond' id='rfcond' placeholder='<RF-cond>' value={rfcond}  onChange={(e) => handleRfcondChange(e)}/></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-xs text-center h-full ${darkMode ? 'bg-black text-white' : ''}`} type='text' name='rfUnitOilAndCondensate' id='rfUnitOilAndCondensate' value={rfUnit} readOnly  /></div>

        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border font-bold text-right h-full ${darkMode ? 'bg-black text-white' : ''} `} type='text' name='ur' id='ur' placeholder='UR' readOnly /></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-right h-full ${darkMode ? 'bg-black text-white' : ''}`} type='number' name='uro' id='uro' value={isValid ? uro : ''} readOnly /></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-right h-full ${darkMode ? 'bg-black text-white' : ''}`} type='number' name='urcond' id='urcond' value={isValid ? urcond : ''} readOnly  /></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-xs text-center h-full ${darkMode ? 'bg-black text-white' : ''}`} type='text' name='urUnitOilAndCond' id='urUnitOilAndCond' value={liquidsUnit} readOnly  /></div>
    </div>

    <p className={`text-blue-600 text-xs mt-1 b-0 font-bold self-start ${darkMode ? 'text-blue-400' : ''}`}>Solution Gas and Free Gas</p>
    <div className='grid grid-rows-4 grid-cols-4 gap-0.5 bg-slate-200 border border-2 border-solid border-green-100'>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-center h-full ${darkMode ? 'bg-black text-white' : ''}`} type='text' name='headings' id='headings' readOnly/></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-center font-bold h-full ${darkMode ? 'bg-black text-white' : ''}`} type='text' name='solGas' id='volSolGas' placeholder='Soln Gas' readOnly /></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-center font-bold h-full ${darkMode ? 'bg-black text-white' : ''}`} type='text' name='capGas' id='volCapGas' placeholder='Free Gas' readOnly /></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-center font-bold h-full ${darkMode ? 'bg-black text-white' : ''}`} type='text' name='remSolGasAndFreeGas' id='remSolGasAndFreeGas' placeholder='Unit' readOnly /></div>

        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border font-bold text-right h-full ${darkMode ? 'bg-black text-white' : ''}`} type='text' name='HCIIP' id='hciip' placeholder='HCIIP' readOnly /></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-right h-full ${darkMode ? 'bg-black text-white' : ''}`} type='number' name='sgiip' id='sgiip' value={isValid ? sgiip : ''} readOnly  /></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-right h-full ${darkMode ? 'bg-black text-white' : ''}`} type='number' name='fgiip' id='fgiip' value={isValid ? fgiip : ''} readOnly  /></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-xs text-center h-full ${darkMode ? 'bg-black text-white' : ''}`} type='text' name='hciipSolGasAndFreeGas' id='hciipSolGasAndFreeGas' value={gasUnit} readOnly  /></div>

        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border font-bold text-right text-sm h-full ${darkMode ? 'bg-black text-white' : ''}`} type='text' name='rf' id='rf' placeholder='Enter RF->' readOnly /></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-right text-sm placeholder-green-400 h-full ${darkMode ? 'bg-black text-white' : ''}`} type='number' name='rfsg' id='rfsg' placeholder='<RF-sg>' value={rfsg} onChange={(e) => handleRfsgChange(e)}/></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-right text-sm placeholder-green-400 h-full ${darkMode ? 'bg-black text-white' : ''}`} type='number' name='rffg' id='rffg' placeholder='<RF-fg>' value={rffg}  onChange={(e) => handleRffgChange(e)}/></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-xs text-center h-full ${darkMode ? 'bg-black text-white' : ''}`} type='text' name='tfUnitGas' id='rfUnitGas' value={rfUnit} readOnly  /></div>

        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border font-bold text-right h-full ${darkMode ? 'bg-black text-white' : ''}`} type='text' name='ur' id='ur' placeholder='UR' readOnly /></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-right h-full ${darkMode ? 'bg-black text-white' : ''}`} type='number' name='ursg' id='ursg' value={isValid ? ursg : ''} readOnly  /></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-right h-full ${darkMode ? 'bg-black text-white' : ''}`} type='number' name='urfg' id='urfg' value={isValid ? urfg : ''} readOnly  /></div>
        <div> <input className={`border border-1 border-dotted-gray-400 w-full m-0 box-border text-xs text-center h-full ${darkMode ? 'bg-black text-white' : ''}`} type='text' name='urUnitGas' id='urUnitGas' value={gasUnit} readOnly  /></div>
    </div>
    </div>
  )
}

export default Volumes