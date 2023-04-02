import React from "react";
import { Link } from 'react-router-dom';
import './landing.css'

function LandingNavbar() {
    return (
        <nav className="nav-landing" >
            <h2><Link to='/restaurants'>Ristorante</Link></h2>
            {/* <h3><Link to='/restaurants'>All Restaurants</Link></h3> */}
            <h3><Link to='/add-restaurants'>Add a Restaurant</Link></h3>
            <h3><Link to='/my-restaurants'>My Restaurants</Link></h3>
            <h3><Link to='/'>Logout</Link></h3>
        </nav>
    )
}

export default LandingNavbar;