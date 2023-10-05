'use client'
import { useState } from 'react';
import Reservoir from '@components/Reservoir';
// import TypeBar from '@components/TypeBar';
import ReservoirType from '@components/ReservoirType';
import OilPVT from '@components/OilPVT';
import GasPVT from '@components/GasPVT';
import RockProperties from '@components/RockProperties';
import Saturations from '@components/Saturations';
import Volumes from '@components/Volumes';
// grvOil, grvCapGas, stoiip, sgiip, fgiip, ciip, rfo, rfsg, rffg, rfcond, uro, ursg, urfg, urcond 
function Home() {
  const [boi, setBoi] = useState('');
  const [rsi, setRsi] = useState('');
  const [rhoo, setRhoo] = useState('');
  const [ei, setEi] = useState('');
  const [cgr, setCgr] = useState('');
  const [rhog, setRhog] = useState('');
  const [poro, setPoro] = useState('');
  const [ntgo, setNtgo] = useState('');
  const [porg, setPorg] = useState('');
  const [ntgg, setNtgg] = useState('');
  const [sato, setSato] = useState('');
  const [swco, setSwco] = useState('');
  const [satg, setSatg] = useState('');
  const [swcg, setSwcg] = useState('');
  const [reservoirType, setReservoirType] = useState('');
  const [mFactor, setMFactor] = useState();
  const [field, setField] = useState('');
  const [layer, setLayer] = useState('');
  const [block, setBlock] = useState('');
  const [fullName, setFullName] = useState('');
  const [grvOil, setGrvOil] = useState('');
  const [grvCapGas, setGrvCapGas] = useState('');
  const [stoiip, setStoiip] = useState('');
  const [sgiip, setSgiip] = useState('');
  const [fgiip, setFgiip] = useState('');
  const [ciip, setCiip] = useState('');
  const [rfo, setRfo] = useState('');
  const [rfsg, setRfsg] = useState('');
  const [rffg, setRffg] = useState('');
  const [rfcond, setRfcond] = useState('');
  const [uro, setUro] = useState('');
  const [ursg, setUrsg] = useState('');
  const [urfg, setUrfg] = useState('');
  const [urcond, setUrcond] = useState('');
  // <Reservoir setField={setField} setLayer={seLaye} setBlock={setBlock} setFullName={setFullName} />
  const handleResChange = (e) => {
    // console.log('---->--->', e.target.id)
    // setFullName(`${field}-${layer}-${block}`);
    /*
    switch (e.target.id) {
      case 'field':
        setFullName(`${e.target.value}-${layer}-${block}`);
        break;
      case 'layer':
        setFullName(`${field}-${e.target.value}-${block}`);
        break;
      case 'block':
        setFullName(`${field}-${layer}-${e.target.value}`);
        break;
      default:
        console.log('Error: Invalid Id')
    }
    // Calculate and display volumes
    calcVolumes();
    */
  };

  const calcVolumes = () => {
    // Calculate and display volumes
    calcStoiip();
    calcSgiip();
    calcFgiip();
    calcCiip();
    calcUro();
    calcUrsg();
    calcUrfg();
    calcUrcond();
  }
  const handleOilPvtChange = (e) => {
    // Calculate and display volumes
    // console.log('Hello Oil pvt:', boi, rsi, rhoo);
    calcVolumes();
  }
  const handleGasPvtChange = (e) => {
    // Calculate and display volumes
    // console.log('Hello Gas pvt:', ei, cgr, rhog);
    calcVolumes();
  }
  const handleRockPropertiesChange = (e) => {
    // Calculate and display volumes
    // console.log('Hello Rock Props:', poro, ntgo, porg, ntgg);
    calcVolumes();
  }
  const handleSaturationsChange = (e) => {
    // Calculate and display volumes
    // console.log('Hello Sats:', sato, swco, satg, swcg);
    calcVolumes();
  }
  const handleVolumesChange = (e) => {
    // Calculate and display volumes
    // console.log('Hello Vols:', grvOil, grvCapGas, rfo, rfsg, rffg, rfcond);
    calcVolumes();
  }
  const handleReservoirTypeChange = (e) => {
    //
  }
  const calcStoiip = () => {
    try {
      // console.log('stooip params:', grvOil, poro, ntgo, boi);
      setStoiip((7.7584 * grvOil * ntgo * poro * sato / boi).toFixed(1)); // MMstb
    } catch (error) {
      console.log('Error: could not calculate STOIIP');
    }
  }
  const calcSgiip = () => {
    try {
      setSgiip((stoiip * rsi).toFixed(1));
    } catch (error) {
      console.log('Error: could not calculate SGIIP');
    }
  }
  const calcFgiip = () => {
    try {
      setFgiip((0.043560 * grvCapGas * ntgg * porg * satg * ei).toFixed(1));  // Bscf
    } catch (error) {
      console.log('Error: could not calculate FGIIP');
    }
  }
  const calcCiip = () => {
    try {
      setCiip((fgiip * cgr).toFixed(1));
    } catch (error) {
      console.log('Error: could not calculate CIIP');
    }
  }
  const calcUro = () => {
    try {
      setUro((stoiip * rfo).toFixed(1));
    } catch (error) {
      console.log('Error: could not calculate UR-oil');
    }
  }
  const calcUrsg = () => {
    try {
      setUrsg((sgiip * rfsg).toFixed(1));
    } catch (error) {
      console.log('Error: could not calculate UR-sg');
    }
  }
  const calcUrfg = () => {
    try {
      setUrfg((fgiip * rffg).toFixed(1));
    } catch (error) {
      console.log('Error: could not calculate UR-fg');
    }
  }
  const calcUrcond = () => {
    try {
      setUrcond((ciip * rfcond).toFixed(1));
    } catch (error) {
      console.log('Error: could not calculate UR-cond');
    }
  }
  return (
    <div className='flex flex-col items-center justify-start max-w-[670px]'>
      <ReservoirType reservoirType={reservoirType} setReservoirType={setReservoirType} mFactor={mFactor} setMFactor={setMFactor} onReservoirTypeChange={handleReservoirTypeChange} />
      <Reservoir field={field} layer={layer} block={block} setStoiip={setStoiip} setField={setField} setLayer={setLayer} setBlock={setBlock} setFullName={setFullName} fullName={fullName} onResChange={handleResChange} />
      <div className="flex flex-wrap justify-center gap-2 sm:w-full max-w-2xl">
        <OilPVT boi={boi} rsi={rsi} rhoo={rhoo} setBoi={setBoi} setRsi={setRsi} setRhoo={setRhoo} onOilPvtChange={handleOilPvtChange} />
        <GasPVT ei={ei} cgr={cgr} rhog={rhog} setEi={setEi} setCgr={setCgr} setRhog={setRhog} onGasPvtChange={handleGasPvtChange} />
        <RockProperties poro={poro} ntgo={ntgo} porg={porg} ntgg={ntgg} setPoro={setPoro} setNtgo={setNtgo} setPorg={setPorg} setNtgg={setNtgg} onRockPropertiesChange={handleRockPropertiesChange} />
        <Saturations sato={sato} swaco={swco} satg={satg} swcg={swcg} setSato={setSato} setSwco={setSwco} setSatg={setSatg} setSwcg={setSwcg} onSaturationsChange={handleSaturationsChange} />
        <Volumes grvOil={grvOil} grvCapGas={grvCapGas} stoiip={stoiip} sgiip={sgiip} fgiip={fgiip} ciip={ciip} rfo={rfo} rfsg={rfsg} rffg={rffg} rfcond={rfcond} uro={uro} ursg={ursg} urfg={urfg} urcond={urcond} setGrvOil={setGrvOil} setGrvCapGas={setGrvCapGas} setRfo={setRfo} setRfsg={setRfsg} setRffg={setRffg} setRfcond={setRfcond} onVolumesChange={handleVolumesChange} />
      </div>
    </div>
  );
}

// <TypeBar reservoirType={reservoirType} setReservoirType={setReservoirType} mFactor={mFactor} setMFactor={setMFactor} onTypeBarChange={handleTypeBarChange} />
export default Home;
