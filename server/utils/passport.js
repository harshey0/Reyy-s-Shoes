import {Strategy} from "passport-google-oauth20";
import passport from "passport";
import googleAuth from "../controllers/googleAuthController.js";
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
          try {
            return done(null, profile);
          } catch (error) {
            return done(error, null);
          }
        }
      ));





              export function callback(req, res) {
                passport.authenticate("google", async (err, user, info) => {
                    if (err) {
                        console.error("Authentication error:", err);
                        return res.status(500).json({ message: "Authentication error" });
                    }
                    if (!user) {
                       
                        return res.status(401).json({ message: "Authentication failed" });
                    }

                    const fname = user.name.givenName;
                    const email = user.emails[0].value;

                    try{
                    const token = await googleAuth(fname,email);
                    res.redirect(`${process.env.URLC}?token=${token}`);
                    }
                    catch (error) {
                      console.error("Error while processing authentication:", error);
                }})(req, res); 
            }



        export default passport;