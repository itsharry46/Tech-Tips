import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-transparent navbar-expand-md">
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
                            <NavDropdown title="Internships" id="basic-nav-dropdown">
                                <NavDropdown.Item className='drop-hover' href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Webinars" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Free-Courses" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            </NavDropdown>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="#">Jobs</NavLink>
                            </li>
                        </ul>
                    </div>
                    <input className="login" type="button" value="Login" />
                        <input className="register" type="button" value="Register" />
                </div>
            </nav>
        </>
    );
}

export default Navbar;