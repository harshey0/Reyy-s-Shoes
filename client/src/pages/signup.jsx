import "../styles/signup.css";
import {Container , Box , TextField,Link as MuiLink, Button, Typography, Alert} from "@mui/material";
import {Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import googleAuth from "../oauth2.0/googleAuth.js"
import { toast  } from 'react-toastify';
import axios from "axios";


const URLS = process.env.REACT_APP_URLS;

export default function Signup() {
  const navigate = useNavigate();
 
        const [emsg,setemsg]= useState("")
        const [ value, setvalue] = useState({username:"",email:"", password:"" , cpassword:""});

        useEffect(() => {
          if (emsg === 'Registration Successful') {
           {
            toast.success('Registration Successful');
            navigate('/');
           }
          }
        }, [emsg]);

       async function google()
        {
          await googleAuth();
       }  

       
        

function change(e)
{
  setvalue({
    ...value, [e.target.name]:e.target.value
  })
}

      
        async function handle(event)
{
  event.preventDefault();
  try {
    const response = await axios.post(`${URLS}/user/register`, value);
    console.log( response.data);
    setemsg(response.data);

  } catch (error) {
    console.error("Registration error:", error.response.data);
    setemsg(error.response.data);
  }
}

  return (
    <Container className="signup-container" >
   <Box className="signup-box">
    {emsg && (<Alert severity="error">
                {emsg}
    </Alert> )}
  
    <Typography className="signup-text" variant="h4">
        Register
    </Typography>
    <Box component="form" className="signup-field">
    <TextField 
              margin="normal" 
              variant="outlined"
              required
              fullWidth
              type="username"
              label="Username"
              value={value.username}
              onChange={change}
              name="username"/>
    <TextField 
              margin="normal" 
              variant="outlined"
              required
              fullWidth
              value={value.email}
              label="Email"
              onChange={change}
              name="email"/>
    <TextField 
              margin="normal" 
              variant="outlined"
              required
              fullWidth
              type="password"
              label="Password"
              name="password"
              value={value.password}
                onChange={change}
              />
    <TextField 
              margin="normal" 
              variant="outlined"
              required
              fullWidth
              type="password"
              label="Confirm Password"
              name="cpassword"
              value={value.cpassword}
              onChange={change}
              />

              <Button type="submit" className="signup-pad" 
                variant="contained" style={{backgroundColor:'red'}} onClick={handle}>Sign up</Button>
                <a style={{ textDecoration: 'none' }}>
                
              <Button  className="signup-pad"
                variant="contained" style={{backgroundColor:'blue'}} onClick={google}>Continue with google</Button>
                </a>
            <MuiLink component={Link} className="signup-pad" to="/signin">Already have an account?Click here</MuiLink>
              </Box>
   </Box>
   </Container>
  )
}
