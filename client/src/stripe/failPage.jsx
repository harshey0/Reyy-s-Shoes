import React, { useEffect,useState } from 'react';
import { Link , useParams , useNavigate} from 'react-router-dom';
import axios from "axios";
import LoadingPage from '../loading/loading';
import '../styles/fail.css';

export default function FailPage() {

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
                 setloading(false);
                 else navigate("/");
                }
            
            catch(error)
            {console.log(error)}
        }
     check()},[]);

     if(loading)
     return (<LoadingPage/>)
else
    return (
        <div className="fail-container">
          <div className="fail-content">
            <h2 className="fail-heading">Payment Failed</h2>
            <p className="fail-message">Sorry, your payment could not be processed.</p>
            <Link to="/" className="continue-shopping-link">Continue Shopping</Link>
            <p className="instructions-title">This app is currently in test mode, therefore you are required to follow these instructions for dummy payments.</p>
            <ul className="instructions-list">
              <li>Put a dummy card number such as 4242 4242 4242 4242.</li>
              <li>The payment is in usd so kindly use united states as the country.</li>
              <li>Try again as there are many furthur features of the app after the order is placed.</li>
            </ul>
          </div>
        </div>
      );
    };
