import React, { useState } from 'react';
import axios from "axios";
import "./index.css"
import { useNavigate } from 'react-router-dom';

const LoginSignUp = () => {
  const navigate=useNavigate('')
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_Password] = useState('');
  const[mobile,setNumbers]=useState('')
  const[validn,setValidn]=useState(true)
  const [valide, setValide] = useState(true);
  const [validp, setValidp] = useState(true);
  const [validpp, setValidpp] = useState(true);
  const[validph,setValidph]=useState(true)
  const [color, setColor] = useState("white")

  const validateName=(username)=>{
    setColor("red")
    const nameRegex=/^[A-Za-z\s'-]{3,}$/
    return nameRegex.test(username)
  }
  const validateEmail = (email) => {
    setColor("red")
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };
  
  const validatePassword = (password) => {
    setColor("red")
    const passwordRegex = /^[a-z]{8,}$/;
    return passwordRegex.test(password);
  };
const validateNumber=(mobile)=>{
  setColor("red")
  return mobile.length===10
}
const handleApi=()=>{
  console.log({username,email,password,mobile})
  axios.post('https://fantasyleague-pl7o.onrender.com/user/newUser',{
    username:username,
    email:email,
    password:password,
    mobile:mobile
  },{
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(result=>{
    console.log(result)
    localStorage.setItem('token',result.data.token)
    navigate('/login')
  })
  .catch(error=>{
    console.log(error)
  })

}
const handleSubmit = (e) => {
    e.preventDefault();
    const isNameValid=validateName(username)
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const doPasswordsMatch = password === confirm_password;
    const isNumberValid=validateNumber(mobile)

    setValidph(isNumberValid)
    setValidn(isNameValid);
    setValide(isEmailValid);
    setValidp(isPasswordValid);
    setValidpp(doPasswordsMatch);

    if (isEmailValid && isPasswordValid && doPasswordsMatch && isNumberValid) {
      alert('Registration successful!');
      handleApi();
    } else {
      alert('Registration failed. Please check your information.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Create a New Account </h1>
        <div class="heading">
          <p>Name:</p>
        </div>
          <div className="input">
          
            <input
              type="text"
              value={username}
              color={color}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              style={{borderColor:`${validn ? "black" : "red"}`}}
            />
                      {!validn && (<div className="error">Enter a valid name</div>) }
                      
          </div>
          <div class="heading">
          <p>Email:</p>
        </div>
          <div className="input">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              style={{borderColor:`${valide ? "black" : "red"}`}}
            />
            {!valide && <div className="error">Enter a valid email</div>}
          </div>
          <div class="heading">
          <p>Password:</p>
        </div>
          <div className="input">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={{borderColor:`${validp? "black" : "red"}`}}
            />
            {!validp && (
              <div className="error">
                Password should be at least 8 characters with at least one <br/>lowercase letter, one uppercase letter, one digit,<br/> and one special character.
              </div>
            )}
          <div class="heading">
          <p>Confirm password:</p>
        </div>
          <div className="input">
          <input
            type="password"
            value={confirm_password}
            onChange={(e) => setConfirm_Password(e.target.value)}
            placeholder="Confirm password"
            style={{borderColor:`${validpp ? "black" : "red"}`}}
          />
          {!validpp && <div className="error">Passwords do not match</div> }
        </div>
        <div class="heading">
          <p>Phone Number:</p>
        </div>
        < div className="input">
          <input 
          type="number"
          value={mobile}
          onChange={(e)=>setNumbers(e.target.value)}
          placeholder="Phone number"
          style={{borderColor:`${validph ? "black" : "red"}`}}
        />
        </div>
        {!validph && <div className="error">Phone number has error</div>}
        </div>
       
        <div className="submit-container">
          <button className="Login" type="submit">
            Register
          </button>
          
        </div>
      </form>
     <p>Already have an account?<a href='./Login'>Login</a></p>
    </div> 
  );
};
export default LoginSignUp;
