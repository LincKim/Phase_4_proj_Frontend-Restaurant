import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import '../Navbar.css'

const Homepage = () => {
    
    
    return ( 
        
    <>
        <Navbar/>
        <div class="homepage">
        <div class="hero">
            <h1>Welcome to Ristorante</h1>
            <p>Discover the best restaurants in the country, reviewed by customers like you</p>
            <Link to="/signup" className="signup">
                <span className="gs-show">
                    <span className="gs-show2">Sign Up</span>
                </span>   
            </Link>
            {/* <p>We are dedicated to helping you discover the best dining experiences in your area. Our platform provides a wealth of information about restaurants in different locations, making it easy for you to find the perfect spot for your next meal.</p> */}
        </div>
        {/* <div class="app">
            <h2> Some of the Featured Restaurants</h2>
            <div class="restaurant">
          
            <button>View Reviews</button>
            </div>
            <div class="restaurant">
            <img src="restaurant2.jpg" alt="Restaurant 2" />
            <h3>Restaurant 2</h3>
            <p>Rating: 4.8/5</p>
            <button>View Reviews</button>
            </div>
            <div class="restaurant">
            <img src="restaurant3.jpg" alt="Restaurant 3" />
            <h3>Restaurant 3</h3>
            <p>Rating: 4.2/5</p>

            </div>
        </div> */}
        </div>
        <footer>
        <div class="container">
            <p>&copy; 2023 Ristorante</p>
        </div>
        </footer>


    </> 
    );
}
 
export default Homepage;