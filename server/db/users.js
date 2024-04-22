import bcryptjs from "bcryptjs";

const users = [
    {
        username:"reyy",
        email:"sethiharshitfzr@gmail.com",
        password:bcryptjs.hashSync("reyy00",10),
        isAdmin:true
    },
    {
        username:"riya",
        email:"riyasidana1504@gmail.com",
        password:bcryptjs.hashSync("riya00",10)
    }
];

export default users;