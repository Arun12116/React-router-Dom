import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {

    return (
        <>
            <div className="nav-Container">
                <h2 style={{ color: "white" }}>React Router-dom</h2>
                <div className="nav-Bar">
                    <Link to={"/Home"} style={{ textDecoration: "none", color: "white" }}>
                        <li>Home</li>

                    </Link>
                    <Link to={"/Product"} style={{ textDecoration: "none", color: "white" }}>
                        <li>Product</li>

                    </Link>
                    <Link to={"/Technology"} style={{ textDecoration: "none", color: "white" }}>

                        <li>Technologies</li>

                    </Link>
                    <Link to={"/Contact"} style={{ textDecoration: "none", color: "white" }}>
                        <li>Contact</li>

                    </Link>
                </div>
                <div className="logout">
                    <button>Logout</button>

                </div>

            </div>

        </>
    )
}



export default Navbar