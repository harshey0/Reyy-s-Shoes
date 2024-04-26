import "../styles/signin.css";
import {Container , Box , TextField,Link as MuiLink, Button, Typography, Alert} from "@mui/material";
import {Link, useNavigate } from "react-router-dom";
import { useState, useEffect  } from "react";
import googleAuth from "../oauth2.0/googleAuth.js"
import axios from "axios";
import tokenstore from "../session/tokenstore.js"
import { toast  } from 'react-toastify';


const URLS = process.env.REACT_APP_URLS;


export default function Signin(props) {
  

  const navigate = useNavigate();

const [ value, setvalue] = useState({email:"", password:""});

const [emsg,setemsg]= useState("")

useEffect(() => {
  if (emsg === 'Login Successful') {
   {
    toast.success('Login Successful');
    props.login();
   }
  }
}, [emsg]);

 
function google()
{
  googleAuth();
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
  if(!value.email.trim()||!value.password.trim())
  setemsg("Please enter login details");
  else{
  try {
    const response = await axios.post(`${URLS}/user/login`, value , {
      withCredentials: true,
  })
    // console.log( response.data.message);
    setemsg(response.data.message);
    if(response.data.message &&response.data.message=== "Login Successful")
    {

    tokenstore(response.data.token);
      props.set();
    navigate("/");}
    // console.log("token in signin.jsx ",localStorage.getItem('token'))
    
    


  } catch (error) {
    console.error("Signin error:", error.response.data.message);
    setemsg(error.response.data.message);
  }
}}

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
              type="email"
              label="Email"
              name="email"
              value={value.email}
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

              <MuiLink component={Link} to="/forget" className="login-pad">Forgot Password?Click here</MuiLink>

              <Button className="login-pad"
                variant="contained" style={{backgroundColor:'red'}}
                onClick={handle}>Sign in</Button>
              <a style={{ textDecoration: 'none' }}>
                    <Button className="login-pad" variant="contained" style={{ backgroundColor: 'blue' }} onClick={google}>
                                     Continue with Google
                                        </Button>
                                </a>

            <MuiLink component={Link} className="login-pad" to="/signup">Don't have an account?Register here</MuiLink>
              </Box>
   </Box>
   </Container>
  )
}
