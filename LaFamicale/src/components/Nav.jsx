import React from "react";
import { NavLink } from "react-router-dom";
import logoNav from "../assets/LaFamicale1.png";
import "../styles/nav.css"

function Navbar() {
    return (
        <div className="nav">
            <div className="logo">
            <NavLink to="/"><img className="logo-img" src= {logoNav} alt ="logo LaFamicale" /> </NavLink>
            </div>
            <div className="nav-links">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>
    )
}

export default Navbar ;