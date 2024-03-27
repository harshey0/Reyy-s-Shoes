
import "../styles/recommended.css";
import Button from "./button";

export default function Recommended(props) {

  function search2(val)
  {
      props.onPress(val);
  }
  const butons =["All Products","Nike","Adidas","Puma","Vans"]
  return (
    <div className="recommended"> 
      <h2>Recommended</h2>
      <div className="recommended-buttons">
        
        {butons.map((butons,index)=><Button key={index} onPress2={search2} name={butons}/>)}
      </div>
    </div>
  )
}
