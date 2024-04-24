import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/manageproducts.css";
import LoadingPage from "../loading/loading";
import {toast} from "react-toastify"

export default function ManageProducts() {

  const URLS = process.env.REACT_APP_URLS;
  const [loading, setloading] = useState(true);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    
      fetch();
  }, []);

  async function fetch ()
  {
    try{
      const response = await axios.post(`${URLS}/data/products`)
      setloading(false);
      setProducts(response.data);
    }
    catch(error)
    {
      console.log(error);
    }
  }

  async function prodel(id)
  {
    try{
        const response = await axios.delete(`${URLS}/data/productdel/${id}`)
        setloading(true)
      await fetch();
         toast(response.data);
    }
    catch(error)
    {
      console.log(error)
    }
  }


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  if(loading)return <LoadingPage/>
  else
  return (
    <div className='manageproducts'>
      <h1>Manage Products</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map(product => (
            <tr key={product._id}>
              <td>{product._id.toString().slice(-19)}</td>
              <td>{product.title}</td>
              <td>{product.newPrice}</td>
              <td>{product.company}</td>
              <td>
                <button className='editbutton'>Edit</button>
                <button className='deletebutton' onClick={()=>prodel(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
}
