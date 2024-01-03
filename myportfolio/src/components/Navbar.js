import React, { Component } from "react";
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'

class NavBar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mynav">
          
            <img className="logo mr-3" src={require('./images/nehanoor.png')} width={'80px'}
             />
             <p className="name" href="#">
           Neha Noor
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav navbar-fixed-top ml-5">
            <ul className="nav navbar-nav float-right item">
              <HashLink className="nav-item nav-link ml-5 active" smooth to="/#home">
                Home <span className="sr-only">(current)</span>
              </HashLink>
              <HashLink className="nav-item nav-link ml-5" smooth to="/#about">
                About
              </HashLink>
              <HashLink className="nav-item nav-link ml-5" smooth to="/#portfolio">
                Portfolio
              </HashLink>
              <HashLink className="nav-item nav-link ml-5" smooth to="/#contact">
                Contact Me
              </HashLink>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
