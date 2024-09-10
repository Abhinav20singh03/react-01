import './App.css'
import { useState } from 'react'
function App() {  
  const [color,setcolor]=useState("black");
  return (
    <div id="wrapper" style={{backgroundColor:color}}>
      <div id="navi">
        <button className='buttons' style={{backgroundColor:"Blue"}} onClick={()=>{setcolor("Blue")}}>blue</button>
        <button className='buttons' style={{backgroundColor:"Red"}} onClick={()=>{setcolor("Red")}}>Red</button>
        <button className='buttons' style={{backgroundColor:"green"}} onClick={()=>{setcolor("green")}}>green</button>
        <button className='buttons' style={{backgroundColor:"yellow"}} onClick={()=>{setcolor("yellow")}}>yellow</button>
        <button className='buttons' style={{backgroundColor:"pink"}} onClick={()=>{setcolor("pink")}}>pink</button>
        <button className='buttons' style={{backgroundColor:"purple"}} onClick={()=>{setcolor("purple")}}>purple</button>
      </div>
    </div>
  )
}

export default App
