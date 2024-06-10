const express=require('express');
const app=express();
import connectDB from './config/db';



app.use(express.json());


app.use((req,res,next)=>{
    console.log("HTTP Method"+req.method+",URL- "+req.url);
next();
})
