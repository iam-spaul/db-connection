
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export const dbConnect= async ()=>{

    try {
      const responseDb= await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
      console.log("db connected !! host:" ,responseDb.connection.host);
    } catch (error) {
       console.log("MongoDb connection has some error:",error);
       process.exit(1) 
    }
}