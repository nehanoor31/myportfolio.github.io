import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <>
        <section id="contact" className="mt-5 contactform">
          <div className="row m-5">
            <h1 className="d-block m-auto pt-5"> Let's Connect!</h1>
          </div>
          <div className="row">
            <p className="d-block m-auto pb-5">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <form className="myform lg-mr-5">
                <>
                  <div className="row">
                    {/*Grid column*/}
                    <div className="col-md-6">
                      <div className="md-form mb-2">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Name"

                        />
                        
                      </div>
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-md-6">
                      <div className="md-form mb-2">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="E.mail"

                        />
                        
                      </div>
                    </div>
                    {/*Grid column*/}
                  </div>
                  {/*Grid row*/}
                  {/*Grid row*/}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-2">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          placeholder="Subject"
                         />
                         
                      </div>
                    </div>
                  </div>
                  <>
                    <div className="row">
                      {/*Grid column*/}
                      <div className="col-md-12">
                        <div className="md-form">
                          <textarea
                            type="text"
                            id="message"
                            name="message"
                            rows={6}
                            className="form-control md-textarea"
                            defaultValue={"Write Message.."}
                          />
                         </div>
                      </div>
                    </div>
                    {/*Grid row*/}
                    <div className="text-center">
                      <a
                        className="btn"
                        onclick="document.getElementById('contact-form').submit();"
                      >
                       <button className="contactbtn d-block m-auto">Submit</button>
                      </a>
                    </div>
                    <div className="status" />
                  </>
                </>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
