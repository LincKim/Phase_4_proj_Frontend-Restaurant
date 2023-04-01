import React, { useEffect, useState } from 'react';
import './restaurantlist.css';

function Myrestaurantlist() {

    const [restaurants, setRestaurants] = useState([]);

    // GET all myrestaurants
    function handleMyRestaurants(e) {
        e.preventDefault();
        fetch("http://127.0.0.1:3000/ristorantes")
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
        fetch(`http://127.0.0.1:3000/ristorantes/${id}`, {
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
                        <p>{restaurant.location 
                        // && (
                        //     fetchLocation(restaurant.location_id)
                        //         .then((location) => location.county)
                        //         .catch(() => "Unknown Location")
                        // )
                        }
                        </p>
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

