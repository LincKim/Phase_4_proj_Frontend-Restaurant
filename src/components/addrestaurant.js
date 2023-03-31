import React, { useState } from "react";
import './addrestaurant.css';

function Restaurant() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [county, setCounty] = useState("")
    const [street, setStreet] = useState("")
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState("")

    // POST REQUEST
    function handleCreateRestaurant(e){
        e.preventDefault();

        const formData = {
            name,
            email
        }
        fetch("/ristorantes", {
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
                })
            }
        })
    }

    function handleCreateLocation(e){
            e.preventDefault()

            const formData2 = {
                county,
                street
            }
            fetch('/locations', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData2)
            }).then((r) => {
                if (r.ok) {
                    r.json().then(() => {
                        setCounty("")
                        setStreet("")
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
                <button className="login-button" type="submit">Add</button>
            </form>
            <form className="login-form" onSubmit={handleCreateLocation}>
                <h3>Enter Restaurant location</h3>
                <label htmlFor="county">County:</label>
                    <input 
                    type="text" 
                    placeholder="County"
                    value={county}
                    onChange={(e) => setCounty(e.target.value)}
                    /><br />
                <label htmlFor="street">Street:</label>
                    <input 
                    type="text" 
                    placeholder="Street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    /><br />
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