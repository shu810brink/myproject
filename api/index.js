// const express = require('express');
import express from "express"
const app = express();
import dotenv from "dotenv"
import mongoose  from "mongoose";
import authRoute from './routes/auth.js';
import dashboardRoute from './routes/dashboard.js';
import userRoute from './routes/users.js';
import cookieparser from 'cookie-parser'
import ejs from 'ejs'
import bodyParser from 'body-parser'

import path  from "path"





app.set('view engine', 'ejs')
app.set('views',path.join('views'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static( "views"))


dotenv.config()

//initial connection------
const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log(`connected to mongodb..`)
    }catch (error){
        throw error
    }

}
mongoose.connection.on('disconnected',()=>{
    console.log(`mongodb disconnected...`)
})
mongoose.connection.on('connected',()=>{
    console.log(`mongodb connected...`)
});
// middlewares-----
app.use((err,req,res,next)=>{
    const errstatus = err.status || 500
    const errmessage = err.message || "Something went wrong !!"
    return res.status(errstatus).json({
        success:false,
        status:errstatus,
        message:errmessage
    })
});

app.use(cookieparser())
app.use(express.json())


app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
app.use('/api/dashboard',dashboardRoute)






app.listen(8801, ()=>{
    connect()
    console.log(`connected to backend!!!`)
})

