"use client";

import React, { useState } from "react";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import "../styles/Contact.scss";
// import axios from "axios";

const ContactDetailHorizontalTile = () => {
  return [
    { heading: "EMAIL", icon: <EmailIcon />, details: "JackTodd@gmail.com" },
    { heading: "LINKEDIN", icon: <LinkedInIcon />, details: "/JackTodd" },
    {
      heading: "INSTAGRAM",
      icon: <InstagramIcon />,
      details: "@JackToddDesigns",
    },
  ].map((contactDetail, index) => {
    return (
      <div key={index} className="contact-info-tile">
        <div className="contact-info-tile-header">
          {contactDetail.icon}
          <h2>{contactDetail.heading}</h2>
        </div>
        <div className="contact-info-tile-details">
          <p>{contactDetail.details}</p>
          <hr />
        </div>
      </div>
    );
  });
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <main className="content">
      <div className="contact-header">
        <h1>
          Let's <span style={{ color: "#a67c00" }}>Create</span> Something Great
          Together
        </h1>
      </div>
      <main className="main-contact-page">
        <section className="left-section">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  rows={6}
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type="submit" className="submit-button">
                SEND
              </button>
            </form>
          </div>
        </section>
        <section className="right-section">
          <div className="contact-info">{ContactDetailHorizontalTile()}</div>
        </section>
      </main>
    </main>
  );
}
