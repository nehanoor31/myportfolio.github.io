import React, { Component } from "react";
import './About.css';
import { HashLink } from 'react-router-hash-link';

class About extends Component {
  render() {
    return (
      <>
        <section id="about" className="mt-5" style={{fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
          <div className="row m-auto d-block">
            <h1 className="text-center p-5">ABOUT ME</h1>
          </div>
          <div className="row m-auto d-block">
          <p className="p-2">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
          </div>
          <div className="row p-5">
            <div className="col-md-8 col-lg-6">
              <h3>Get to know me!</h3>
              <p>
                I'm a Frontend Web Developer building the Front-end of Websites
                and Web Applications that leads to the success of the overall
                product. Check out some of my work in the Projects section. I
                also like sharing content related to the stuff that I have
                learned over the years in Web Development so it can help other
                people of the Dev Community. Feel free to Connect or Follow me
                on my Linkedin where I post useful content related to Web
                Development and Programming I'm open to Job opportunities where
                I can contribute, learn and grow. If you have a good opportunity
                that matches my skills and experience then don't hesitate to
                contact me.
              </p>
              <HashLink smooth to='/#contact'>
              <button className="contactbtn">Contact Me</button>
              </HashLink>
            </div>
            <div className="col-md-4 col-lg-6 mt-sm-5">
                <div className="row d-block">
              <h3 className="">My Skills</h3>
              <div className="row m-auto d-block">
                <h5 className="d-inline-block sk">Html</h5>
                <h5 className="d-inline-block sk">CSS</h5>
                <h5 className="d-inline-block sk">JavaScript</h5>
                <h5 className="d-inline-block sk">Bootstrap</h5>
              </div>
              <div className="row m-auto d-block">
                <h5 className="d-inline-block sk">React.js</h5>
                <h5 className="d-inline-block sk">Express.js</h5>
                <h5 className="d-inline-block sk">node.js</h5>
                <h5 className="d-inline-block sk">MongoDB</h5>
              </div> <div className="row m-auto d-block">
                <h5 className="d-inline-block sk">XML</h5>
                <h5 className="d-inline-block sk">Java</h5>
                <h5 className="d-inline-block sk">Html</h5>
                <h5 className="d-inline-block sk">Html</h5>
              </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;
