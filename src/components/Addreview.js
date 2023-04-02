import { useState } from "react"
import LandingNavbar from "./LandingNavbar"
import { Link } from "react-router-dom"


function Addreview () {

    const [comment, setComment] = useState("")
    const [rating, setRating] = useState("")


    function handleCreateReviews(e) {
        e.preventDefault()

        const formData3 = {
            comment, 
            rating
        }
        fetch('https://restaurant-uauq.onrender.com/reviews', {
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
        <LandingNavbar/>
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

                <button className="login-button" type="submit">
                    Add
                    {/* <Link to="/my-restaurants" style={{color: "white"}}> Add</Link> */}
                </button>

            </form>
        
        
        </>
    )


}

export default Addreview;