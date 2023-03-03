import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img className="logo" src={logo} alt="logo" />
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
                    <FontAwesomeIcon icon={ faBars } style={{ color: "#fff" }} />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">
                                {props.home}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                {props.about} 
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">
                                {props.services}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/experience">
                                {props.experience}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="portfolio">
                                {props.portfolio}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
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
