import "../styles/signin.css";
import {Container , Box , TextField,Link as MuiLink, Button, Typography, Alert} from "@mui/material";
import {Link, useNavigate } from "react-router-dom";
import { useState, useEffect  } from "react";
import axios from "axios";
import tokenstore from "../session/tokenstore.js"

import { toast  } from 'react-toastify';


const URL = process.env.REACT_APP_URLD;


export default function Signin(props) {
  

  const navigate = useNavigate();

const [ value, setvalue] = useState({username:"", password:""});

const [emsg,setemsg]= useState("")

useEffect(() => {
  if (emsg === 'Login Successful') {
   {
    toast.success('Login Successful');
    props.login();
    
        
   }
  }
}, [emsg]);

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
    const response = await axios.post(`${URL}/user/login`, value , {
      withCredentials: true,
  })
    console.log( response.data);
    tokenstore();
    setemsg(response.data);
    if(response.data=== "Login Successful")
    navigate("/");
    // console.log(localStorage.getItem('token'))
    
    


  } catch (error) {
    console.error("Registration error:", error.response.data);
    setemsg(error.response.data);
  }
}

  return (
   <Container className="login-container" >
   <Box className="login-box">
   {emsg && (<Alert severity="error">
                {emsg}
    </Alert> )}
    <Typography className="login-text" variant="h4">
        Login
    </Typography>
    <Box component="form" className="login-field">
    <TextField 
              margin="normal" 
              variant="outlined"
              required
              fullWidth
              type="username"
              label="Username"
              name="username"
              value={value.username}
                onChange={change}
              />
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

              <MuiLink component={Link} to="/" className="login-pad">Forgot Password?Click here</MuiLink>

              <Button className="login-pad"
                variant="contained" style={{backgroundColor:'red'}}
                onClick={handle}>Sign in</Button>
              <a href="#" style={{ textDecoration: 'none' }}>
                    <Button className="login-pad" variant="contained" style={{ backgroundColor: 'blue' }}>
                                     Sign in with Google
                                        </Button>
                                </a>

            <MuiLink component={Link} className="login-pad" to="/signup">Don't have an account?Register here</MuiLink>
              </Box>
   </Box>
   </Container>
  )
}
