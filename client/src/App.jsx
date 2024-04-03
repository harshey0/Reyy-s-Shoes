
import Navigation from "./navigation/navigation";
import Products from "./products/products";
import Recommended from "./recommended/recommended";
import Sidebar from "./sidebar/sidebar";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Cart from "./pages/cart"
import Profile from "./pages/profile";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter , Route, Routes} from 'react-router-dom';

function App(){
    const [dataa,newdata] = useState([]);
    const [data,newdat] = useState([]);
    useEffect(()=>{async function fetch(){
        try{
         const res = await axios.get("/api/data");
         console.log(res.data);
        newdata(res.data);
        newdat(res.data);
    }   catch (error) {
            console.error('Error fetching data:', error);
        }} fetch();
    },[]);

   

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
                default: filter = data;
    }}
    else if(name2==="All")
    filter=data;
    else
    filter=data.filter(item=>name2.toLowerCase()===item[name1.toLowerCase()].toLowerCase());
    newdata(filter);
}
    
      

return(
    <BrowserRouter>

        <Navigation onAdd={change1}  />
        <Routes> 

        <Route path="/" element={ <>
        <Sidebar onSidepress={change3} />
     

       
         <Recommended onPress={change2}  />
        
         <Products data={dataa}/> </>} />
         <Route path="/signin" element={<> <Signin/> </>} />
         <Route path="/signup" element={<> <Signup/> </>} />
         <Route path="/cart" element={<> <Cart/> </>} />
         <Route path="/profile" element={<> <Profile/> </>} />
          <Route path="*" element={<> <Sidebar onSidepress={change3} />
     

       
     <Recommended onPress={change2}  />
    
     <Products data={dataa}/></>} />
        </Routes>
    </BrowserRouter>
    );
}






export default App ;