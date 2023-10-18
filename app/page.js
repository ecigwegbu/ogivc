'use client'
import { useState } from 'react';
import Reservoir from '@components/Reservoir';
import ReservoirType from '@components/ReservoirType';
import MenuBar from '@components/MenuBar';
import OilPVT from '@components/OilPVT';
import GasPVT from '@components/GasPVT';
import RockProperties from '@components/RockProperties';
import Saturations from '@components/Saturations';
import GrossRockVolumes from '@components/GrossRockVolumes';
import Volumes from '@components/Volumes';
import Footer from '@components/Footer';
import getReservoirState from '@utils/reservoir-state';

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
      setStoiip((7.7584 * grvOil * ntgo / 100 * poro / 100 * sato / 100 / boi).toFixed(1)); // MMstb
    } catch (error) {
      console.log('Error: could not calculate STOIIP');
    }
  }
  const calcSgiip = () => {
    try {
      setSgiip((stoiip * rsi / 1000).toFixed(1)); // bscf
    } catch (error) {
      console.log('Error: could not calculate SGIIP');
    }
  }
  const calcFgiip = () => {
    try {
      setFgiip((0.043560 * grvCapGas * ntgg / 100 * porg / 100 * satg / 100 * ei).toFixed(1));  // Bscf
    } catch (error) {
      console.log('Error: could not calculate FGIIP');
    }
  }
  const calcCiip = () => {
    try {
      setCiip((fgiip * cgr / 1000).toFixed(1)); // MMbbl
    } catch (error) {
      console.log('Error: could not calculate CIIP');
    }
  }
  const calcUro = () => {
    try {
      setUro((stoiip * rfo / 100).toFixed(1));
    } catch (error) {
      console.log('Error: could not calculate UR-oil');
    }
  }
  const calcUrsg = () => {
    try {
      setUrsg((sgiip * rfsg / 100).toFixed(1));
    } catch (error) {
      console.log('Error: could not calculate UR-sg');
    }
  }
  const calcUrfg = () => {
    try {
      setUrfg((fgiip * rffg / 100).toFixed(1));
    } catch (error) {
      console.log('Error: could not calculate UR-fg');
    }
  }
  const calcUrcond = () => {
    try {
      setUrcond((ciip * rfcond / 100).toFixed(1));
    } catch (error) {
      console.log('Error: could not calculate UR-cond');
    }
  }
  // const resdata = { // reservoir data
  //  field, layer, block, resCode, reservoirType, mFactor, boi, rsi, rhoo, ei, cgr, rhog, poro, ntgo, porg, ntgg, sato, swco, satg, swcg, grvOil, grvCapGas, stoiip, sgiip, fgiip, ciip, rfo, rfsg, rffg, rfcond, uro, ursg, urfg, urcond,
  // }
  // const setResdata = { // state setters for reservoir data
  // field, layer, block, resCode, reservoirType, mFactor, boi, rsi, rhoo, ei, cgr, rhog, poro, ntgo, porg, ntgg, sato, swco, satg, swcg, grvOil, grvCapGas, stoiip, sgiip, fgiip, ciip, rfo, rfsg, rffg, rfcond, uro, ursg, urfg, urcond,
  // setField, setLayer, setBlock, setResCode, setReservoirType, setMFactor, setBoi, setRsi, setRhoo, setEi, setCgr, setRhog, setPoro, setNtgo, setPorg, setNtgg, setSato, setSwco, setSatg, setSwcg, setGrvOil, setGrvCapGas, setStoiip, setSgiip, setFgiip, setCiip, setRfo, setRfsg, setRffg, setRfcond, setUro, setUrsg, setUrfg, setUrcond,
  // }

  // const reservoirState = getReservoirState();
  // console.log('reservoir data:keys', Object.keys(reservoirState));
  // console.log('reservoir data:values', Object.values(reservoirState));
  const reservoirState = { // reservoir data
    state: { field, layer, block, resCode, reservoirType, mFactor, boi, rsi, rhoo, ei, cgr, rhog, poro, ntgo, porg, ntgg, sato, swco, satg, swcg, grvOil, grvCapGas, stoiip, sgiip, fgiip, ciip, rfo, rfsg, rffg, rfcond, uro, ursg, urfg, urcond },
    stateSetter: { setField, setLayer, setBlock, setResCode, setReservoirType, setMFactor, setBoi, setRsi, setRhoo, setEi, setCgr, setRhog, setPoro, setNtgo, setPorg, setNtgg, setSato, setSwco, setSatg, setSwcg, setGrvOil, setGrvCapGas, setStoiip, setSgiip, setFgiip, setCiip, setRfo, setRfsg, setRffg, setRfcond, setUro, setUrsg, setUrfg, setUrcond },
  }
  return (
    <div className='flex flex-col items-center justify-start max-w-[670px]'>
      <MenuBar reservoirState={reservoirState} />
      <Reservoir reservoirState={reservoirState} onResChange={handleResChange} />
      <ReservoirType reservoirState={reservoirState} onReservoirTypeChange={handleReservoirTypeChange} />
      <div className="flex flex-wrap justify-center gap-2 sm:w-full max-w-2xl">
        <OilPVT reservoirState={reservoirState} onOilPvtChange={handleOilPvtChange} />
        <GasPVT reservoirState={reservoirState} onGasPvtChange={handleGasPvtChange} />
        <RockProperties reservoirState={reservoirState} onRockPropertiesChange={handleRockPropertiesChange} />
        <Saturations reservoirState={reservoirState} onSaturationsChange={handleSaturationsChange} />
        <GrossRockVolumes reservoirState={reservoirState} onGrossRockVolumesChange={handleGrossRockVolumesChange} />
        <Volumes reservoirState={reservoirState} onVolumesChange={handleVolumesChange} />
        <Footer />
      </div>
    </div>
  );
}

// <TypeBar reservoirType={reservoirType} setReservoirType={setReservoirType} mFactor={mFactor} setMFactor={setMFactor} onTypeBarChange={handleTypeBarChange} />
export default Home;
