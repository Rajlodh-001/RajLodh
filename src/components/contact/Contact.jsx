import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="Contact">
      <h2 className="section__title">Get In touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about Everything !</h3>
          <p className="contact__details">
            Don't like forms? send me an email. 👋
          </p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Inseart your Name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Inseart your Email"
              />
            </div>

            </div>

            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Inseart your Subject"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <textarea
                id=""
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your Message"
              />
            </div>

            <button className="btn">Send Message</button>
          
        </form>
      </div>
    </section>
  );
};

export default Contact;
