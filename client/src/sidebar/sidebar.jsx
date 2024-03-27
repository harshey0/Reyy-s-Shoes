import "../styles/sidebar.css";
import "../styles/index.css";
import Option from "./option";

export default function Sidebar(props) {

  const sections=["Category", "Price", "Color"];

  function search3(name1,name2)
  {
    props.onSidepress(name1,name2)
  }
  return (
    
    <section className="sidebar">
        
        {sections.map((section, index) => (
        <Option key={index} name={section} onSidepress2={search3}/>
      ))}
    </section>
  )
}
