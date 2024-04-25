import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/manageusers.css";
import LoadingPage from "../loading/loading"
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom';

export default function ManageUsers() {

  const navigate = useNavigate();
  const URLS = process.env.REACT_APP_URLS;
  const [users, setUsers] = useState([]);
  const [loading ,setloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8);

  useEffect(() => {
    fetch();
  }, []);

  async function fetch()
  {
    try{
      const res = await axios.post(`${URLS}/user/users`)
      setloading(false);
      setUsers(res.data);
    }
    catch(error)
    {
      console.log(error)
    }
  }

  async function userdel(id)
  {
    try{
      const response = await axios.delete(`${URLS}/user/userdel/${id}`)
      setloading(true)
    await fetch();
       toast(response.data);
    }
    catch(error)
    {
      console.log(error)
    }
  }
  async function makeAdmin(id)
  {
    try{
      const response = await axios.post(`${URLS}/user/makeAdmin/${id}`)
      setloading(true)
    await fetch();
       toast(response.data);
    }
    catch(error)
    {
      console.log(error)
    }
  }

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);




  if(loading)return <LoadingPage/>
  else
  return (
    <div className='manageusers'>
      <h1>Manage Users</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Is Admin</th>
            <th>Make Admin</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.reverse().map(user => (
            <tr key={user._id}>
              <td>{user._id.toString().slice(-19)}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.isAdmin ? 'Yes' : 'No'}</td>
              <td>{user.isAdmin ? '-' : <button className="view-button" onClick={()=>makeAdmin(user._id)}>Yes</button>}</td>
              <td className='actionn'>
                
                {user.isAdmin ? '-' : <>
                <button className="view-button" onClick={()=>navigate(`/profile/${user._id}`)}>View & Edit</button>
                <button className="delete-button" onClick={()=>userdel(user._id)}>Delete</button></>}
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, i) => (
          <button key={i} className="pagination-button" onClick={() => paginate(i + 1)}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
}
