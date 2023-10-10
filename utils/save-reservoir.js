// import { useContext } from 'react';
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/router';

const saveReservoir = async (state, session) => {
    // e.preventDefault();
    // only if user logged in:
    if (!session?.user) {
        alert('Login required');
        return -1;
    } else if (!state?.resCode) {
        // blank screen
        alert('Specify the reservoir. Field, layer and block are required.');
        return -1;
    }

    const reservoirDocument = {
        user: session?.user.email, ...state,
    }
    reservoirDocument.field = reservoirDocument.field.trim();
    reservoirDocument.layer = reservoirDocument.layer.trim();
    reservoirDocument.block = reservoirDocument.block.trim();

    // console.log('Trimmed doc:', reservoirDocument );
    // post to database:
    const url = '/api/save';
    // console.log('post data:', JSON.stringify(reservoirDocument));
    try {
        const response = await fetch(
            url,
            {
                method: 'POST',
                body: JSON.stringify(reservoirDocument),
            },
        );
        console.log('Save Status:', response.statusText);
    } catch (err) {
        console.log('Error: save failed in saveReservoir module');
        // console.log('Error: save failed in saveReservoir module', err);
        return -1;
    }
}

export default saveReservoir;