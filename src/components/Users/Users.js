import React, { useState, useEffect } from 'react';
import './User.css'
const Users = () => {
    const[user,setUser]=useState([]);
    useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json=> setUser(json))
    },[])

    return (
            <div>
               {
                   user.map(users => <h3 class="user">{users.name}</h3>)
               }
             
            </div>
    );
};

export default Users;