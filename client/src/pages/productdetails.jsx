import React, { useState } from 'react';
import "../styles/productdetails.css"
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast  } from 'react-toastify';
import LoadingPage from '../loading/loading';
import { Alert } from '@mui/material';

export default function Productdetails(props) {

    const URLS = process.env.REACT_APP_URLS;
    const {id} = useParams();
    const [emsg,setemsg]= useState("");
    const [quantity,setquantity]= useState(1);
    const [ data,newdata]=useState("");
    const [ value,newvalue]=useState({comment:"",star:1,productid:id ,username:props.name});
    const [ loading,newloading]=useState(true);
    const navigate=useNavigate();

useEffect(()=> { fetch();
},[]
);

async function fetch()
{try
{
   const response = await axios.post(`${URLS}/data/productbyid`,{id});
   newloading(false)
    newdata(response.data);
}
catch(error)
{
    console.log("erorr fetching products in details :", error);
}}

useEffect(() => {
    let timeoutId;
    if (emsg) {
        timeoutId = setTimeout(() => {
            setemsg('');
        }, 3000); 
    }
    return () => {
        clearTimeout(timeoutId);
    };
}, [emsg]);

async function deletereview(id)
{
    try {
        const response = await axios.delete(`${URLS}/data/commentdelete/${id}`);

        toast(response.data.message);
        fetch();

    } catch (error) {
        console.error('error deleteing review :', error);

    }}   
async function cart()
{
    const value={id , quantity , username:props.name}
    try {
        const response = await axios.post(`${URLS}/data/cartadd`,value);

        toast(response.data.message);

    } catch (error) {
        console.error('error adding to cart :', error);

    }}   


async function review()
{
    if(value.comment.length<1)
    setemsg("Please write a review to submit")
    else{
    try {
        const response = await axios.post(`${URLS}/data/comment`,value);

        toast(response.data.message);
        newvalue({ ...value, comment: "", star: "" });
        fetch();

    } catch (error) {
        console.error('Error submitting review:', error);

    }}
}
const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour12: true,
    };
    return date.toLocaleString('en-US', options); 
};

if (loading) {
    return (<LoadingPage/>)

}
else
  return (
    <div className='details'>
    <button className="go-back-button" onClick={()=>navigate(-1)}>Go Back</button>
    <div className="container">
        <div className="product-image">
            <img src={data.img} alt="Product Image"/>
        </div>
        <div className="product-details">
            <div className="product-name">{data.title}</div>
            <div className="product-company">{data.company} {data.category} ~ <span className='seller'> <span>by </span> {data.seller}</span></div>
            <div className="product-description">{data.description}</div>
            <div className="product-price">Price: <del>{data.prevPrice}</del> {data.newPrice}</div>
            <div className="product-stock">In Stock: {data.inStock}</div>
            <div className="product-rating">Rating:  {data.star}   {data.reviews}</div>
            <div className="product-quantity">
                Quantity: <input type="number" placeholder='1' min="1" max="10" pattern="[1-9]*" value={quantity}  onChange={(e)=>{ let value = parseInt(e.target.value);if(value>10) value = value%10;if(value===0) value=1;e.target.value = value; setquantity(value)}}/>
            </div>
            <button className="add-to-cart-button" onClick={cart}>Add to Cart</button>
        </div>
    </div>
    <div className="comment-section">
    <div className="add-comment">
            <h3>Write a Review</h3>
            {emsg && (<Alert severity="error">
                {emsg}
    </Alert> )}
            <p>Your Review:</p>
                <textarea rows="4" placeholder="Your Comment" name="comment" value={value.comment} onChange={(e)=>newvalue({...value , comment:e.target.value})}></textarea>
                <div className="rating">
                Rating: <input type="number" placeholder='1' name="star" min="1" max="5" pattern="[1-5]*" value ={value.star} onChange={(e)=>{ let val = parseInt(e.target.value);if(val>10) val = val%10;if (val > 5 ) { val = 5;}  if(val===0) val=1;e.target.value = val; newvalue({ ...value , star:val})}}/>
           
                <button className="submit-comment" onClick={review}>Submit Review</button> </div>
            </div>
            <h3>Customer Reviews :</h3>

            <div className="user-comments">

                {data.comments &&data.comments.length>0? ( data.comments.slice().reverse().map((comment, index) => (
                    <div key={index} className="comment">
                   {comment.star && <div className="comment-rating">Rating:  {comment.star}</div>}
                        
                        <div className="comment-content" >{comment.comment}</div>
                        <div className="comment-user">~ {comment.name}</div>
                        <div className="comment-timestamp">{formatTimestamp(comment.updatedAt)}</div>
                        {comment.name === props.name && (
                            <div className="edit-delete-container">
                    <button className="delete-button" onClick={()=>deletereview(comment._id)}>Delete</button>
                </div>
            )}
                    </div>
                ))):
               ( <h3>No Reviews Yet</h3>)}
            </div>
           
        </div>

        </div>
  )
  }
