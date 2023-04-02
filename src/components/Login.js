import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';
import Navbar from './Navbar';

function LoginForm(props) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState ({
      username: "",
      password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    fetch("https://restaurant-uauq.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/restaurants");
        setIsLoading(false);

      });
  
  }

  return (
    <>
    <Navbar/>
     <form onSubmit={handleSubmit} className="login-form">
     <h1 id='signn'>Login</h1>
      <label>
        Username:
        <input type="text"  onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
      </label>
      <label>
        Password:
        <input type="password"  onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      </label>

             {!isLoading &&
                   <button type="submit" className="login-button">
                        {" "}  <span>Login</span>
                      </button>}
                      {isLoading &&
                   <button type="submit" className="login-button">
                        {" "}  <span>Logging In....</span>
                      </button>}
      <button type="submit" className="login-button" onClick={()=> props.onFormSwitch('sign up')}>Don't have an account? Signup Here!</button>
    </form>
    </>
  );
}

export default LoginForm;
