
import "../styles/products.css";
import Card from "./card";


export default function Products(props) {
  return (
   <section className="card-container">

  
{props.data.map((data)=><Card img={data.img} 
title={data.title}
star={data.star}
reviews={data.reviews}
prevPrice={data.prevPrice}
newPrice={data.newPrice}/>)}

   
   </section>

   
  );
}
