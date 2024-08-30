import logo from './logo.svg';
import './App.css';
import background from './images/pic.jpg'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {UC,LC,SC,NC} from './data/passchar';
function App() {
let[upper, setupper]= useState(false)
let[lower, setlower]= useState(false)
let[num, setnum]= useState(false)
let[symb, setsymb]= useState(false)
let[pass,setpass]=useState(10)
let[finalpass,setfinal]=useState('')

let createpass=()=>{
  let finalpass=''
  let charset=''
 
  if(upper|| lower|| num|| symb){
    if(upper) charset+=UC;
    if(lower) charset+=LC;
    if(num) charset+=NC;
    if(symb) charset+=SC;
    // take random index  from allset
    for( let i=0;i<pass;i++){
      finalpass+=charset.charAt(Math.floor(Math.random()*charset.length))
    }
setfinal(finalpass)
  }
  else{
    toast.error("Please one CheckBox!!..:)");
  }
}
let copypass=()=>{
  // object of javascript -navigator and clipboard and writetext is funtion
navigator.clipboard.writeText(finalpass)
}

  return (
    <div className="App">
        <ToastContainer/>
      <div style={{ backgroundImage: `url(${background})`,
     backgroundRepeat: 'no-repeat',
     width:'100vw' , height:'100vh',
     backgroundSize: 'cover' }}>

<div className='box'>
  <h2>Password Generator</h2>

  <div class="passbox">
    <input type='text' onClick={copypass}value={finalpass}readOnly/><button>copy</button>
  </div>


<div className='passlen'>
  <label>Password Length</label>
  <input type='number' max={20} min={10}value={pass} onChange={(event)=>setpass((event.target.value))}></input>
</div>

<div className='check'>
 <label>Inculde uppercase letters</label>
  <input type='checkbox' checked={upper} onChange={()=>setupper(!upper)}/>
</div>
<div className='check'>
 <label>Inculde Lowercase letters</label>
  <input type='checkbox' checked={lower} onChange={()=>setlower(!lower)}/>
</div>

<div className='checkbox'>
 <label>Inculde Numbers</label>
  <input type='checkbox' checked={num} onChange={()=>setnum(!num)}/>
</div>

<div className='checkbox'>
 <label>Inculde Symbols</label>
  <input type='checkbox' checked={symb} onChange={()=>setsymb(!symb)}/>
</div>

<button className='btn' onClick={createpass}>Generate Password</button>
</div>

    </div>
    </div>
  );
}

export default App;
