import React, { useState } from 'react';
// import '../App.css';
import {Routes, Route} from "react-router-dom"
import Homepage from "./Homepage";
import ListAllRestaurants from './ListAllRestaurants';
import LoginForm from './Login';
import Signup from './Signup';


function App() {
//  const [currentForm, setCurrentForm] = useState('login')

//   const toggleForm = (formName) =>{
//     setCurrentForm(formName);
//   }
  return (
      <>
      <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/restaurants' element={<ListAllRestaurants/>}/>
      </Routes>
      {/* <div>
     {
      currentForm === "login" ? <LoginForm onFormSwitch={toggleForm}/> : <Signup onFormSwitch={toggleForm}/>
     }
    </div> */}
      </>
  )
  
 }

export default App;
