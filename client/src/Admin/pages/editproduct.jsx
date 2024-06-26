import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../../styles/adminproduct.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import LoadingPage from "../../loading/loading"


export default function EditProduct(props) {



const navigate=useNavigate();

    const URLS = process.env.REACT_APP_URLS;
    const [validationError,setValidationError]=useState(null)
    const [loading , setloading] = useState(true)
    const [fileSelected, setFileSelected] = useState(false);
    const [productData, setProductData] = useState({
      img: '',
      title: '',
      prevPrice: '',
      newPrice: 0,
      company: '',
      color: '',
      category: '',
      seller: '',
      inStock: 0,
      description: ''
    });
  
    const { id } = useParams();
  
    useEffect(() => {
      fetchProductData();
    }, []);
  
    const fetchProductData = async () => {
      try {
        const response = await axios.post(`${URLS}/data/productbyid`, { id });
        const updatedProductData = { ...response.data, prevPrice: response.data.prevPrice.slice(1) };
        setloading(false)
        setProductData(updatedProductData);

      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };


    const handleImageChange = (e) => {
      const file = e.target.files[0]; 
      const reader = new FileReader(); 
    
      reader.onloadend = () => {
    
        setProductData({
          ...productData,
          img: reader.result, 
        });
      };
    
      if (file) {
        
        reader.readAsDataURL(file);
      }
    };
    
    const handleChange = (e) => {
      if (e.target.name === "newImg") {
        setFileSelected(true)
        handleImageChange(e);
      } else {
        const { name, value } = e.target;
        setProductData({
          ...productData,
          [name]: value,
        });
      }
    };
      
  
  async function save (e) {
    e.preventDefault();
    const requiredFields = ['title', 'company', 'color', 'category', 'description' , "prevPrice" , "newPrice" , "inStock" , "description"];
    const missingFields = requiredFields.filter(field => !productData[field]);
    if (missingFields.length > 0) {
      setValidationError(`Please provide values for the following fields: ${missingFields.join(', ')}.`);
      return;}
      
  try {
    const formData = new FormData();
    if (fileSelected) 
    formData.append('newImg', document.getElementById('newImg').files[0]); 
    formData.append('title', productData.title);
    formData.append('prevPrice', productData.prevPrice);
    formData.append('newPrice', productData.newPrice);
    formData.append('company', productData.company);
    formData.append('color', productData.color);
    formData.append('category', productData.category);
    formData.append('seller', productData.seller);
    formData.append('inStock', productData.inStock);
    formData.append('description', productData.description);
    console.log(formData.get('title'));

    const response = await axios.post(`${URLS}/data/editproduct/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    toast(response.data);
    props.set();
    navigate(-1);
  }
   catch (error) {
    console.error('Error adding product:', error);
  }
};


if(loading) return <LoadingPage/>
else
  return (
    <div className="edit-product-container-custom">
      <h2>Edit Product</h2>
      {validationError && (
  <div>
    {alert(validationError)}
    {setValidationError(null)}
  </div>
)}
      <form className="edit-product-form-custom" >
        <div className="input-group-custom">
        <div className="image-container-custom">
  <img src={productData.img} alt="" className="current-image-custom" />
</div>
<label htmlFor="newImg" className="file-label-custom">
  <input
    type="file"
    id="newImg"
    name="newImg"
    accept=".jpg, .jpeg, .png"
    className="file-input-custom"
    onChange={handleChange}
    required
  />
  <span className="file-button-custom">Choose Image</span>
</label>
        </div>

        <div className="input-group-custom desc">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="large-input-custom"
            required
          />
        </div>
        <div className="input-group-custom">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={productData.title}
            onChange={handleChange}
            className="small-input-custom"
            required
          />
        </div>
      
        <div className="input-group-custom">
          <label htmlFor="prevPrice">Previous Price:</label>
          <input
            type="text"
            id="prevPrice"
            name="prevPrice"
            value={productData.prevPrice}
            onChange={handleChange}
            className="small-input-custom"
            required
          />
        </div>
        <div className="input-group-custom">
          <label htmlFor="newPrice">New Price:</label>
          <input
            type="text"
            id="newPrice"
            name="newPrice"
            value={productData.newPrice}
            onChange={handleChange}
            className="small-input-custom"
            required
          />
        </div>
        <div className="input-group-custom">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            value={productData.company}
            onChange={handleChange}
            className="small-input-custom"
            required
          />
        </div>
        <div className="input-group-custom">
          <label htmlFor="color">Color:</label>
          <input
            type="text"
            id="color"
            name="color"
            value={productData.color}
            onChange={handleChange}
            className="small-input-custom"
            required
          />
        </div>
        <div className="input-group-custom">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={productData.category}
            onChange={handleChange}
            className="small-input-custom"
            required
          />
        </div>
        <div className="input-group-custom">
          <label htmlFor="seller">Seller:</label>
          <input
            type="text"
            id="seller"
            name="seller"
            value={productData.seller}
            onChange={handleChange}
            className="small-input-custom"
            required
          />
        </div>
        <div className="input-group-custom">
          <label htmlFor="inStock">In Stock:</label>
          <input
            type="text"
            id="inStock"
            name="inStock"
            value={productData.inStock}
            onChange={handleChange}
            className="small-input-custom"
            required
          />
        </div>
      
        <button type="submit" className="edit-button-custom" onClick={save}>Save Changes</button>
      </form>
    </div>
  );
}
