import React from "react";
import { AiFillStar } from "react-icons/ai";
export default function Card(props) {
    const stars=[ ];
    for (var i=0; i < props.star; i++) {
      stars.push(<AiFillStar key={i} className="rating-star" />)
      } 
  return (
    <section className="card">
<img src={props.img} alt="shoe" />
<div className="card-details">
  <h3 className="card-title">{props.title}</h3>
  <section className="card-reviews">
  
      {stars}
  <span className="total-reviews">{props.reviews}</span>
  </section>
  <section className="card-price">
  <div className="price"><del>{props.prevPrice}</del> {props.newPrice}</div>

<div className="bag"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1 4h14v10a2 2 0 01-2 2H3a2 2 0 01-2-2V4zm7-2.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"></path></svg></div>
</section>
</div>
</section>
  );
}
