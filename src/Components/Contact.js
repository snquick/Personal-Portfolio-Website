import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/images/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from "emailjs-com";
import React, { useRef } from 'react';


export const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ww9iil9', 'template_bglbvgq', e.target, 'Ho_H62oEKUcls8zfp')
      .then((result) => {
          console.log(result.text);
          setButtonText("Sent! Thank you for your email.");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={form.firstName} placeholder ="First Name" name="firstName" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={form.lasttName} placeholder ="Last Name" name="lastName" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={form.email} placeholder ="Email Address" name = "email" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={form.phone} placeholder ="Phone No." name = "phoneNo"/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={form.message} placeholder="Message" name = "message"></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>                 
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}