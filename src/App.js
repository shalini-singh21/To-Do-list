
import './App.css';
import Input from './component/Input';
import React from 'react';
import ComponentA from './ComponentA';
// import Commentlist from './component/Comment';
import Comment from './component/Comment';

function App() {
  const comentobj = [
    { id: 1, user: "alice", text: "hi i am shalini" },
    { id: 2, user: "shalu", text: "hi i am shalu" },
    { id: 3, user: "jiya", text: "hi i am jiya" },

  ];
  return (
    <>
      <Input />

      <ComponentA />
      <Comment comments={comentobj} />
    </>
  )
}
export default App;
