import React, { useState, useEffect } from 'react';
import '../styles/profile.css'; 
import {useNavigate} from "react-router-dom";
import axios from "axios";
import LoadingPage from '../loading/loading';
import { Alert } from '@mui/material';
import tokenstore from '../session/tokenstore';
import { toast  } from 'react-toastify';

export default function Profile(props) {


  const name=props.name;
  const URLS = process.env.REACT_APP_URLS;
  const [ovalue,setovalue]=useState({username:props.name, email:props.em})
  const [loading, setloading] = useState(true);
  const [value, setvalue] = useState({username:props.name, email:props.em ,password:"" ,confirmPassword:""});
  const [editMode, setEditMode] = useState(false);
  const [emsg,setemsg]= useState("")
  const [orders, setOrders] = useState([]);
  const navigate= useNavigate();
 
useEffect(()=>{
  async function fetch()
  {
    try{
      const response=await axios.post(`${URLS}/data/userorder`,{name});
      setOrders(response.data);
      console.log(response.data);
      setloading(false)
    }
    catch(error)
    {
      console.log(error)
    }
  } fetch();
},[URLS ,name])

  useEffect(() => {
    if (emsg) {
        const timer = setTimeout(() => {
            setemsg('');
        }, 3000);

        return () => clearTimeout(timer);
    }
}, [emsg]);

async function update(event){
    event.preventDefault();
    setEditMode(false);
    
    try{
      const response = await axios.put(`${URLS}/user/update`,{value,name})
      if(!response.data.update)
      {setemsg(response.data.message);
      setvalue({username:ovalue.username, email:ovalue.email ,password:"" ,confirmPassword:""})}
      else
      {
        const {message , user , token}= response.data;
        setvalue({username:user.username, email:user.email ,password:"" ,confirmPassword:""})
        setovalue({username:user.username, email:user.email })
        tokenstore(token);
        toast(message);
      props.set();
      }
    }
    catch(error)
    {
        console.log(error);
    }
  };
  function calculateTotalPrice(products) {
    let totalPrice = 0;
    
    products.forEach(product => {
      totalPrice += product.price * product.quantity;
    });
  
    return totalPrice;
  };



  if(loading)
  return (<LoadingPage/>)
  else
  return (
    <div className="profile-management-container">
     <button className="go-back-button-profile" onClick={()=>navigate("/")}>Go Back</button>
      <div className="profile-details">
      {emsg && (<Alert severity="error" style={{ maxWidth: '300px' }}>
                {emsg}
    </Alert> )}
        <h2>Profile Details</h2>
        <div className="profile-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <div className="input-container">
                <input
                  type="text"
                  id="username"
                  value={value.username}
                  onChange={(event)=>setvalue({...value , username:event.target.value})}
                  disabled={!editMode}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={value.email}
                onChange={(event) => setvalue({...value , email:event.target.value})}
                disabled={!editMode}
              />
            </div>
            {editMode && (
              <>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={value.password}
                    onChange={(event)=> setvalue({...value , password:event.target.value})}
                    placeholder="Enter new password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={value.confirmPassword}
                    onChange={(event) =>setvalue({...value , confirmPassword:event.target.value})}
                    placeholder="Confirm new password"
                  />
                </div>
                <button type="submit" className='profile-button' onClick={update}>Update Profile</button>
              </>
            )}
            {!editMode && <button type="button" className='profile-button' onClick={() => setEditMode(true)}>Edit Profile</button>}
       
        </div>
      </div>
      <div className="order-details">
        <h2>Order Details</h2>
        <table className="order-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
            </tr>
          </thead>
          <tbody>
          {orders.map(order => {
         const totalPrice = calculateTotalPrice(order.products);
         const orderId = order._id.toString().slice(-19);
         const formattedDate = new Date(order.createdAt).toLocaleDateString("en-GB");
         /* console.log(orderId) */
           return (
         <tr key={order._id} onClick={()=>navigate(`/order/${order._id}`)}>
          <td>{orderId}</td>
         <td>{formattedDate}</td>
         <td>${totalPrice}</td>
         <td className='status'>{order.status}</td>
          </tr>
    );
  })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
