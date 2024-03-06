import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// async is bcz DB is in another contenet
const connectDB = async() => {
    try {
        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB connection FAILED " + error);
        process.exit(1)
        
    }
}

export default connectDB;