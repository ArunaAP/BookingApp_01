import User from "../models/User.js"
import bcrypt from  "bcryptjs"
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken"

export const register  = async(req,res,next) => {   
    try {
        //To Hash Password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password ,  salt);

        const newUser = new User({

            ...req.body,
            password: hash,

        });

        await newUser.save()
        res.status(200).send("User Has Been Created.")
        
        
    } catch (err) {
        next(err)
    }

}

//login function

export const login  = async(req,res,next) => {   
    try {
        const user = await User.findOne({username: req.body.username})
        if(!user) return next(createError(404 , "User Not Found !"))

        const isPasswordCorrect =   await bcrypt.compare(req.body.password , user.password);
        if(!isPasswordCorrect) return next(createError(400 , "Wrong  Password or User Name !"));

        const token = jwt.sign({id: user._id , isadmin: user.isadmin} , process.env.JWT)

        const {password , isadmin , ...otherDetails}  = user._doc
        res.cookie("access_token" , token, {
            httpOnly: true,
        }).status(200).json({ details:  {...otherDetails} , isadmin});

    } catch (err) {
        next(err)
    }

}