"use client";

import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Cookies from "js-cookie";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import "../styles/Contact.scss";

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
  const form = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [showForm, setShowForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setShowForm(!Cookies.get("formSent"));
  }, []);

  useEffect(() => {
    showForm && setIsLoading(false);
  }, [showForm]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_4vuyk0j", "template_5zuuers", form.current, {
          publicKey: "HD6ttLHpzygZIL9jM",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            Cookies.set("formSent", "true");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
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
            {!isLoading && (
              <>
                {showForm ? (
                  <form ref={form} onSubmit={handleSubmit}>
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
                ) : (
                  <div className="form-sent">
                    <h1
                      style={{
                        marginTop: "30px",
                        marginBottom: "20px",
                        fontSize: "30px",
                      }}
                    >
                      Thank you for your message!
                    </h1>
                    <p style={{ marginBottom: "40px", fontSize: "20px" }}>
                      I'll get back to you as soon as possible.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
        <section className="right-section">
          <div className="contact-info">{ContactDetailHorizontalTile()}</div>
        </section>
      </main>
    </main>
  );
}
