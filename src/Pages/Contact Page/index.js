import React, { useState, useEffect } from "react";
import * as HiIcons from "react-icons/hi";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import BannerImage from "../../Images/Banner1.jpg";
import emailjs from "emailjs-com";
import "./style.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phnumber, setPhNumber] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("Submit");
  useEffect(() => {
    document.title = "Fresho - Contact";
  }, []);
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5vdcgxa",
        "template_3u15817",
        e.target,
        "user_yACZb0E1jwce1MEAaOyRz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setPhNumber("");
    setMessage("");
    setStatus("Submit");
  }
  return (
    <div>
      <div className="contact-page">
        <Navbar />
        <img
          src={BannerImage}
          alt="Banner"
          title="Banner"
          className="contact-banner-image"
        />
        <div className="contact-heading">
          <h1>Contact</h1>
          <p>Contact Fresho for any information</p>
        </div>
        <hr className="opening-hr" />
        <div className="contact-body">
          <form action="" onSubmit={sendEmail}>
            <input
              data-aos="fade-right"
              type="text"
              name="Full_Name"
              placeholder="Your Name*"
              className="nameInput"
              value={name}
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              data-aos="fade-right"
              type="email"
              name="Email"
              placeholder="Your Email Address*"
              className="emailInput"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              data-aos="fade-right"
              type="number"
              required
              name="Phone_Number"
              placeholder="Phone Number*"
              className="numberInput"
              id=" phnumber"
              value={phnumber}
              onChange={(e) => setPhNumber(e.target.value)}
            />
            <textarea
              data-aos="fade-right"
              name="message"
              placeholder="How can we help you?"
              className="textArea"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" name="Submit" className="submitBtn">
              {status}
              <HiIcons.HiArrowNarrowRight className="contact-btn-icon" />
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
