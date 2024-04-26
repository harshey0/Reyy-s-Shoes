import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


export default function Card(props) {

const navigate=useNavigate();
const {img,_id,star,comments,prevPrice,newPrice,title}=props.data;

let check=true;
const Star = () => {
  if (comments &&comments.length > 0) {
      const totalStars = comments.reduce((acc, comment) => acc + comment.star, 0);
      return Math.round(totalStars / comments.length);
  }
  return 0;
};
if(prevPrice.slice(1)==="0")
check = false
    const stars=[ ];
    for (var i=0; i < Star(); i++) {
      stars.push(<AiFillStar key={i} className="rating-star" />)
      } 


  return (
    <section className="card" onClick={()=>navigate(`/details/${_id}`)}>
<img src={img} alt="shoe" />
<div className="card-details">
  <h3 className="card-title">{title}</h3>
  <section className="card-reviews">
  
      {stars}
  <span className="total-reviews">(<span>{comments.length}</span> Reviews)</span>
  </section>
  <section className="card-price">
  <div className="price">
  {check ? (
    <>
      <del>{prevPrice}</del> {newPrice}
    </>
  ) : (
   <>${newPrice}</> 
  )}
</div>

 <div className="mark" ><div class="checkmark-icon"/> Verified</div>

</section>
</div>
</section>
  );
}
