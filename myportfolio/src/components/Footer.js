import React, { Component } from "react";

class Footer extends Component {
    render() {
      return (
        <>
        <footer className="bg-dark text-center text-white mt-5">
  {/* Grid container */}
  <div className="container p-4">
    {/* Section: Social media */}
    <div className="mb-4">
      {/* Facebook */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fab fa-facebook-f" />
      </a>
      {/* Twitter */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fab fa-twitter" />
      </a>
      {/* Google */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fab fa-google" />
      </a>
      {/* Instagram */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fab fa-instagram" />
      </a>
      {/* Linkedin */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fab fa-linkedin-in" />
      </a>
      {/* Github */}
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <i className="fab fa-github" />
      </a>
    </div>
    <div className="mb-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio
        earum repellat quaerat voluptatibus placeat nam, commodi optio pariatur
        est quia magnam eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </div>
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2020 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">
        MDBootstrap.com
      </a>
    </div>
  </div>
 </footer>

        </>
      )
    }
    }

export default Footer;