import React, { useState } from 'react';
import "../styles/productdetails.css"
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Productdetails() {

    const URLS = process.env.REACT_APP_URLS;
    const id = useParams();
    const [ data,newdata]=useState("");
    const navigate=useNavigate();

useEffect(()=> {async function fetch()
{try
{
   const response = await axios.post(`${URLS}/data/productbyid`,id);
    newdata(response.data);
}
catch(error)
{
    console.log("erorr fetching products in details :", error);
}} fetch();
},[]
);


  return (
    <div className='details'>
    <button className="go-back-button" onClick={()=>navigate("/")}>Go Back</button>
    <div className="container">
        <div className="product-image">
            <img src={data.img} alt="Product Image"/>
        </div>
        <div className="product-details">
            <div className="product-name">{data.title}</div>
            <div className="product-company">{data.company} {data.category} -:</div>
            <div className="product-description">{data.description}</div>
            <div className="product-price">Price: <del>{data.prevPrice}</del> {data.newPrice}</div>
            <div className="product-stock">In Stock: {data.inStock}</div>
            <div className="product-rating">Rating:  {data.star}   {data.reviews}</div>
            <div className="product-quantity">
                Quantity: <input type="number" placeholder='1' min="1"/>
            </div>
            <button className="add-to-cart-button">Add to Cart</button>
        </div>
    </div>
        </div>
  )
}
