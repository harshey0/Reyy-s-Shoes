import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../loading/loading';
import { toast  } from 'react-toastify';
import {loadStripe} from '@stripe/stripe-js';
import "../styles/cart.css"

export default function Cart(props){

  const username = props.name;
  const [cartItems , newItems]= useState([]);
  const [loading , newloading]= useState(true);
  const URLS = process.env.REACT_APP_URLS;
  const navigate = useNavigate();

  useEffect(()=>  {fetch();},[]);

  async function stripe()
  {
    try{
      newloading(true);
      const stripe = await loadStripe(process.env.REACT_APP_STRIPE_KEY)
      const response = await axios.post(`${URLS}/data/stripe`,cartItems)
      const {sessionid}=response.data;
      await stripe.redirectToCheckout({sessionId:sessionid})
    }
    catch(error)
    {
      console.log(error);
    }
  }

  async function fetch(){
    try
    {
      const response = await axios.post(`${URLS}/data/cart`,{username})
            newloading(false);
            newItems(response.data.cartData);}catch(error){console.log(error);} }

          async function cartdelete(_id)
          {
            try{
              const response =await axios.delete(`${URLS}/data/cartdelete/${_id}`, {  data: { username  }  })
              toast(response.data.message);
              fetch();
            }
            catch(error)
            {
              console.log(error);
            }
          }

        const getTotalItems = () => {
          return cartItems.reduce((total, item) => total + item.quantity, 0);
        };
        
        const getTotalPrice = () => {
          return cartItems.reduce((total, item) => total + item.product.newPrice * item.quantity, 0).toFixed(2);
        };

        if(loading)
        return <LoadingPage/>
        else
        return (
          <div className="cart-container">
           <button className="go-back-button" onClick={()=>navigate(-1)}>Go Back</button>
            <div className="cart-header">
              <h2>Shopping Cart -: </h2>
              {cartItems.length > 0 && (
              <div>  <div className="subtotal">
                  <h3 className="subtotal-heading">Subtotal ~</h3>
                  <p>Total Items: {getTotalItems()}</p>
                  <p>Total Price: ${getTotalPrice()}</p>
                  <button className="proceed-to-checkout" onClick={stripe}>Proceed to Checkout</button>
                </div>
                <button className="continue-shopping-button2" onClick={()=>navigate("/")}>Continue Shopping</button> </div>
              )}
            </div>
            {cartItems.length === 0 ? (
          <div>    <p className="empty-cart-message">Your cart is empty</p> 
           <button className="continue-shopping-button" onClick={()=>navigate("/")}>Continue Shopping</button>
           </div>
            ) : (
              <>
              <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item" >
              <img src={item.product.img} className="productimage" onClick={()=>navigate(`/details/${item.product._id}`)}/>
              <div className="productdetails">
                <h3 className="producttitle" onClick={()=>navigate(`/details/${item.product._id}`)}>{item.product.title}</h3>
                <p className="productprice">Price: ${item.product.newPrice}</p>
                <p className="quantity">Quantity: {item.quantity}</p>
                <div className="quantity-remove">
                  
                  <button className="remove-button" onClick={()=>cartdelete(item.product._id)}>Remove</button>
                </div>
              </div>
            </div>
                  ))}
                </div>
               
              </>
            )}
          </div>
        );
};
