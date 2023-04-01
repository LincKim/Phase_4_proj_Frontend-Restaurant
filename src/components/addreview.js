import { useState } from "react"


function Review () {

    const [comment, setComment] = useState("")
    const [rating, setRating] = useState("")


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
        
        
        </>
    )


}

export default Review;