import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import style from "./Navbar.module.css"
import { AuthContext } from '../../Context/AuthContect'

export default function Navbar() {
    let navgateToLogIN = useNavigate()

    let { userIsloggedIn, setUserIsloggedIn } = useContext(AuthContext)
    function logout() {
        setUserIsloggedIn(false)
        localStorage.removeItem("token")
        navgateToLogIN("/login")


    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <i className={`fa-solid fa-cart-shopping  ${style["nav-icon"]}`}></i>
                    <Link className="navbar-brand fw-bold" to={"/home"}>Freesh Cart</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {userIsloggedIn ? <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to={"/home"}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/products"}>Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/categories"}>Categories</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/cart"}>Cart</NavLink>
                            </li>

                        </ul> : null}

                        <ul className="navbar-nav ms-auto">
                            {!userIsloggedIn ? <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/register"}>Register</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " aria-current="page" to={"/login"}>Login</NavLink>
                                </li></> :
                                <li className="nav-item">
                                    <NavLink onClick={logout} className="nav-link" to={"/login"}>logout</NavLink >
                                </li>}



                        </ul>
                    </div>
                </div>
            </nav >

        </>
    )
}
