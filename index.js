import Express  from "express";
import { dbConnect } from "./db/db.js";
import dotenv from "dotenv"
dotenv.config({path:'./.env'})
const app=Express()
dbConnect()
app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(process.env.PORT,()=>{
    console.log(`${process.env.PORT}`);
})