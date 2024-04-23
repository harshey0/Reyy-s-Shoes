import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingPage from '../loading/loading';
import "../styles/orderdetails.css";

export default function OrderDetails() {


const navigate=useNavigate();
  const URLS = process.env.REACT_APP_URLS;
  const { id } = useParams();
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {   async function fetchOrderDetails() {
    try {
      const response = await axios.post(`${URLS}/data/order/${id}`); 
      setLoading(false);
      const {orderProducts} = response.data;
      setOrder(orderProducts)

    } catch (error) {
      console.log(error);
    }
  }
    fetchOrderDetails();
  }, [URLS,id]);



  if (loading)
   {return <LoadingPage />;}
else
  return (
    <div className="order-details-container">
    <button className="go-back-button-order" onClick={()=>navigate(-1)}>Go Back</button>
        <h1>Order Summary <span>
          <h3>Order ID: {id.toString().slice(-19)}</h3></span> </h1>
        <div>
          <div className="order-items">
            <ul>
              {order.map((product, index) => (
                <li key={index} className="orderitem" onClick={()=>navigate(`/details/${product.productId}`)}>
                  <img src={product.img} alt={product.title} />
                  <div >
                    <h4>{product.title}</h4>
                    <p>{product.description.length > 10 ? product.description.slice(0,135) : product.description}...</p>
                    <p>Quantity: {product.quantity}  <span>Price: ${product.price} each</span> </p>
                    
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="invoice">
            <h3>Order Invoice:</h3>
            <table>
  <thead>
    <tr>
      <th>Product</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    {order.map((product, index) => (
      <tr key={index}>
        <td>{product.title}</td>
        <td>{product.quantity}</td>
        <td>${product.price}</td>
      </tr>
    ))}
    <tr className="empty-row">
      <td colSpan="3"></td>
    </tr>
    <tr className='total-row'>
      <td colSpan="2" className='total'>Total Price:</td>
      <td className='total'>${order.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)}</td>
    </tr>
  </tbody>
</table>

          </div>
        </div>
      </div>
  );
}
