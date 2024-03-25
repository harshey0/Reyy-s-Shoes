import Navigation from "./navigation/navigation";
import Products from "./products/products";
import Recommended from "./recommended/recommended";
import Sidebar from "./sidebar/sidebar";
import data from "./db/data"
import { useState } from "react";


function App(){
    const [dataa,newdata] = useState(data);

   

function change1(title)
{
    var filter=data.filter(item=>item.title.toLowerCase().startsWith(title.toLowerCase()));
    newdata(filter);
}

function change2(name)
{
    var filter=[];
    if(name==="All Products")
    filter=data;
    else
    filter=data.filter(item=>name===item.company);
    newdata(filter);
    
}

function change3(name1,name2)
{


    var filter=[];
    const check = ["$0 - 50","$50 - 100","$100 - 150","Over $150"];
    if (check.includes(name2)) {
        const index = check.indexOf(name2);
        switch (index) {
            case 0:
                filter=data.filter(item=>item.newPrice>=0&&item.newPrice<50);
                break;
            case 1:
                filter=data.filter(item=>item.newPrice>=50&&item.newPrice<100);
                break;
            case 2:
                filter=data.filter(item=>item.newPrice>=100&&item.newPrice<150);
                break;
            case 3:
                filter=data.filter(item=>item.newPrice>=150);
                break;
    }}
    else if(name2==="All")
    filter=data;
    else
    filter=data.filter(item=>name2.toLowerCase()===item[name1.toLowerCase()].toLowerCase());
    newdata(filter);
}
    
      

return(<div>
<Sidebar onSidepress={change3}/>
<Navigation onAdd={change1} />
<Recommended onPress={change2}/>

<Products data={dataa}/>

</div>

    );
}






export default App ;