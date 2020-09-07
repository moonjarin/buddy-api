import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import './Details.css';

const Details = () => {
    const {postid}=useParams();
    const[posts,setPosts]=useState({});
    const[comments,setComments]=useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postid}`)
        .then(response => response.json())
  .then(json => setComments(json))
    },[] )


    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
        .then(response => response.json())
  .then(json => setPosts(json))
    },[] )

    return (
        <div>
            <div className="display">
            <h1>this is detail of:{postid}</h1>
    <h3>title:{posts.title}</h3>
    <h4><p>{posts.body}</p></h4>
    <h3>comments:</h3>
            </div>
           
    {
        comments.map(comment=><Comments comment={comment}></Comments>)

    }
    
        </div>
    );
};

export default Details;