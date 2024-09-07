import './App.css'
import { useState } from 'react';
function App() {

 const [number, setnumber] = useState(10);
 function add(){
  if(number==20)setnumber(number)
    else
  setnumber(number+1);
 }
 function sub(){
  if(number==0)setnumber(number)
    else
  setnumber(number-1);
 }
  return (
    <>
      <div>
          <h1>this is counter project</h1>
          <h2>this is value : {number}</h2>
          <button onClick={add}>increase +</button>
          <button onClick={sub}>decrese -</button>
      </div>
    </>
  )
}

export default App
