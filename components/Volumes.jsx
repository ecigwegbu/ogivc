'use client'

import { useEffect } from 'react';


const Volumes = ({ grvOil, grvCapGas, stoiip, sgiip, fgiip, ciip, rfo, rfsg, rffg, rfcond, uro, ursg, urfg, urcond, setGrvOil, setGrvCapGas, setRfo, setRfsg, setRffg, setRfcond, onVolumesChange  }) => {
// const Volumes = ({ grvOil, grvCapGas, stoiip, sgiip, fgiip, ciip, rfo, rfsg, rffg, rfcond, uro, ursg, urfg, urcond, setGrvOil, setGrvGas, setRfo, setRfsg, setRffg, setRfcond, onVolumesChange  }) => {

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
    }, [grvOil, grvCapGas, rfo, rfsg, rffg, rfcond, onVolumesChange]);

  return (
    <>
    <h2 className='text-blue-600 mt-0 mb-0 font-extrabold'>Volumes</h2>
    <div className='grid grid-rows-5 grid-cols-5 gap-0.5 bg-slate-200 text-[6pt] text-red-800 border border-2 border-solid border-red-100 font-bold'>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border text-center' type='text' name='headings' id='headings' readOnly/></div>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border text-center font-bold' type='text' name='oil' id='volOil' placeholder='Oil [MMstb]' readOnly /></div>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border text-center font-bold' type='text' name='solGas' id='volSolGas' placeholder='Sol Gas [Bscf]' readOnly /></div>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border text-center font-bold' type='text' name='capGas' id='volCapGas' placeholder='Cap Gas [Bscf]' readOnly /></div>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border text-center font-bold' type='text' name='cond' id='volCond' placeholder='Cond. [MMstb]' readOnly /></div>

        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border font-bold' type='text' name='grv' id='grv' placeholder='GRV [Macft]' readOnly /></div>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border text-right' type='text' name='grvOil' id='grvOil' placeholder='GRV-oil' value={grvOil} onChange={(e) => handleGrvOilChange(e)}/></div>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border' type='text' name='grvSolGas' id='grvSolGas' disabled /></div>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border text-right' type='text' name='grvCapGas' id='grvCapGas' placeholder='GRV-gas' value={grvCapGas} onChange={(e) => handleGrvCapGasChange(e)}/></div>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border' type='text' name='grvCond' id='grvCond' disabled /></div>

        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border font-bold' type='text' name='HCIIP' id='hciip' placeholder='HCIIP' readOnly /></div>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border text-right' type='text' name='stoiip' id='stoiip' placeholder='STOIIP' value={stoiip} readOnly /></div>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border text-right' type='text' name='sgiip' id='sgiip' placeholder='SGIIP'  value={sgiip} readOnly  /></div>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border text-right' type='text' name='fgiip' id='fgiip' placeholder='FGIIP' value={fgiip} readOnly  /></div>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border text-right' type='text' name='ciip' id='ciip' placeholder='CIIP' value={ciip} readOnly  /></div>

        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border font-bold' type='text' name='rf' id='rf' placeholder='RF' readOnly /></div>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border text-right' type='text' name='rfo' id='rfo' placeholder='RFo' value={rfo}  onChange={(e) => handleRfoChange(e)}/></div>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border text-right' type='text' name='rfsg' id='rfsg' placeholder='RFsg' value={rfsg} onChange={(e) => handleRfsgChange(e)}/></div>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border text-right' type='text' name='rffg' id='rffg' placeholder='RFfg' value={rffg}  onChange={(e) => handleRffgChange(e)}/></div>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border text-right' type='text' name='rfcond' id='rfcond' placeholder='RFcond' value={rfcond}  onChange={(e) => handleRfcondChange(e)}/></div>

        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border font-bold' type='text' name='ur' id='ur' placeholder='UR' readOnly /></div>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border text-right' type='text' name='uro' id='uro' placeholder='URo' value={uro} readOnly /></div>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border text-right' type='text' name='ursg' id='ursg' placeholder='URsg' value={ursg} readOnly  /></div>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border text-right' type='text' name='urfg' id='urfg' placeholder='URfg' value={urfg} readOnly  /></div>
        <div> <input className='border border-1 border-dotted-gray-400 w-full m-0 box-border text-right' type='text' name='urcond' id='urcond' placeholder='URcond' value={urcond} readOnly  /></div>
    </div>
    </>
  )
}

export default Volumes