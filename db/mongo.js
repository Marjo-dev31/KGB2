import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {dbName: "kgbadmin"})
        console.log(`MongoDb is connected! on ${MONGODB_URI}`)
    } catch(error) {
        console.log(error);
    }
};

export default connectDB;