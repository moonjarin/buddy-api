import React, { useState, useEffect } from 'react';
import Display from '../Display/Display'    
function Posts(){
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json=> setPosts(json))
    },[])

    return (
        <div>
           {
                posts.map(post=><Display post={post}></Display>)
           }
        </div>
    );
    }
export default Posts;