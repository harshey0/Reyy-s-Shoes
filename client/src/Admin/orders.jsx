import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingPage from "../loading/loading";
import "../styles/manageorders.css";
import {toast} from "react-toastify"

export default function ManageOrders() {

  const navigate= useNavigate();
  const URLS = process.env.REACT_APP_URLS;
  const [orders, setOrders] = useState([]);
  const [loading, setloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(8);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch()
  {
    try{
     const response = await axios.post(`${URLS}/data/order`)
      setloading(false);
      setOrders(response.data);
    }
    catch(error)
    {
      console.log(error);
    }
  }

  async function status(_id)
  {
    try{
      const response = await axios.post(`${URLS}/data/status`,{_id})
      setloading(true)
      await fetch();
         toast(response.data);
    }
    catch(error){
      console.log(error);
    }
  }


const calculateTotal = (products) => {
  return products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
}

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  if(loading) return <LoadingPage/>
  else
  return (
    <div className='manageorders'>
      <h1>Manage Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.reverse().map(order => (
            <tr key={order._id}>
              <td>{order._id.toString().slice(-19)}</td>
              <td>{order.user.username}</td>
              <td>{new Date(order.createdAt).toLocaleDateString()}</td>
              <td>${calculateTotal(order.products)}</td>
              <td>{order.status}</td>
              <td className='action'>
                <button className='action-button'  onClick={()=>navigate(`/order/${order._id}`)}>View</button>
                {order.status === 'pending' ? (
            <button className='action-button' onClick={()=>status(order._id)}>Mark as Shipped</button>
                ) : order.status === 'shipped' ? (
                    <button className='action-button' onClick={()=>status(order._id)}>Mark as Delivered</button>  ):< ></>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: Math.ceil(orders.length / ordersPerPage) }, (_, i) => (
          <button key={i} className="pagination-button" onClick={() => paginate(i + 1)}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
}

