import ResModel from "@models/reservoir";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
    // console.log('Server reached');
    const documentObject = await req.json();
    const { user, field, layer, block, resCode } = documentObject;

    try {
        await connectToDB();

        // find record
        const record = await ResModel.findOne({ user: user, resCode: resCode });
        if (record) {
            // update record
            const updateStatus = await ResModel.updateOne({ user: user, resCode: resCode }, { ...documentObject });
            console.log('Reservoir updated: ', updateStatus);
            return new Response(JSON.stringify(updateStatus), { status: 201 });
        } else if (user && field && layer && block && resCode && resCode !== '--') {
            // create new record
            console.log('Creating new record...');
            const reservoirDocument = new ResModel(documentObject);
            await reservoirDocument.save();
            console.log('Done:');
            try {
                console.log('Reservoir saved: ', reservoirDocument._id.toString());
            } catch (err) {
                console.log('error - id issue');
            }
            return new Response(JSON.stringify(reservoirDocument), { status: 201 });
        } else {
            console.log('Field, layer and block are required');
            return new Response(JSON.stringify({ Error: 'Field, layer and block are required' }), { status: 400 });
        }
    } catch (err) {
        return new Response(JSON.stringify({ Error: 'Cannot save reservoir' }), { status: 500 });
    }
}