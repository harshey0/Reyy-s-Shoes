import React from 'react'
import "../styles/forget.css";
import {Container , Box , TextField, Button, Typography, Alert} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast  } from 'react-toastify';

export default function Forget() {


const URLS = process.env.REACT_APP_URLS;
const navigate = useNavigate();
const [email,setemail]= useState("")
const [emsg,setemsg]= useState("")

useEffect(() => {
  if (emsg === 'Reset link is sent to this email') {
   {
    toast.success('Reset link sent');
    navigate('/');
   }
  }
}, [emsg]);

    async function submit(event)
    {
      event.preventDefault();
      try {
        const response = await axios.post(`${URLS}/user/forget`,{email})
        console.log( response.data.message);
        setemsg(response.data.message);
      } catch (error) {
        console.error("Error:", error.response.data.message);
        setemsg(error.response.data.message);
      }
    }



    return (

        <Container className="forget-container" >
        <Box className="forget-box">
        {emsg && (<Alert severity="error">
                {emsg}
    </Alert> )}
         <Typography className="forget-text" variant="h4">
             Forgot Password
         </Typography>
         <Box component="form" className="forget-field">
         <TextField 
                   margin="normal" 
                   variant="outlined"
                   required
                   fullWidth
                   type="email"
                   label="Email"
                   name="email"
                   value={email}
                   onChange={(e)=>setemail(e.target.value)}
                   />
        
                   <Button className="forget-pad"
                     variant="contained" style={{backgroundColor:'blue'}} onClick={submit}
                     >Submit</Button>
                
                   </Box>
        </Box>
        </Container>
       )
}
