
import jwt from "jsonwebtoken";

export default function generateToken(username,admin,time){
const token = jwt.sign({username,admin},process.env.JWT_SECRET , {
  expiresIn: time
})

                return token;
              //  res.cookie('jwt',token,{
              //      secure:true,
              //      sameSite:"None",
              //      maxAge: 30*24*60*60*1000,
              //      path: '/' 
              //  })
            };
 export function destroyToken(){
                   
                  return "Expired";
              //  res.cookie('jwt',"fake",{
              //   domain: ".vercel.app",
              //      secure:true,
              //      sameSite:"None",
              //      maxAge: 24*60*60*1000,
              //      path: '/' 
              //  })
               
            };


          export function verifyToken(req, res){
                const token =  req.headers.authorization?.split(' ')[1];
                if (!token) {
                  return res.send("no");
                }
              
                try {
                  const decoded = jwt.verify(token, process.env.JWT_SECRET);
                  
                  const currentTimeInSeconds = Math.floor(Date.now() / 1000);
                  if (decoded.exp && currentTimeInSeconds <= decoded.exp)
                  return res.send({message:"yes",decoded});
                  else
                  return res.send("expired");
                  

                } catch (error) {

                  return res.send("no");
                }
              };
              
