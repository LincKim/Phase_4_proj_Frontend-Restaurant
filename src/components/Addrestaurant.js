import React, { useState } from "react";
import './addrestaurant.css';
import LandingNavbar from "./LandingNavbar";

function Addrestaurant() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [location_id, setLocation_id] = useState(0)
   

    // POST REQUEST
    function handleCreateRestaurant(e){
        e.preventDefault();

        const formData = {
            name,
            email,
            location_id
        }
        console.log(formData)
        fetch("https://restaurant-uauq.onrender.com/ristorantes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        }).then((r) => {
            if (r.ok) {
                r.json().then(() => {
                    setName("")
                    setEmail("")
                    // setLocation_id(0)
                })
            }
        })
    }

    const nairobi = 1
    const nakuru = 2
    const mombasa = 3

    return (
        <>
        <LandingNavbar/>
        <div className="main2">
            <form className="login-form" onSubmit={handleCreateRestaurant}> 
                <h3>Enter Restaurant details</h3>
                <label htmlFor="name">Name:</label>
                    <input 
                    type="text" 
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    /><br />
                <label htmlFor="email">Email:</label>
                    <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    /><br />
                <label htmlFor="location">Location:</label>
                    <select value={location_id} id="" onChange={(e) => setLocation_id(e.target.value)}>
                        <option value="" disabled></option>
                        <option value={nairobi}>Nairobi</option>
                        <option value={nakuru}>Nakuru</option>
                        <option value={mombasa}>Mombasa</option>
                    </select>
                <button className="login-button" type="submit">Add</button>
            </form>
           
        </div>
        </>
    )
}

export default Addrestaurant;