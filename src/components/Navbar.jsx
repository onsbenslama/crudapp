import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
function Navbar() {
    return <nav className="navbar navbar-dark bg-dark">
        <h4><Link className="link" to="/">Home</Link></h4>
        <h4><Link className="link" to="/note">Notes</Link></h4>
        <h4><Link className="link" to="create">Create Note</Link></h4>

        </nav>

}
export default Navbar;