
import "../styles/products.css";
import Card from "./card";


export default function Products(props) {
  return (
    <div className="contain">
   <section className="card-container">

  
{props.data.slice().reverse().map((data)=><Card data={data}/>)}

   </section></div>
  );
}
