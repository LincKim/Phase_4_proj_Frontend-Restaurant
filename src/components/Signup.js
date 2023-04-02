import React, { useState } from 'react';
import './LoginForm.css';
import Navbar from './Navbar';
import { useNavigate, Link } from "react-router-dom";



function Signup(props) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState ({
    username: "",
    email: "",
    password: "",
    
  });
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsLoading(true)
    fetch("https://restaurant-uauq.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if(response.ok){
            response.json().then((data) =>  {
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/login");
            setIsLoading(false);
          });
        } else{
          console.log("Error in Signup");
      }
      })
      
  }

  return (
    <>
    <Navbar/>
    
     <form onSubmit={handleSubmit} className="login-form">
     <h1 id='signn'>Signup</h1>
    <label>
      Username:
      <input type="text"   onChange={(e) => setFormData({ ...formData, username: e.target.value })}/>
    </label>
    <label>
      Email:
      <input type="text"   onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
    </label>
    <label>
      Password:
      <input type="password"  onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
    </label>
    {!isLoading &&
                   <button type="submit" className="login-button">
                        {" "}  <span>Sign Up</span>
                      </button>}
                      {isLoading &&
                   <button type="submit" className="login-button">
                        {" "}  <span>Redirecting to Login....</span>
                      </button>}

    <button type="submit" className="login-button" onClick={() => props.onFormSwitch('login')}>Have an account? Login Here!</button>
    </form>
 

    </>
  )
}

export default Signup