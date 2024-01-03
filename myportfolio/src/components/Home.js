import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <>
        <div className="row" id="home">
          <div className="col-md-12 col-lg-5 abt lg-p-5">
            <h1>HEY, I'M NEHA NOOR</h1>
            <p className="p-3">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
            <button className="mybtn">PORTFOLIO</button>
          </div>
          <div className="col-md-6 col-lg-7 body d-mb-none d-sm-none d-md-none d-lg-block"></div>
        </div>
      </>
    );
  }
}

export default Home;
