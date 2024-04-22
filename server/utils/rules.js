import User from "../models/userModel.js";
export default async function checkDetails(req,res,username,email,password,cpassword)
{
                const usernameRegex = /^[a-zA-Z0-9]+$/;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                let firstCharacter = username.charAt(0);
                const errors = [];

                if (username) {
                    if (!(firstCharacter >= 'a' && firstCharacter <= 'z') && !(firstCharacter >= 'A' && firstCharacter <= 'Z')) {
                        errors.push("First character of the username must be a letter");
                    } else if (username.length < 4) {
                        errors.push("Username too short");
                    } else if (username.length > 12) {
                        errors.push("Username too long");
                    } else if (!usernameRegex.test(username)) {
                        errors.push("Username should only contain letters and numbers");
                    }
                }
            
                if (email) {
                    if (!emailRegex.test(email)) {
                        errors.push("Please enter a valid email address");
                    } else if (await User.findOne({ email })) {
                        errors.push("This email id is already registered");
                    }
                }
            
                if (password) {
                    if (password !== cpassword) {
                        errors.push("Passwords do not match");
                    } else if (password.length < 6) {
                        errors.push("Password should be at least 6 characters long");
                    }
                }
            
                if (username && (await User.findOne({ username }))) {
                    errors.push("This username is not available");
                }
            
                if (errors.length > 0) {
                    return errors;
                } else {
                    return true;
                }
            }