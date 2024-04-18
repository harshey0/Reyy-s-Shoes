import {Strategy} from "passport-google-oauth20";
import passport from "passport";
import dotenv from "dotenv";
dotenv.config();


 passport.use(new Strategy(
        {
            clientID : process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/user/google/callback",
            scope: ["profile", "email"]
        },
        (accessToken, refreshToken, profile, done) => {
            console.log("profile : " , profile);
          try {
            return done(null, profile);
          } catch (error) {
            return done(error, null);
          }
        }
      ));



        export function google(){ 
           return passport.authenticate("google", { 
                
                scope: ["profile", "email"]
              }); }


      export function callback(req,res) { 
       return res.redirect(`${process.env.URLC}`) 
        }


        export default passport;