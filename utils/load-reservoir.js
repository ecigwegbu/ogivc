const loadReservoir = async (resCode, stateSetter, session) => {
    // e.preventDefault();

    // only if user logged in:
    if (!session?.user) {
        alert('Login required');
        return -1;
    } else if (!resCode) {
        // blank screen
        alert('Specify the reservoir. Field, layer and block are required.');
        return -1;
    }

    // construct a url that includes the reservoir code as a query parameter
    const url = new URL('/api/load', window.location.origin);
    url.search = new URLSearchParams({
        resCode: resCode,
    }).toString(); // url is an object but url.search is a string

    // request from to database:
    console.log('loader url:', url.toString());

    let reservoirData;
    try {
        const response = await fetch(url.toString(), { method: 'GET' }); // url is an object
        // const response = await fetch('/api/load?resCode=NEMC-D9-X', { method: 'GET' }); // url is an object
        const responseJson = await response.json();
        console.log(responseJson);
        reservoirData = responseJson.data;

        // console.log('Load Status:', JSON.stringify(reservoirData));

    } catch (err) {
        console.log('Error: load failed in loadReservoir', err);
    }

    // construct data loaders:
    const { setField, setLayer, setBlock, setReservoirType, setMFactor, setBoi, setRsi, setRhoo, setEi, setCgr, setRhog, setPoro, setNtgo, setPorg, setNtgg, setSato, setSwco, setSatg, setSwcg, setGrvOil, setGrvCapGas, setRfo, setRfsg, setRffg, setRfcond, } = stateSetter;
    const dataSetter = { setField, setLayer, setBlock, setReservoirType, setMFactor, setBoi, setRsi, setRhoo, setEi, setCgr, setRhog, setPoro, setNtgo, setPorg, setNtgg, setSato, setSwco, setSatg, setSwcg, setGrvOil, setGrvCapGas, setRfo, setRfsg, setRffg, setRfcond, };
    const { field, layer, block, reservoirType, mFactor, boi, rsi, rhoo, ei, cgr, rhog, poro, ntgo, porg, ntgg, sato, swco, satg, swcg, grvOil, grvCapGas, rfo, rfsg, rffg, rfcond, } = reservoirData;
    const stateData = { field, layer, block, reservoirType, mFactor, boi, rsi, rhoo, ei, cgr, rhog, poro, ntgo, porg, ntgg, sato, swco, satg, swcg, grvOil, grvCapGas, rfo, rfsg, rffg, rfcond, }

    for (const [stateKey, stateValue] of Object.entries(stateData)) {

        // construct the setter function name
        const setterName = `set${stateKey.charAt(0).toUpperCase()}${stateKey.slice(1)}`;
        // console.log('setterFn:', setterName);

        // Get the setter function from the setters object
        const setterFn = dataSetter[setterName];

        // console.log('setterFn:', setterName);
        if (typeof setterFn !== 'function') {
            console.log('setterFn:', setterName);
            console.log('Error: invalid state setter. Aborting load.');
            return -1;
        }
        setterFn(stateValue);
    }

    console.log(`Successfully loaded ${field.trim()}-${layer.trim()}-${block.trim()}`);
}

export default loadReservoir;