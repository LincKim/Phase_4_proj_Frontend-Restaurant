import React, { useEffect, useState } from 'react';
import './restaurantlist.css';
import { Link } from 'react-router-dom';

function Myrestaurantlist() {

    const [restaurants, setRestaurants] = useState([]);

    // GET all myrestaurants
    function handleMyRestaurants(e) {
        e.preventDefault();
        fetch("https://restaurant-uauq.onrender.com/ristorantes")
            .then((r) => r.json())
            .then((res) => {
                setRestaurants(res);
            });
    }
     // Fetch location data for the given id
    //  function fetchLocation(id) {
    //     return fetch(`http://127.0.0.1:3000/locations/${id}`)
    //         .then((r) => r.json())
    //         .then(res => console.log(res)) 
    // }

    // Delete
    function handleDelete(id) {
        fetch(`https://restaurant-uauq.onrender.com/ristorantes/${id}`, {
            method: "DELETE",
        }).then(() => {
            setRestaurants(restaurants.filter((r) => r.id !== id));
        });
    }

    return (
        <div className="main">
            <div className="card">
                <button onClick={handleMyRestaurants}>My Restaurants</button>
            </div>
            <div className="card-container">
                {restaurants.map((restaurant) => (
                    <div key={restaurant.id} className="card">
                        <p>{restaurant.name}</p>
                        <p>{restaurant.email}</p>
                        <p>Location:</p>
                        <div>
                            {restaurant.location &&
                                Object.entries(restaurant.location).map(([key, value]) => (
                                    key !== "id" && (
                                        <p key={key}>
                                            {key}: {value}
                                        </p>
                                    )
                                ))
                            }
                        </div>
                        <div>
                            {restaurant.reviews &&
                                Object.entries(restaurant.reviews).map(([key, value]) => (
                                <div key={key}>
                                    <p>Comment: {value.comment}</p>
                                    <p>Rating: {value.rating}</p>
                                </div>
                                ))
                            }
                        </div>
                        {/* <Link to="" >
                            <button>Update</button>
                        </Link> */}
                        
                        <button onClick={() => handleDelete(restaurant.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Myrestaurantlist;

