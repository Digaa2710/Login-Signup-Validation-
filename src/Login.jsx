import React, { useState,useEffect} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom'

function Login(){
  const navigate=useNavigate()
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      
    }
  },[])
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }
  const handleApi=()=>{
    
      console.log({email,password})
      axios.post('https://fantasyleague-pl7o.onrender.com/user/userLogin',{
       
        email:email,
        password:password,
      
      },{
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(result=>{
        console.log(result)
       
      
      })
      .catch(error=>{
        console.log(error)
      })
    
  }
  const handleLogout = () => {
    localStorage.removeItem('token');
   navigate('/register')
  };
  return(
    <div className ="App">
      Email:<input value={email} onChange={handleEmail} type="text"/><br/>
      Password:<input value={password} onChange={handlePassword} type="text"/>
     
      <button onClick={handleApi}>Login</button><br/><br/>
      <button onClick={handleLogout}>Log out</button>
    </div>
  
  );
}

export default Login;
