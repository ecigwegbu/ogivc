import ResModel from "@models/reservoir";
import { connectToDB } from "@utils/database";
import url from 'url';

export const GET = async (req) => {

    // get resCode from request
    let queryParams;
    let resCode;
    let record;
    try {
        const queryParams = url.parse(req.url, true).query;  // To read query params
        resCode = queryParams.resCode;

        // open the database
        await connectToDB();

        record = await ResModel.findOne({ resCode: resCode });

        return new Response(JSON.stringify({ data: record }), { status: 200 });
    } catch (err) {
        console.log('Error loading data from the database.', err);
        return new Response(JSON.stringify({ Error: 'Cannot load data' }), { status: 500 });
    }
} 
