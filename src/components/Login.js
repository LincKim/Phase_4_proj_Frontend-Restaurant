import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("./login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
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
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit" className="login-button">Login</button>

      <button type="submit" className="login-button" onClick={()=> props.onFormSwitch('sign up')}>Don't have an account? Signup Here!</button>
    </form>
    </>
  );
}

export default LoginForm;
