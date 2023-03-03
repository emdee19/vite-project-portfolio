import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Navbar
                </Link>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="#home">
                                {props.home}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">
                                {props.about} 
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/services">
                                {props.services}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/experience">
                                {props.experience}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="portfolio">
                                {props.portfolio}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/contact">
                                {props.contact}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  );
};

export default Navbar;
