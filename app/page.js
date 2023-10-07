'use client'
import { useState } from 'react';
import Reservoir from '@components/Reservoir';
// import TypeBar from '@components/TypeBar';
import ReservoirType from '@components/ReservoirType';
import MenuBar from '@components/MenuBar';
import OilPVT from '@components/OilPVT';
import GasPVT from '@components/GasPVT';
import RockProperties from '@components/RockProperties';
import Saturations from '@components/Saturations';
import GrossRockVolumes from '@components/GrossRockVolumes';
import Volumes from '@components/Volumes';
import Footer from '@components/Footer';
// grvOil, grvCapGas, stoiip, sgiip, fgiip, ciip, rfo, rfsg, rffg, rfcond, uro, ursg, urfg, urcond 
function Home() {
  const [field, setField] = useState('');
  const [layer, setLayer] = useState('');
  const [block, setBlock] = useState('');
  const [resCode, setResCode] = useState('');
  const [reservoirType, setReservoirType] = useState('both');
  const [mFactor, setMFactor] = useState('');
  const [boi, setBoi] = useState(1);
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
  const handleResChange = (e) => {
    //
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
  const handleGrossRockVolumesChange = (e) => {
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
      setSgiip((stoiip * rsi).toFixed(1)); // bscf
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
      setCiip((fgiip * cgr).toFixed(1)); // bscf
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
  const resdata = { // reservoir data
    field, layer, block, resCode, reservoirType, mFactor, boi, rsi, rhoo, ei, cgr, rhog, poro, ntgo, porg, ntgg, sato, swco, satg, swcg, grvOil, grvCapGas, stoiip, sgiip, fgiip, ciip, rfo, rfsg, rffg, rfcond, uro, ursg, urfg, urcond,
  }
  const setResdata = { // state setters for reservoir data
    // field, layer, block, resCode, reservoirType, mFactor, boi, rsi, rhoo, ei, cgr, rhog, poro, ntgo, porg, ntgg, sato, swco, satg, swcg, grvOil, grvCapGas, stoiip, sgiip, fgiip, ciip, rfo, rfsg, rffg, rfcond, uro, ursg, urfg, urcond,
    setField, setLayer, setBlock, setResCode, setReservoirType, setMFactor, setBoi, setRsi, setRhoo, setEi, setCgr, setRhog, setPoro, setNtgo, setPorg, setNtgg, setSato, setSwco, setSatg, setSwcg, setGrvOil, setGrvCapGas, setStoiip, setSgiip, setFgiip, setCiip, setRfo, setRfsg, setRffg, setRfcond, setUro, setUrsg, setUrfg, setUrcond,
  }

  return (
    <div className='flex flex-col items-center justify-start max-w-[670px]'>
      <MenuBar setResdata={setResdata} />
      <Reservoir setResdata={setResdata} resdata={resdata} field={field} layer={layer} block={block} setField={setField} setLayer={setLayer} setBlock={setBlock} setResCode={setResCode} resCode={resCode} onResChange={handleResChange} />
      <ReservoirType resdata={resdata} reservoirType={reservoirType} setReservoirType={setReservoirType} mFactor={mFactor} setMFactor={setMFactor} onReservoirTypeChange={handleReservoirTypeChange} />
      <div className="flex flex-wrap justify-center gap-2 sm:w-full max-w-2xl">
        <OilPVT resdata={resdata} boi={boi} rsi={rsi} rhoo={rhoo} setBoi={setBoi} setRsi={setRsi} setRhoo={setRhoo} onOilPvtChange={handleOilPvtChange} reservoirType={reservoirType} />
        <GasPVT resdata={resdata} ei={ei} cgr={cgr} rhog={rhog} setEi={setEi} setCgr={setCgr} setRhog={setRhog} onGasPvtChange={handleGasPvtChange} reservoirType={reservoirType} />
        <RockProperties resdata={resdata} poro={poro} ntgo={ntgo} porg={porg} ntgg={ntgg} setPoro={setPoro} setNtgo={setNtgo} setPorg={setPorg} setNtgg={setNtgg} onRockPropertiesChange={handleRockPropertiesChange} />
        <Saturations resdata={resdata} sato={sato} swco={swco} satg={satg} swcg={swcg} setSato={setSato} setSwco={setSwco} setSatg={setSatg} setSwcg={setSwcg} onSaturationsChange={handleSaturationsChange} />
        <GrossRockVolumes resdata={resdata} grvOil={grvOil} setGrvOil={setGrvOil} grvCapGas={grvCapGas} setGrvCapGas={setGrvCapGas} onGrossRockVolumesChange={handleGrossRockVolumesChange} />
        <Volumes resdata={resdata} grvOil={grvOil} grvCapGas={grvCapGas} stoiip={stoiip} sgiip={sgiip} fgiip={fgiip} ciip={ciip} rfo={rfo} rfsg={rfsg} rffg={rffg} rfcond={rfcond} uro={uro} ursg={ursg} urfg={urfg} urcond={urcond} setGrvOil={setGrvOil} setGrvCapGas={setGrvCapGas} setRfo={setRfo} setRfsg={setRfsg} setRffg={setRffg} setRfcond={setRfcond} onVolumesChange={handleVolumesChange} />
        <Footer />
      </div>
    </div>
  );
}

// <TypeBar reservoirType={reservoirType} setReservoirType={setReservoirType} mFactor={mFactor} setMFactor={setMFactor} onTypeBarChange={handleTypeBarChange} />
export default Home;
