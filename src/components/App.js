import React, { useState } from 'react';
import '../App.css';
import {Routes, Route} from "react-router-dom"
import Homepage from "./Homepage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListAllRestaurants from './ListAllRestaurants';
import LoginForm from './Login';
import Signup from './Signup';


function App() {
 const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName) =>{
    setCurrentForm(formName);
  }
  return (
      <>
      <Routes>
          <Route path="/" element={<Homepage/>} />
      </Routes>
      <BrowserRouter>
      <ListAllRestaurants />
    </BrowserRouter>
      <div>
     {
      currentForm === "login" ? <LoginForm onFormSwitch={toggleForm}/> : <Signup onFormSwitch={toggleForm}/>
     }
    </div>
      </>
  )
  
 }

export default App;
