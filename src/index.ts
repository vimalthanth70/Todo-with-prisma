import express,{Request,Response} from 'express'
import userRouter from './routes/user.routes'

const app = express()


app.use("/api/v1/auth",userRouter)

const server = app.listen(8080,()=>{
    const host:any = server.address()
    console.log(`server is unning on ${host?.address}:8080`)

})