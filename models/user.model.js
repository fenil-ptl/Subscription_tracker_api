import mongoose from "mongoose";
import subscriptionRouter from "../routes/subscription.routes.js";
import subscriptionSchema from "./subscription.model.js";

const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,'User name is required'],
        trim:true,
        minLength:2,
        maxLength:50,
    },
    email:{
        type:String,
        required: [ true,'user Email is required '],
        unique:true,
        trim:true,
        lowecase:true,  
        minLength:5,
        maxLength:255,
        match:[/\S+@\S+\.\S+/,'please fill a valid email address '], ///\S+@\S+\.\S+/ =  meaning of this is to start with the string followed by an @ sign  and mmore string sign for the domain name   followed by dot [.] and some more character for the domain name extension  example : fabperry04@gmail.com

    },
    password:{
        type:String,
        required:[true,'User password is required '],
        minLength:6
    }

}, {timestamps:true});

const User=mongoose.model('user',userSchema);


export default User;