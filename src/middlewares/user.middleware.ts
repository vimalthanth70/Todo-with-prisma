import { ZodInvalidTypeIssue, z } from "zod";
import { signUpSchema } from "../utils";
import { NextFunction,Request,Response } from "express";


const signUpMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    console.log("Running middleware")
    try{
        signUpSchema.parse(req.body)
        next()
    }catch(err:any){
        const errors:any = {}
        err.issues.map((ele:any)=>{
            errors[ele.path[0]] = ele.message
        })
        console.log(errors)
        res.status(400).json({
            errors:errors
        })
    }
}

export {signUpMiddleware}