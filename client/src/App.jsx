
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
import { BrowserRouter , Route, Routes, Navigate} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const URL = process.env.REACT_APP_URLD;

function App(){
    const [dataa,newdata] = useState([]);
    const [data,newdat] = useState([]);
    const [login,newlogin] = useState(set());
    const [isAdmin,newadmin] = useState(true);
    const [username,newusername] = useState(true);
   
    
    useEffect(()=>{async function fetch(){
        try{
         const res = await axios.get(`${URL}/data/products`);
        newdata(res.data);
        newdat(res.data);
    }   catch (error) {
            console.error('Error fetching data:', error);
        }} fetch();
    },[]);
   
    async function set()
    {
        await session();
    }

       async function session(){
        try{
         const res = await axios.post(`${URL}/user/verify`,{},{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            console.log("response:",res.data);
         if(res.data==="yes")
         {console.log("response:",res.data);
            newlogin(true);
            const {username , admin } = res.data.decoded;
            newadmin(admin);
            newusername(username);
        }
            else
            newlogin(false);
       
    }   catch (error) {
        newlogin(false);
        }} 

   

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

        <Navigation onAdd={change1} logout={()=>newlogin(false)} is={login} admin={isAdmin}/>
        <ToastContainer />
        <Routes> 
      

        <Route path="/" element={ 
           
             login ?(<><Sidebar onSidepress={change3} />
     

       
         <Recommended onPress={change2}  />
        
         <Products data={dataa}/></>) :<Navigate to="/signin" />}/>


         <Route path="/signin" element={<> <Signin login={()=>newlogin(true)}/> </>} />
         <Route path="/signup" element={<> <Signup/> </>} />
         <Route path="/cart" element={<> <Cart/> </>} />
         <Route path="/profile" element={<> <Profile/> </>} />
        
        </Routes>
    </BrowserRouter>
    );
}






export default App ;