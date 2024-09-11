import { useState ,useCallback ,useEffect, useRef} from 'react'
import './App.css'

function App() {
const [count,setcount]=useState(8);
const [number,setnumber]=useState(false);
const [character,setcharacter]=useState(false);
const [password,setpassword]=useState("password");
const buttonRef = useRef(null);
const passgene = useCallback(()=>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(number)str+="1234567890";
  if(character)str+="!@#$%^&*()_+-=[]{}|;:',.<>/?`~";
  let size = str.length;
  for(let i=0;i<count;i++){
    pass+=str[Math.floor(Math.random() * (size-1 - 0 + 1)) + 0];
  }
  setpassword(pass);
},[count,number,character])


useEffect(()=>{
passgene();
},[count, number,character])

const handleClick = () => {
  if (buttonRef.current) {
    navigator.clipboard.writeText(password)
    alert("copied");
  }
};
  return (
    <div id="wrapper">
      <div id="mainbox">
        <div id="passwordbar">
          <div id="passwordtext">{password}</div>
          <button  ref={buttonRef} onClick={handleClick} id="copy">copy</button>
        </div>
        <div id="finalfeatures">
          <input onChange={(e)=>{setcount(e.target.value)}} type='range' id="points" min="0" max="16" defaultValue="8"></input>
          <p id="rangenumber">{count}</p>
          <input onChange={()=>{setnumber((prev)=>!prev)}} type="checkbox" id="number"></input>
          <label htmlFor="number">numbers</label>
          <input onChange={()=>{setcharacter((prev)=>!prev)}}type="checkbox" id="character"></input>
          <label htmlFor="character">character</label>
        </div>
      </div>
    </div>  
  )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
export default App
