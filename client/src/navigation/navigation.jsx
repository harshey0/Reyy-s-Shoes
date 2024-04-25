import "../styles/nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import tokenstore from "../session/tokenstore.js";
import { toast } from 'react-toastify';
import axios from "axios";

const URLS = process.env.REACT_APP_URLS;

export default function Navigation(props) {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [adminMenuOpen, setAdminMenuOpen] = useState(false);

  let name = props.name.charAt(0).toUpperCase() + props.name.slice(1);

  function profilemenu() {
    setProfileMenuOpen(true)
    setTimeout(() => {
      setProfileMenuOpen(false)
    }, 1500);
  }
  

  function adminmenu() {
    setAdminMenuOpen(true)
    setTimeout(() => {
      setAdminMenuOpen(false)
    }, 2250);
  }
  
  async function logout() {
    toast.success('Logout Successful');
    props.logout();
    setProfileMenuOpen(false);
    const res = await axios.post(`${URLS}/user/logout`, {
      withCredentials: true,
    });
    tokenstore(res.data.token);
  }

  function search() {
    props.onAdd(document.getElementById("val").value);
  }

  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="icon">
          <h1>Reyy's Shoes</h1>
        </Link>
        <input
          type="text"
          className="input-search"
          id="val"
          onChange={search}
          onKeyDown={search}
          placeholder="Enter your search shoes..."
        />
      </div>

      <div className="profile-container">
        {props.is && (
          <Link to="/cart" className="profile-sec">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="#ffffff" d="M20.574 4.681c-.353-.374-.85-.597-1.376-.597H5.83c-.526 0-1.023.223-1.376.597-.354.373-.503.874-.413 1.363l.902 6.884a3.008 3.008 0 01-.118.953c-.26 1.154.15 2.335 1.085 3.099a2.976 2.976 0 001.472.474h10.452c.591 0 1.155-.217 1.587-.61.4-.375.615-.874.6-1.392l-.445-7.057c.091-.488-.059-.99-.413-1.363zm-12.498 16.23a1.035 1.035 0 01-.178-.03c-.283-.083-.474-.343-.505-.633L7.016 14H5.83c-.253 0-.487-.14-.606-.366a.908.908 0 01-.075-.785l1.107-3.882c.096-.336.423-.563.779-.563H17.28l.361 2.742H8.73c-.266 0-.507.15-.623.388l-.559 1.56 5.45.002a.65.65 0 00.646-.59l.445-7.057c.006-.096.02-.187.042-.274l-.543.045c-.483.039-.897-.332-.936-.814L15.745 4H7.332l-.88-3.01c-.057-.199-.24-.332-.448-.332H2.678c-.251 0-.478.146-.581.375L1.114 4.043c-.1.348.054.714.352.962l3.74 3.764-1.78 6.246c-.073.257.011.533.205.724.193.19.467.292.746.28l8.937-.739.361 2.742-7.203.595z"/>
            </svg>
            Cart
          </Link>
        )}

        {props.is ? (
          <div className="dropdown">
            <p className="profile-sec" onClick={profilemenu}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="#ffffff" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm0 2a4 4 0 110-8 4 4 0 010 8zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
              {name}
            </p>

            {profileMenuOpen && (
              <div className="drop">
                <Link to="/profile" className="profile-sec dropdown-btn" onClick={()=>setProfileMenuOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="#ffffff" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm0 2a4 4 0 110-8 4 4 0 010 8zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                  </svg>
                  Profile
                </Link>
                <div className="profile-sec dropdown-btn" onClick={logout}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#FFFFFF" d="M16 13L16 11 7 11 7 8 2 12 7 16 7 13z"/>
                    <path fill="#FFFFFF" d="M20,3h-9C9.897,3,9,3.897,9,5v4h2V5h9v14h-9v-4H9v4c0,1.103,0.897,2,2,2h9c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z"/>
                  </svg>
                  Logout
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link to="/signin" className="profile-sec">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#FFFFFF" d="M13 16L18 12 13 8 13 11 4 11 4 13z"/>
              <path fill="#FFFFFF" d="M20,3h-9C9.897,3,9,3.897,9,5v4h2V5h9v14h-9v-4H9v4c0,1.103,0.897,2,2,2h9c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z"/>
            </svg>
            Sign In
          </Link>
        )}

        {props.admin && props.is && (
          <div className="dropdown">
            <p className="profile-sec" onClick={adminmenu}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" stroke="#ffffff" strokeWidth="2" d="M12,11c1.7,0,3-1.3,3-3s-1.3-3-3-3s-3,1.3-3,3S10.3,11,12,11z M12,7c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S11.4,7,12,7z M19.9,21.7L17.6,14c-0.1-0.3-0.4-0.5-0.7-0.5H7.1c-0.3,0-0.6,0.2-0.7,0.5L4.1,21.7c-0.1,0.4,0.1,0.8,0.5,0.9 c0.1,0,0.3,0,0.4-0.1l3.7-2.2l3.7,2.2c0.3,0.2,0.6,0.2,0.9,0c0.1,0,0.2-0.1,0.3-0.1c0.4-0.1,0.6-0.5,0.5-0.9l-0.1-0.3l3.7,2.2 c0.1,0.1,0.3,0.1,0.4,0.1c0.3,0.1,0.5-0.1,0.5-0.5C20,22.2,19.9,22,19.9,21.7z"/>
              </svg>
              Admin
            </p>

            {adminMenuOpen && (
              <div className="drop">


              <Link to="/manageProducts" className="profile-sec dropdown-btn" onClick={()=>setAdminMenuOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path fill="#ffffff" d="M17,19H5V5H17V19ZM19,4H15.82A3,3,0,0,0,14,2H10A3,3,0,0,0,8.18,4H5A2,2,0,0,0,3,6V18a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V6A2,2,0,0,0,19,4ZM9,17H7V15H9V17Zm0-4H7V11H9v2Zm0-4H7V7H9V9Zm6,8H11V15h4v2Zm0-4H11V11h4v2Zm0-4H11V7h4v2Z"/>
</svg>
Products</Link>


                <Link to="/manageOrders" className="profile-sec dropdown-btn" onClick={()=>setAdminMenuOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path fill="#ffffff" d="M9,6H21V8H9V6Z M9,11H21V13H9V11Z M9,16H21V18H9V16Z M4,6V20H20V6H4Z"/>
</svg>
Orders</Link>
               
                <Link to="/manageUsers" className="profile-sec dropdown-btn" onClick={()=>setAdminMenuOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <path fill="#ffffff" d="M12,2C9.79,2 8,3.79 8,6C8,8.21 9.79,10 12,10C14.21,10 16,8.21 16,6C16,3.79 14.21,2 12,2M5,22H19V20C19,17.79 16.21,16 14,16H10C7.79,16 5,17.79 5,20V22M12,4C13.1,4 14,4.9 14,6C14,7.1 13.1,8 12,8C10.9,8 10,7.1 10,6C10,4.9 10.9,4 12,4M20,14C21.1,14 22,14.9 22,16V20C22,21.1 21.1,22 20,22H18V14H20M4,14H2V20C2,21.1 2.9,22 4,22H8V20H4V14Z" />
</svg>
Users</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
