import React from "react";

import "../styles/Contact.scss";

export default function Contact() {
  return (
    <main>
      <div className="form-container">
        <img
          className="hero-logo"
          src="assets\logo\WHITELOGO-jack.png"
          alt="logo"
        />

        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea rows={4} id="message" name="message" />
          </div>
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
