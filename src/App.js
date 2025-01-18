
import './App.css';
import Comment from './component/Comment';
import { useEffect } from 'react';
import React from 'react';
import {getPosts} from "./component/api";
function App() {
useEffect(()=>{
  getPosts().then((posts)=>console.log(posts));
} ,[]);

  return (
    <>
   
     <Comment />
  
     
   
     
    </>
  )
}
export default App;
