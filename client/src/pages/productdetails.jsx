import React, { useState } from 'react';
import "../styles/productdetails.css"
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Productdetails() {

    const URLS = process.env.REACT_APP_URLS;
    const {id} = useParams();
    const [ data,newdata]=useState("");

useEffect(()=> {async function fetch()
{try
{
   const response = await axios.post(`${URLS}/data/productbyid`,{id});
    newdata(response.data);
    console.log(data.title);
}
catch(error)
{
    console.log("erorr fetching products in details :", error);
}} fetch();
},[]
);



  return (
    <div className='details'>{data.title}</div>
  )
}
