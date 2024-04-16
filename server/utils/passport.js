// import { application } from "express";
// import session from "express-session";
// import {Strategy} from "passport-google-ouath20";
// import passport from "passport";

// export default function passport(app)
// {
//     app.use(
//         session ({
//             secret: process.env.SESSION_SECRET,
//             resave : false,
//             saveUninitialized:false,
//             cookie:{
//                 maxAge: 24*60*60*1000
//             }
//         })
//     );
//     app.use(passport.initialize());
//     app.use(passport.session());

//     passport.use(new Strategy(
//         {
//             clientID : process.env.CLIENT_ID,
//             clientSecret : process.env.CLIENT_SECRET,
//             callbackURL:"/user/google/callback"

//         }
//     ))

// }
