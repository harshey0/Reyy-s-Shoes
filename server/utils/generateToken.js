
import jwt from "jsonwebtoken";

export default function generateToken(res,id){
const token = jwt.sign({id},process.env.JWT_SECRET ,{expiresIn:"30d"})
               res.cookie('jwt',token,{
                   httpOnly:true,
                   secure:process.env.NODE_ENV !== 'development',
                   samesite:"strict",
                   maxAge: 30*24*60*60*1000
               })
            };