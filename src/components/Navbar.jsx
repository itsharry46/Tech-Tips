import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">Techs & Tips</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">Internships</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">Webinars</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">Free-Courses</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="#">Jobs</NavLink>
                            </li>
                        </ul>
                        <input className="btn" type="button" value="Login" />
                        <input className="btn" type="button" value="Register" />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;