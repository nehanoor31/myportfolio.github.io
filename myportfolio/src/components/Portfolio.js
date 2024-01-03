import React, { Component } from "react";
import './Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
        <>
        <div className="portfolio container mt-5" id="portfolio">
            <div className="myportfolio mt-5" style={{fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
                <h1>My Services</h1>
                <p className="p-2">
              Here you will find more information my Services which i can do.
            </p>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4 pb">
                    <img className="pm" src={require('./images/ec.jpg')} width={'310px'} height={'450px'}/>
                    <h5 className="ptext d-block m-auto">Web App Development</h5>
                </div>
                <div className="col-lg-4 pb">
                <img className="pm" src={require('./images/wd.jpg')} width={'310px'} height={'450px'}/>
                <h5 className="ptext">Website Designing</h5>
                </div>
                <div className="col-lg-4 pb">
                <img className="pm" src={require('./images/ui.png')} width={'310px'} height={'450px'} />
                <h5 className="ptext">UI/UX Designing</h5>
                </div>
             </div>
        </div>
        </>
    )
  }
}
export default Portfolio;