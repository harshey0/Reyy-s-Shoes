import Navigation from "./navigation/navigation";
import Products from "./products/products";
import Recommended from "./recommended/recommended";
import Sidebar from "./sidebar/sidebar";
import data from "./db/data"


const dataa = data;
function App(){


return(<div>
<Sidebar />
<Navigation />
<Recommended />

<Products/>

</div>

    );
}






export default App ;
export {dataa} ;
