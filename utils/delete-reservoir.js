const deleteReservoir = async (resCode, session) => {
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
    const url = new URL('/api/delete', window.location.origin);
    url.search = new URLSearchParams({
        resCode: resCode,
    }).toString(); // url is an object but url.search is a string

    // console.log('loader url:', url.toString());

    // delete from database
    try {
        const response = await fetch(url.toString(), { method: 'DELETE' }); // url is an object
        // const response = await fetch('/api/delete?resCode=NEMC-D9-D', { method: 'DELETE' }); // url is an object
        const deleteStatus = await response.json();

        console.log('Delete Status:', JSON.stringify(deleteStatus));

    } catch (err) {
        console.log('Error: delete failed in deleteReservoir module', err);
        return -1;
    }
}

export default deleteReservoir;