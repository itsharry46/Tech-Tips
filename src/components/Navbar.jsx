import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../index.css';
import wd from "../images/wd.png";
import py from "../images/python.png";
import ml from "../images/ml.png";
import dm from "../images/dm.png";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-transparent navbar-expand-md">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">Tech-Tips</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
                            </li>
                            <NavDropdown title="Internships" id="basic-nav-dropdown">
                                <NavDropdown.Item className='drop-hover' href="#action/3.1"><img className="nav-img" src={py} alt="py" /> Python</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"><img className="nav-img" src={wd} alt="wd" /> Web Development</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><img className="nav-img" src={ml} alt="ml" /> Machine Learning</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><img className="nav-img" src={dm} alt="dm" /> Data Mining</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3"><img className="nav-img" src={dm} alt="dm" /> Explore More</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Free-Courses" id="basic-nav-dropdown">
                                <NavDropdown.Item className='drop-hover' href="#action/3.1"><img className="nav-img" src={py} alt="py" /> Python</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"><img className="nav-img" src={wd} alt="wd" /> Web Development</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><img className="nav-img" src={ml} alt="ml" /> Machine Learning</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><img className="nav-img" src={dm} alt="dm" /> Data Mining</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3"><img className="nav-img" src={dm} alt="dm" /> Explore More</NavDropdown.Item>

                            </NavDropdown>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="#">Webinar</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/signin">Jobs</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink className="login" to="/login">Login</NavLink>
                    <NavLink className="register" to="#">Register</NavLink>
                </div>
            </nav>
        </>
    );
}

export default Navbar;