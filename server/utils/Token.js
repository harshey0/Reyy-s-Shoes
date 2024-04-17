
import jwt from "jsonwebtoken";

export default function generateToken(username,admin){
const token = jwt.sign({username,admin},process.env.JWT_SECRET , {
  expiresIn: '30d'
})
               return token;
            };
 export function destroyToken(){

              return "fake";
               
            };


          export function verifyToken(req, res){
                const token =  req.headers.authorization?.split(' ')[1];
                if (!token) {
                  return res.send("no");
                }
              
                try {
                  const decoded = jwt.verify(token, process.env.JWT_SECRET);
                  
                  const currentTimeInSeconds = Math.floor(Date.now() / 1000);
                  if (decoded.exp && currentTimeInSeconds >= decoded.exp)
                  return res.send("expired");
                  else

                  return res.send({message:"yes",decoded});

                } catch (error) {

                  return res.send("no");
                }
              };
              
