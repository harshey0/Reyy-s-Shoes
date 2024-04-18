import React from 'react'
import "../styles/reset.css";
import {Container , Box , TextField, Button, Typography, Alert} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useState , useEffect} from "react";
import axios from "axios";
import { toast  } from 'react-toastify';

export default function Reset() {


const URLS = process.env.REACT_APP_URLS;

const [emsg,setemsg]= useState("");
const{id , token}= useParams();
const navigate =useNavigate();
const [value,setvalue]= useState({password:"",cpassword:"",id:id});


useEffect(() => {
    if (emsg === 'Password changed Successfully') {
     {
      toast.success(emsg);
      navigate('/');
     }
    }
  }, [emsg]);

    async function submit(event)
    {

        
      event.preventDefault();
      try {
        const res = await axios.post(`${URLS}/user/verify`,{},{
            headers: {
                Authorization: `Bearer ${token}` }
            });
         if(res.data.message && res.data.message==="yes")
         {

        const response = await axios.post(`${URLS}/user/reset`,value)
        console.log( response.data);
        setemsg(response.data);
    }
    else
    {
        setemsg("Reset link in invalid or expired")}
      } catch (error) {
        setemsg(error.response.data);
      }
    }

   
      

    return (

        <Container className="reset-container" >
        <Box className="reset-box">
        {emsg && (<Alert severity="error">
                {emsg}
    </Alert> )}
         <Typography className="reset-text" variant="h4">
             Reset Password
         </Typography>
         <Box component="form" className="reset-field">
         <TextField 
                   margin="normal" 
                   variant="outlined"
                   required
                   fullWidth
                   type="password"
                   label="Password"
                   name="password"
                   value={value.password}
                   onChange={(e)=>setvalue({ ...value, password: e.target.value })}
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
                   onChange={(e)=>setvalue({ ...value, cpassword: e.target.value })}
                   />
        
                   <Button className="reset-pad"
                     variant="contained" style={{backgroundColor:'red'}} onClick={submit}
                     >Submit</Button>
                
                   </Box>
        </Box>
        </Container>
       )
}
