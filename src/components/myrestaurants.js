import React, { useEffect } from 'react';
import './restaurantlist.css';

function Myrestaurantlist() {

    // GET all myrestaurants
    useEffect(() => {
        fetch("/ristorantes")
        .then((r) => r.json())
        .then(res => console.log(res))
    })

    // Delete
    function handleDelete(id){
        fetch(`/ristorantes/${id}`, {
            method: "DELETE",
        }).then()
    }

    return(
        <div className="main">

            <div className="card">
            
            <button onClick={() => handleDelete()}>DELETE</button>

            </div>

        </div>
    )

}

export default Myrestaurantlist;