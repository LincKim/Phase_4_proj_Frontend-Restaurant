import React, { useState } from 'react';
// import '../App.css';
import {Routes, Route} from "react-router-dom"
import Homepage from "./Homepage";
import ListAllRestaurants from './ListAllRestaurants';
import LoginForm from './Login';
import Signup from './Signup';
import MyRestaurantList from './MyRestaurantList';
import LandingNavbar from './LandingNavbar';
import Addrestaurant from './Addrestaurant';
import Addreview from './Addreview';


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
          <Route path='/my-restaurants' element={<MyRestaurantList/>}/>
          <Route path='/landing' element={<LandingNavbar/>}/>
          <Route path='/add-restaurants' element={<Addrestaurant/>}/>
          <Route path='/add-review' element={<Addreview/>}/>
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
