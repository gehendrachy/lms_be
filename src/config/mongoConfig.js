import mongoose from "mongoose"


export const connectMongo = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(process.env.MONGO_URL);
        console.log("mongoDB connected");  
    } catch (error) {
        console.log(error.message)
    }
}