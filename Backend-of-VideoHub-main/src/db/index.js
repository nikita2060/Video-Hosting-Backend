import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";
const uri="mongodb+srv://nikita:videotube@nikitavideotube.mmfubgz.mongodb.net/Videotube?retryWrites=true&w=majority"
const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(uri)
        console.log(`DB connected : ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.error("MongoDB Connection Failed:",error)
        process.exit(1)
    }
}
export default connectDB;