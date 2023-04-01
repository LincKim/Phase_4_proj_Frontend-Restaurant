import React, { useEffect } from 'react';
import './restaurantlist.css';

function Myrestaurantlist() {

    // GET all myrestaurants
    function handleMyRestaurants(e){
        e.preventDefault()

            fetch("http://127.0.0.1:3000/ristorantes")
            .then((r) => r.json())
            .then(res => {
                console.log(res)
                res.forEach(data => {
                    return(
                        <div className="main">
                            <div className="card">
                                <p>{data.name}</p>
                            </div>
                        </div>
                    )
                });
            })
        
    }
    

    // Delete
    function handleDelete(id){
        fetch(`/ristorantes/${id}`, {
            method: "DELETE",
        }).then()
    }

    return(
        <div className="main">

            <div className="card">
                <button onClick={handleMyRestaurants}>My Restaurants</button>
            
            {/* <button onClick={() => handleDelete()}>DELETE</button> */}

            </div>

        </div>
    )

}

export default Myrestaurantlist;