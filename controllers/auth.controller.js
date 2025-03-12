import mongoose from "mongoose";
import bcrypt  from "bcryptjs";
import User from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";

 //what is req body =  it's an object containing data from the client (POST request     )
 export const signUp = async(req,res,next)=>{
    // implement sign up logic here
    const session =await mongoose.startSession();
    session.startTransaction();
// logic to create a new user 
    try{

        const {name,email,password}=req.body;

        const existingUSer =await User.findOne({email});


        if(existingUSer){
            const error = new Error('User already exists');
            error.statusCode=409;
            throw error;
        }

        const salt= await bcrypt.genSalt(10); // bcrypt.gensalt() it's method  typically  number is 10 
        const hashedPassword= await bcrypt.hash(password,salt);

        const newUsers= await User.create([{name,email,password:hashedPassword}],{session});

        const token= jwt.sign({userId:newUsers[0]._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});


        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success:true,
            message:'User Created successfully ',
            data:{
                token,
                user:newUsers[0]
            }
        })

        


    }catch(error){
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
 }


 export const signIn = async(req,res,next)=>{
    // implement sign up logic here


    try{
        const {email,password}=req.body;

        const user = await User.findOne({email});

        if(!User){
            const error=new Error('user not  found ');
            error.statuscode=404;
            throw  error;
        }
        const isPasswordValid= await bcrypt.compare(password,user.password);

        if(!isPasswordValid){
            const error=new Error('Invalid password');
            error.statusCode=401;
            throw error;

        }
        
        const token=jwt.sign({userId:user._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});

        res.status(200).json({
            success:true,
            message:"User signed in Successfully ",
            data:{
                token,
                user,

            }
        });

    }catch(error){
        next(error);
    }

 }
 

export const signOut = async(req,res,next)=>{
    // implement sign up logic here

 }