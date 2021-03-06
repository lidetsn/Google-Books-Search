import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg  mb-2 bg-dark">
        <Link className="navbar-brand text-white" to="/">
          Google Books
        </Link>
      
          <ul className="navbar-nav">
            <li className="nav-item text-white">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item text-white">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved Books
              </Link>
            </li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
