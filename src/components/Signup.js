import React, { useState } from 'react';
import './LoginForm.css';



function Signup(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleEmailChange  = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    fetch("https://restaurant-uauq.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password}),
      })
        .then((r) => r.json())
        .then((user) =>  (user));
  }

  return (
    <>
     <form onSubmit={handleSubmit} className="login-form">
    <label>
      Username:
      <input type="text" value={username} onChange={handleUsernameChange} />
    </label>
    <label>
      Email:
      <input type="text" value={email} onChange={handleEmailChange} />
    </label>
    <label>
      Password:
      <input type="password" value={password} onChange={handlePasswordChange} />
    </label>
    <button type="submit" className="login-button">Signup</button>
    <button type="submit" className="login-button" onClick={() => props.onFormSwitch('login')}>Have an account? Login Here!</button>
    </form>
 

    </>
  )
}

export default Signup