import bcryptjs from "bcryptjs";

const users = [
    {
        username:"reyy",
        email:"reyy@gmail.com",
        password:bcryptjs.hashSync("reyy",10),
        isAdmin:true
    },
    {
        username:"riya",
        email:"riya@gmail.com",
        password:bcryptjs.hashSync("riya",10),
        isAdmin:true
    }
];

export default users;