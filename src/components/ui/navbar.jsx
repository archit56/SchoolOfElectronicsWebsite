import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">
          <img
            className="davv-logo"
            src="%PUBLIC_URL%/../../../images/davv_logo.png"
            alt="DAVV logo"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-menu">
            <li className="nav-item">
              <NavLink
                className="nav-link navbar-home active"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/announcements"
              >
                Announcements
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/campus">
                Campus
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/event">
                Events
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/resources">
                Resources
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>

            {/* Login button */}
            <NavLink to="/login">
              <button type="button" className="login-btn btn btn-outline-light">
                Login
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
