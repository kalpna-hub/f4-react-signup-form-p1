import './App.css';
import { useState } from 'react';

function App() { 

  let [name,setName] = useState("");
  let [email,setEmail] = useState("");
  let [password,setPassword] = useState("");
  let [conPassword,setConPassword] = useState("");
  let [message,setMessage] = useState("");
  let [success,setSuccess] = useState(false);

  let validation = ()=>{
    if(name===""||email===""||password===""||conPassword===""){
      setMessage("Error: All the fields are mandatory");
      setSuccess(false);
    }
    else if(password !== conPassword){
      setMessage("Password mismatch")
      setSuccess(false);
    }
    else{
      setSuccess(true);
      setMessage("Successfully Signed Up!")
    }
    console.log(success); 
  }

  return (
    <div className="App-header">
      <h1>Signup</h1>
      <div id="input">
        <label for="name"></label>
        <input type='text' id='name' placeholder='Full Name' color='black' onChange={(e)=>setName(e.target.value)}></input>
      </div>
      <div id="input">
        <label for="email"></label>
        <input type='email' id='email' placeholder='Email' color='black' onChange={(e)=>setEmail(e.target.value)}></input>
      </div>
      <div id="input">
        <label for="password"></label>
        <input type='password' id='password' placeholder='Password' color='black' onChange={(e)=>setPassword(e.target.value)}></input>
      </div>
      <div id="input">
        <label for="con-password"></label>
        <input type='password' id='con-password' placeholder='Confirm Password' color='black' onChange={(e)=>setConPassword(e.target.value)}></input>
      </div>

      <p style={{color:success?'green':'red'}}>{message}</p>
      <button onClick={validation}>Signup</button>
    </div>
  );
}

export default App;
