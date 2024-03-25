import Navigation from "./navigation/navigation";
import Products from "./products/products";
import Recommended from "./recommended/recommended";
import Sidebar from "./sidebar/sidebar";
import data from "./db/data"
import { useState } from "react";


function App(){
    const [dataa,newdata] = useState(data);
    const [dataa2,newdata2] = useState(data);
    const [dataa3,newdata3] = useState(dataa);

function change1(title)
{
    const filter=dataa2.filter(item=>item.title.toLowerCase().startsWith(title.toLowerCase()));
    newdata(filter);
    newdata3(filter);
}

function change2(name)
{
    var filter=[];
    if(name=="All Products")
    filter=data;
    else
    filter=dataa3.filter(item=>name==item.company);
    newdata(filter);
    newdata2(filter);
}

return(<div>
<Sidebar />
<Navigation onAdd={change1} />
<Recommended onPress={change2}/>

<Products data={dataa}/>

</div>

    );
}






export default App ;