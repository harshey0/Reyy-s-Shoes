
import "../styles/products.css";
import Card from "./card";

import {dataa} from "../App";

export default function Products() {
  return (
   <section className="card-container">

  
{dataa.map((data)=><Card img={data.img} 
title={data.title}
star={data.star}
reviews={data.reviews}
prevPrice={data.prevPrice}
newPrice={data.newPrice}/>)}

   
   </section>

   
  );
}
