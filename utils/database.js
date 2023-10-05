import mongoose from 'mongoose';

let dbConnected = false; // DB connection status: boolean

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (dbConnected) {
        console.log('Database is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "ogivc",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        dbConnected = true;

        console.log('Database connected')
    } catch (error) {
        console.log('Error: Cannot connect to database');
    }
}