import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


export default function Card(props) {

const navigate=useNavigate();
const {img,_id,star,reviews,prevPrice,newPrice,title}=props.data;

    const stars=[ ];
    for (var i=0; i < star; i++) {
      stars.push(<AiFillStar key={i} className="rating-star" />)
      } 


  return (
    <section className="card" onClick={()=>navigate(`/details/${_id}`)}>
<img src={img} alt="shoe" />
<div className="card-details">
  <h3 className="card-title">{title}</h3>
  <section className="card-reviews">
  
      {stars}
  <span className="total-reviews">{reviews}</span>
  </section>
  <section className="card-price">
  <div className="price"><del>{prevPrice}</del> {newPrice} </div>
 <div className="mark" ><div class="checkmark-icon"/> Verified</div>

</section>
</div>
</section>
  );
}
