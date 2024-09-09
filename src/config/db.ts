import mongoose, { ConnectOptions } from "mongoose";

const connectDB = async()=>{
    try{
        // const conn = await mongoose.connect(process.env.MONGO_URL);
        const conn = await mongoose.connect(process.env.MONGO_URL as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
        console.log(`connected to mongodb: ${conn.connection.host}`);
    }catch(err){
        console.log("error in mongodb", err);
    }
};

export default connectDB;