import React, { useState } from "react";

function Restaurant() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [county, setCounty] = useState("")
    const [street, setStreet] = useState("")
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState("")

    // POST REQUEST
    function handleCreate(e){
        e.preventDefault();

        const formData = {
            name,
            email,
            county,
            street,
            comment,
            rating
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
                    setCounty("")
                    setStreet("")
                    setComment("")
                    setRating("")
                    
                })
            }
        })

    }

    return (
        <>
        <form onSubmit={handleCreate}> 
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

            <button type="submit">Add</button>

        </form>
        
        </>
    )
}

export default Restaurant;