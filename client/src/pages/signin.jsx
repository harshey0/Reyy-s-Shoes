import "../styles/signin.css";
import {Container , Box , TextField,Link as MuiLink, Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export default function Signin() {
  return (
   <Container className="login-container" >
   <Box className="login-box">
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
              id="username"/>
    <TextField 
              margin="normal" 
              variant="outlined"
              required
              fullWidth
              type="password"
              label="Password"
              id="password"/>

              <MuiLink component={Link} to="/" className="login-pad">Forgot Password?Click here</MuiLink>

              <Button className="login-pad"
                variant="contained" style={{backgroundColor:'red'}}>Sign in</Button>
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
