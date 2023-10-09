import ResModel from "@models/reservoir";
import { connectToDB } from "@utils/database";
import url from 'url';

export const DELETE = async (req) => {

    console.log('delete route reached');
    // get resCode from request
    let queryParams;
    let resCode;
    let deleteStatus;
    try {
        const queryParams = url.parse(req.url, true).query;  // To read query params
        resCode = queryParams.resCode;

        // open the database
        await connectToDB();

        console.log('resCode: ', resCode);
        const deleteStatus = await ResModel.deleteOne({ resCode: resCode });
        console.log('delete status:', deleteStatus);
        // console.log('delete status?');
        return new Response(JSON.stringify({ data: deleteStatus }), { status: 200 });

    } catch (err) {
        console.log('Error deleting data from the database.', err);
        return new Response(JSON.stringify({ Error: 'Cannot delete record' }), { status: 500 });
    }
} 