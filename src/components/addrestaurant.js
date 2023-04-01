import React, { useState } from "react";
import './addrestaurant.css';

function Restaurant() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [location_id, setLocation_id] = useState(0)
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState("")

    // POST REQUEST
    function handleCreateRestaurant(e){
        e.preventDefault();

        const formData = {
            name,
            email,
            location_id
        }
        console.log(formData)
        fetch("http://127.0.0.1:3000/ristorantes", {
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

    function handleCreateReviews(e) {
        e.preventDefault()

        const formData3 = {
            comment, 
            rating
        }
        fetch('/reviews', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData3)
        }).then((r) => {
            if (r.ok) {
                r.json().then(() => {
                    setComment("")
                    setRating("")
                })
            }
        })
    }
    const nairobi = 1
    const nakuru = 2
    const mombasa = 3

    return (
        <>
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
            <form className="login-form" onSubmit={handleCreateReviews}>
                <h3>Enter Restaurant reviews</h3>
                <label htmlFor="comment">Comment:</label>
                    <input 
                    type="text" 
                    placeholder="Comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    /><br />
                <label htmlFor="rating">Rating:</label>
                    <input 
                    type="number" min="1" max="5" 
                    placeholder="1-5"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required/><br />

                <button className="login-button" type="submit">Add</button>

            </form>
        </div>
        </>
    )
}

export default Restaurant;