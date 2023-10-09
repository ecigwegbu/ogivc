'use client'
import { useState } from 'react';
export default function getReservoirState() {
    // declare ALL reservoir state variables
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

    const reservoirState = { // reservoir data
        reservoirState: { field, layer, block, resCode, reservoirType, mFactor, boi, rsi, rhoo, ei, cgr, rhog, poro, ntgo, porg, ntgg, sato, swco, satg, swcg, grvOil, grvCapGas, stoiip, sgiip, fgiip, ciip, rfo, rfsg, rffg, rfcond, uro, ursg, urfg, urcond },
        reservoirStateSetter: { setField, setLayer, setBlock, setResCode, setReservoirType, setMFactor, setBoi, setRsi, setRhoo, setEi, setCgr, setRhog, setPoro, setNtgo, setPorg, setNtgg, setSato, setSwco, setSatg, setSwcg, setGrvOil, setGrvCapGas, setStoiip, setSgiip, setFgiip, setCiip, setRfo, setRfsg, setRffg, setRfcond, setUro, setUrsg, setUrfg, setUrcond },
    }
    return reservoirState;
}