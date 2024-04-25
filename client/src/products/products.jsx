
import "../styles/products.css";
import Card from "./card";


export default function Products(props) {
  return (
   <section className="card-container">

  
{props.data.slice().reverse().map((data)=><Card data={data}/>)}

   </section>
  );
}
