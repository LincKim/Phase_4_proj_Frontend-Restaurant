import React, { useEffect, useState } from "react";
import LandingNavbar from "./LandingNavbar";

function ListAllRestaurants() {
    const[restaurants, setResturants] = useState([])

    useEffect(() => {
        fetch('https://restaurant-uauq.onrender.com/ristorantes')
        .then(res=>res.json())
        .then(data=>setResturants(data))
    }, [])
      
    return (
        <>
            <LandingNavbar />
            <div className="cards-container">
                { restaurants.map(restaurant => (
                    <div className="restaurants-card" >
                    <h2>Restaurant Name: {restaurant.name}</h2>
                    <h4>Email: {restaurant.email}</h4>
                    <h4>County: {restaurant.location.county}</h4>
                    <h4>Street:{restaurant.location.street}</h4>
                    {restaurant.reviews.map(review=>
                        <>
                        <h4>Rating: {review.rating}</h4>
                        <h4>Comment: {review.comment}</h4>
                        </>
                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default ListAllRestaurants;