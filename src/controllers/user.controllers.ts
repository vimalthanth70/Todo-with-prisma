import { Request,Response } from "express"
import { PrismaClient } from "@prisma/client"

const client = new PrismaClient()

const signUpController = async(req:Request,res:Response)=>{
    try{
        const response = await client.user.create({
            data:{
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                password:req.body.password
            }
        })
        res.status(201).json({
            data:response
        })
    }catch(err:any){
        if(err?.meta?.target.includes("email")){
            res.status(400).json({
                error:{
                    email:"email is already in use."
                }
            })
            return

        }
        res.status(400).json({
            error:"Bad Request"
        })
        console.log(err?.meta?.target.includes("email"))
    }
}

export {signUpController}