import Navigation from "./navigation/navigation";
import Products from "./products/products";
import Recommended from "./recommended/recommended";
import Sidebar from "./sidebar/sidebar";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Cart from "./pages/cart";
import Profile from "./pages/profile";
import Productdetails from "./pages/productdetails";
import Forget from "./pages/forget";
import Reset from "./pages/reset";
import tokenstore from "./session/tokenstore";
import LoadingPage from "./loading/loading";
import Orderdetails from "./pages/orderdetails";
import SuccessPage from "./stripe/successPage";
import FailPage from "./stripe/failPage";
import ManageOrders from "./Admin/orders";
import ManageProducts from "./Admin/products";
import ManageUsers from "./Admin/users";
import UserProfile from "./Admin/pages/userProfile";
import CreateProduct from "./Admin/pages/createproduct";
import EditProduct from "./Admin/pages/editproduct";
import axios from "axios";
import $ from 'jquery';
import { useState, useEffect } from "react";
import { BrowserRouter , Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';


const URLS = process.env.REACT_APP_URLS;
function useHandleCallback() {
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const token = searchParams.get('token');
        if (token) {
            tokenstore(token);
            toast.success("Google authentication successful")
        }
    }, []);
}



function App(){
    const [dataa,newdata] = useState([]);
    const [data,newdat] = useState([]);
    const [login,newlogin] = useState(false);
    const [value,newvalue] = useState({username:"",isAdmin:false,email:""});
    const [loading, setLoading] = useState(true);
    
   
    useHandleCallback();
    
    useEffect(()=>{
        
        fetch(); set(); 
        // console.log(window.location.pathname)
    },[]);

    async function fetch(){
        try{
         const res = await axios.post(`${URLS}/data/products`);
        newdata(res.data);
        newdat(res.data);
    }   catch (error) {
            console.error('Error fetching data:', error);
        }} 
        async function set(){
            newlogin(await session());
            setLoading(false);
        }; 


    async function session(){
        try{
            newdata(data);
         const res = await axios.post(`${URLS}/user/verify`,{},{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
         if(res.data.message && res.data.message==="yes")
         {
            const {username , admin , email } = res.data.decoded;
            // console.log("yes",username, admin,email)
            newvalue({isAdmin:admin,email:email,username:username });
           return (true);
        }
            else
            {
                return (false);}
       
    }   catch (error) {
        return (false);
        }}
   

function change1(title)
{
    $('input[type="radio"]').prop('checked', false);
    $("button").css("background-color", "white");
    const normalizedTitle = title.toLowerCase().replace(/\s+/g, ' '); 
var filter = data.filter(item => {
    const normalizedItemTitle = item.title.toLowerCase().replace(/\s+/g, ' '); 
    return normalizedItemTitle.includes(normalizedTitle);
});
newdata(filter);
}

function change2(name)
{
    $('input[type="radio"]').prop('checked', false);
    var filter=[];
    if(name==="All Products")
    filter=data;
    else
    filter=data.filter(item=>name===item.company);
    newdata(filter);
    
}

function change3(name1,name2)
{

    $("button").css("background-color", "white");
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
    
if (loading) {
    return (<LoadingPage/>)

}
else
return(
    
    <BrowserRouter>

        <Navigation onAdd={change1} logout={()=>newlogin(false)} is={login} admin={value.isAdmin} name={value.username}/>
        <ToastContainer />
        <Routes> 
      

        <Route path="/" element={ 
          
             login ?(<><Sidebar onSidepress={change3} />
         <Recommended onPress={change2}  />
        
         <Products data={dataa}/></>) :<Navigate to="/signin" />}/>


         
         {login ? (<>
         <Route path="/cart" element={<> <Cart name={value.username} em={value.email}/> </>} />
         <Route path="/success/:tokens/:tokenf" element={<> <SuccessPage name={value.username}/> </>} />
         <Route path="/fail/:token" element={<> <FailPage/> </>} />
         <Route path="/profile" element={<> <Profile  name={value.username} em={value.email} set={session}/> </>} />
         <Route path="/order/:id" element={<> <Orderdetails /> </>} />
         <Route path="/details/:id" element={<> <Productdetails name={value.username} admin={value.isAdmin}/> </>} />
         <Route path="/manageProducts" element={<> <ManageProducts  set={fetch}/> </>} />
         <Route path="/manageOrders" element={<> <ManageOrders /> </>} />
         <Route path="/manageUsers" element={<> <ManageUsers /> </>} />
         <Route path="/profile/:id" element={<> <UserProfile /> </>} />
         <Route path="/createProduct" element={<> <CreateProduct  set={fetch}/> </>} />
         <Route path="/editProduct/:id" element={<> <EditProduct  set={fetch}/> </>} />
         </>):(<>
         <Route path="/signin" element={<> <Signin login={()=>newlogin(true)} set={session}/> </>} />
         <Route path="/signup" element={<> <Signup/> </>} />
         <Route path="/forget" element={<> <Forget/> </>} />
         <Route path="/reset/:id/:token" element={<> <Reset/> </>} />
         </>)}

         <Route path="*" element={login ?<> <Navigate to="/" /></>:<><Navigate to="/signin" /> </>} />

        
        </Routes>
    </BrowserRouter>
    );
}





export default App ;