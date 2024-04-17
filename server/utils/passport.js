// import {Strategy} from "passport-google-oauth20";
// import passport from "passport";
// import User from "../models/productModel.js"


    

//     passport.use(new Strategy(
//         {
//             clientID : process.env.CLIENT_ID,
//             clientSecret : process.env.CLIENT_SECRET,
//             callbackURL: "/user/google/callback"
//         },
//         async (accessToken, refreshToken, profile, done) => {
//           try {
//             // Find the user by their Google ID
//             let user = await User.findOne({ googleId: profile.id });
//             if (!user) {
//               return done(null, false, { message: 'User not found' });
//             }
//             return done(null, user);
//           } catch (error) {
//             return done(error, null);
//           }
//         }
//       ));



//         export const authgooglelogin = passport.authenticate("google", {
//             scope: ["profile", "email"]
//         });

//         export const googleCallbacklogin = passport.authenticate("google", passport.authenticate('google', { failureRedirect: '/signin' }),
//         (req, res) => {
//           res.redirect('/');
//         }
//       );
      



// // Function to handle successful Google OAuth authentication
// export function handleGoogleAuthSuccess(req, res) {
//     // Redirect or send response as needed
//     res.redirect("/dashboard?token=" + req.user);
// }

