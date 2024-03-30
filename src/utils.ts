import {z} from 'zod'

const email = z.string().email()
const stringField = (required:boolean,max?:number)=>{
    if(required && !Boolean(max)){
        return z.string().min(1,"Required")
    }else if(required && max){
        return z.string().min(1,"Required").max(max)
    }else{
        return z.string()
    }
}

const signUpSchema = z.object({
    firstName:stringField(true),
    lastName:stringField(true),
    email:email,
    password:stringField(true,15)
})

export {signUpSchema}