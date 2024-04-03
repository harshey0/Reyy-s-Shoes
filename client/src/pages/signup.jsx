import "../styles/signup.css";
import {Container , Box , TextField,Link as MuiLink, Button, Typography, Alert} from "@mui/material";
import {Link } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
        const [password,newpassword]= useState("")
        const [cpassword,newcpassword]= useState("")
        const [epassword,newepassword]= useState(false)

        function pchange(event)
        {
            newpassword(event.target.value);
        }
        function cpchange(event)
        {
            newcpassword(event.target.value);
        }
        function echeck(event){
            event.preventDefault();
            if(password===cpassword)
            newepassword(false);
            else
                newepassword(true);
            
        }

  return (
    <Container className="signup-container" >
   <Box className="signup-box">
    {epassword && (<Alert severity="error">
                *passwords do not match
    </Alert> )}
    <Typography className="signup-text" variant="h4">
        Register
    </Typography>
    <Box component="form" className="signup-field" onSubmit={echeck}>
    <TextField 
              margin="normal" 
              variant="outlined"
              required
              fullWidth
              type="username"
              label="Username"
              id="username"/>
    <TextField 
              margin="normal" 
              variant="outlined"
              required
              fullWidth
              label="Email"
              id="email"/>
    <TextField 
              margin="normal" 
              variant="outlined"
              required
              fullWidth
              type="password"
              label="Password"
              id="password"
              value={password}
                onChange={pchange}
              />
    <TextField 
              margin="normal" 
              variant="outlined"
              required
              fullWidth
              type="password"
              label="Confirm Password"
              id="password"
              value={cpassword}
              onChange={cpchange}
              />

              <Button type="submit" className="signup-pad" 
                variant="contained" style={{backgroundColor:'red'}}>Sign up</Button>
                <a href="#"  style={{ textDecoration: 'none' }}>
              <Button  className="signup-pad"
                variant="contained" style={{backgroundColor:'blue'}}>Sign up with google</Button>
                </a>
            <MuiLink component={Link} className="signup-pad" to="/signin">Already have an account?Click here</MuiLink>
              </Box>
   </Box>
   </Container>
  )
}
