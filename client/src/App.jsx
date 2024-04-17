
import Navigation from "./navigation/navigation";
import Products from "./products/products";
import Recommended from "./recommended/recommended";
import Sidebar from "./sidebar/sidebar";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Cart from "./pages/cart"
import Profile from "./pages/profile";
import Forget from "./pages/forget"
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter , Route, Routes, Navigate} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const URLS = process.env.REACT_APP_URLS;

function App(){
    const [dataa,newdata] = useState([]);
    const [data,newdat] = useState([]);
    const [login,newlogin] = useState(false);
    const [isAdmin,newadmin] = useState(false);
    const [username,newusername] = useState("");
    const [loading, setLoading] = useState(true);
   
    
    useEffect(()=>{async function fetch(){
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
        
        fetch(); set(); 
    },[]);
   
   
   

    async function session(){
        try{
         const res = await axios.post(`${URLS}/user/verify`,{},{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
         if(res.data.message && res.data.message==="yes")
         {
            
            const {username , admin } = res.data.decoded;
            console.log("yes",username, admin)
            newadmin(admin);
            newusername(username);
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
    
if (loading) {
    return <div className="loading">
    <div class="load">
        <h1>Loading... </h1>
         <h3>This is Harshit Sethi's Website</h3> 
        
        <ul class="facts">
        <h5>Who is Harshit Sethi?</h5>
        <li>Passionate and dedicated web developer</li>
            <li>Innovative thinker, constantly seeking new ideas</li>
            <li>Detail-oriented with a keen eye for design</li>
            <li>Excellent problem solver, loves challenges</li>
            <li>Strong communicator, values collaboration</li>
            <li>Resilient and determined, never gives up easily</li>
            <li>Continuous learner, always expanding skills</li>
            <li>Organized and efficient, meets deadlines consistently</li>
            <li>Strives for excellence in every aspect of work</li>
            <li>Inspires others with his dedication and hard work</li>
            <li>Committed to personal and professional growth</li>
            <li>Enthusiastic about making a positive impact</li>
            <li>Driven by a desire to create meaningful experiences</li>
        </ul>
    </div>
</div>
}
else
return(
    
    <BrowserRouter>

        <Navigation onAdd={change1} logout={()=>newlogin(false)} is={login} admin={isAdmin} name={username}/>
        <ToastContainer />
        <Routes> 
      

        <Route path="/" element={ 
          
             login ?(<><Sidebar onSidepress={change3} />
     

       
         <Recommended onPress={change2}  />
        
         <Products data={dataa}/></>) :<Navigate to="/signin" />}/>


         <Route path="/signin" element={<> <Signin login={()=>newlogin(true)} set={session}/> </>} />
         <Route path="/signup" element={<> <Signup/> </>} />
         {login && (<><Route path="/cart" element={<> <Cart/> </>} />
         <Route path="/profile" element={<> <Profile/> </>} /></>)}

         <Route path="/forget" element={<> <Forget/> </>} />

         <Route path="*" element={login ?<> <Navigate to="/" /></>:<><Navigate to="/signin" /> </>} />

        
        </Routes>
    </BrowserRouter>
    );
}






export default App ;