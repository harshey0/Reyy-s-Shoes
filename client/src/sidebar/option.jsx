import Options from "./options"

export default function Option(props) {

    const options = 
    {"Category":["All","Sneakers","Flats","Sandals","Heels"],"Price":["All","$0 - 50","$50 - 100","$100 - 150","Over $150"],"Color":["All","Black","Blue","Red","Black","White"]};
    
    function search3(name1)
    {
      props.onSidepress2(props.name,name1);
    }

  return (
    <div ><h2 className="side">{props.name}</h2> <div>
    {options[props.name].map((option, index) => (
        <Options key={index} name={option} onSidepress3={search3}/>
      ))} </div></div>
  )
}
