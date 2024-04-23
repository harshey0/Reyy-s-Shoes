import React, { useEffect,useState } from 'react';
import { Link , useParams , useNavigate} from 'react-router-dom';
import axios from "axios";
import LoadingPage from '../loading/loading';
import "../styles/success.css";

export default function SuccessPage(props) {

   const name= props.name;
  const URLS = process.env.REACT_APP_URLS;
  const [loading, setloading]=useState(true);
  const{token}= useParams();
  const navigate = useNavigate();

  useEffect(()=>{
      async function check()
      {
          try {
              const res = await axios.post(`${URLS}/user/verify`,{},{
                  headers: {
                      Authorization: `Bearer ${token}` }
                  });
               if(res.data.message && res.data.message==="yes")
               {order(); setloading(false); }
               else navigate("/");
              }
          
          catch(error)
          {console.log(error)}
      }
   check()},[]);

async function order()
{
  try{
    const response =await  axios.post(`${URLS}/data/addorder`,{name});
    // console.log(response.data.message);
  }
  catch(error)
  {
    console.log(error);
  }
}

   if(loading)
   return (<LoadingPage/>)
else
  return (
    <div className="success-container">
      <div className="success-content">
        <h2 className="success-heading">Payment Successful!</h2>
        <p className="success-message">Your payment has been processed successfully.</p>
        <Link to="/profile" className="view-details-link">View Order Details</Link>
      </div>
    </div>
  );
};
