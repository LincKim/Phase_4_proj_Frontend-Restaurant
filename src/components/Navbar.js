import React from "react";
import '../Navbar.css'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
     <div>
                <div className="header-navigation">
            <nav className="navigation-display">
                <div className="showcase">
                    <NavLink to="/" className="logo-show">
                        <div className="logo-wrapper">
                            <h2><i className="fas fa-project-diagram" id="project-logo"></i><span>Ristorante</span></h2>
                        </div>
                    </NavLink>
                    {/* <ul className="items-nav"> */}
                        {/* <li> <NavLink to="#" className="lists">Abo</NavLink></li>
                        <li> <NavLink href="#" className="lists">Contact</NavLink></li>
                        <li> <NavLink href="#" className="lists">Blog</NavLink></li> */}
                        {/* <li> <NavLink href="#" className="lists">All Restaurants</NavLink></li> */}
                    {/* </ul> */}
                    <ul className="items-nav right-side">
                    <li>
                            <NavLink to="/restaurants" className="logo-show login1">
                                <span>All Restaurants</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" className="logo-show login1">
                                <span>Log In</span>
                            </NavLink>
                        </li>
                        <li>
                            <div className="get-started">
                                <NavLink to="/signup" className="signup">
                                    <span className="gs-show">
                                        <span className="gs-show2">Get Started</span>
                                    </span>   
                                </NavLink>

                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
       
      </div>
    </div> 
    );
}
 
export default Navbar;