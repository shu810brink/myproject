import User from "../models/User.js"
import bcrypt from 'bcryptjs';
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

// export const getLogin = (req,res,next)=>{
//     try{
//         res.render('login')
//     }catch(err){
//         next(err)
//     }
// }
// export const getRegister = (req,res,next)=>{
//     try{
//         res.send('register')
//     }catch(err){
//         next(err)
//     }
// }
export const register = async (req,res,next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password ,salt);
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        })
        await newUser.save()
        res.status(200).send('user created successfully')

    }catch(err){
        next(err)
    }
}
export const login = async (req,res,next)=>{
    try{
        const user = await User.findOne({username:req.body.username})

        if (!user) return next(createError(404, "User Not Found"))

        const checkpswrd  = await bcrypt.compare(req.body.password,user.password)

        if (!checkpswrd) return next(createError(400,"Wrong Password !! or userName"))

        const token = jwt.sign({id:user._id,password:user.password},process.env.JWT);

        // const {password, isAdmin, ...otherDetails} = user
        res.cookie("access_token",token,{
            httpOnly:true,
        }).status(200)
        .json(user)

        // res.status(200).json(...otherDetails)

    }catch(err){

        next(err)
    }
}


export const checklogin = (req,res,next)=>{
    res.send("you are logged it")

}
