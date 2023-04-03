import React, { useEffect, useState } from 'react';
import './restaurantlist.css';
import { Link} from 'react-router-dom';
import LandingNavbar from './LandingNavbar';
import './landing.css';

function Myrestaurantlist() {

    const [restaurants, setRestaurants] = useState([]);

    // GET all myrestaurants
    useEffect(
        () => {
            fetch("https://restaurant-uauq.onrender.com/ristorantes")
            .then((r) => r.json())
            .then((res) => {
                setRestaurants(res);
            });
        }

    )

    
      
    
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
        <>
        <LandingNavbar />
        <div className="mai">
           
     
            <div className="cards-container">
                {restaurants.map((restaurant) => (
                    <div key={restaurant.id} className="restaurants-card">
                        <h2>{restaurant.name}</h2>
                        <h4>Email: {restaurant.email}</h4>
                        <h4>Location:</h4>
                        <div>
                            {restaurant.location &&
                                Object.entries(restaurant.location).map(([key, value]) => (
                                    key !== "id" && (
                                        <h4 key={key}>
                                            {key}: {value}
                                        </h4>
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
                        <Link to="/add-review" >
                            <button>Update</button>
                        </Link>
                        
                        <button onClick={() => handleDelete(restaurant.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

export default Myrestaurantlist;

