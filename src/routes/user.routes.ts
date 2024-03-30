import { Router ,Request,Response, NextFunction} from "express";
import { PrismaClient } from "@prisma/client";
import { signUpMiddleware } from "../middlewares/user.middleware";
import { signUpController } from "../controllers/user.controllers";

const userRouter = Router()
const client = new PrismaClient()

userRouter.get("/",async(req:Request,res:Response)=>{
    try{
        const response = await client.user.findMany({})
        res.status(200).json({data:response})
    }catch(err){
        console.log(err)
    }
})

userRouter.post("/signup",signUpMiddleware,signUpController)


export default userRouter