import React from "react";
import { Link } from "react-router-dom";

// component whithout state : the best is stateless component
export const Header = (props) =>{
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        {/* <li><Link to="/">Root</Link></li> */}
                        <li><Link to="/home" style={{color: "white",backgroundColor:"grey"}}>Home</Link></li>
                        <li><Link to="/user/">User</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};