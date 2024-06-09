"use client";

import React, { useRef, useState } from "react";
import { ContactDetailHorizontalTile } from "./ContactHorizontalTile";

import "./contact-styles.scss";

export default function ContactFolioPage() {
  // STATES ---
  // form values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // form errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  // form states
  const [showForm, setShowForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // FUNCTIONS ---
  const form = useRef<HTMLFormElement>(null);

  function validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setNameError("");
    setEmailError("");
    setMessageError("");

    if (name !== "" && validateEmail(email) && message !== "") {
      setIsLoading(true);
      if (form.current) {
        const formValues = {
          name: name,
          email: email,
          message: message,
        };
        fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }).then((res) => {
          if (res.status === 200) {
            setShowForm(false);
            setIsLoading(false);
          } else {
            setIsError(true);
            setIsLoading(false);
            console.log("Error: ", res.status);
          }
        });
      }
    } else {
      if (name === "") {
        setNameError("Please fill in your name.");
      }
      if (!validateEmail(email)) {
        setEmailError("Please enter a valid email.");
      }
      if (message === "") {
        setMessageError("Please enter a message.");
      }
    }
  };

  return (
    <main className="content">
      <div className="contact-header">
        <h1>
          Let&apos;s <span className="special-text">Create</span> Something
          Great Together
        </h1>
      </div>
      <main className="main-contact-page">
        <section className="left-section">
          <div className="form-container">
            {showForm && !isError && (
              <form ref={form} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  {nameError && (
                    <span className="error-message">{nameError}</span>
                  )}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setNameError("");
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  {emailError && (
                    <span className="error-message">{emailError}</span>
                  )}
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  {messageError && (
                    <span className="error-message">{messageError}</span>
                  )}
                  <textarea
                    rows={6}
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setMessageError("");
                    }}
                  />
                </div>
                <button type="submit" className="submit-button">
                  {isLoading ? (
                    <div className="loader-container">
                      <div className="loader" />
                    </div>
                  ) : (
                    "SEND"
                  )}
                </button>
              </form>
            )}
            {!showForm && !isError && (
              <div className="form-sent">
                <h1 className="success-submitting-header">
                  Thank you for your message!
                </h1>
                <p className="success-submitting-header">
                  I&apos;ll get back to you as soon as possible.
                </p>
              </div>
            )}
            {isError && (
              <>
                <h1 className="error-submitting-header">
                  There has been an issue sending your message.
                </h1>
                <p className="error-submitting-text">
                  Please refresh and try again or try contacting me on the
                  details provided on this page.
                </p>
              </>
            )}
          </div>
        </section>
        <section className="right-section">
          <div className="contact-info">{<ContactDetailHorizontalTile />}</div>
        </section>
      </main>
      <div className="bottom-page-margin" />
    </main>
  );
}
