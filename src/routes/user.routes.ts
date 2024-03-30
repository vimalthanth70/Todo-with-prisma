import { Router ,Request,Response} from "express";
import { PrismaClient } from "@prisma/client";

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


export default userRouter