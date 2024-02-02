import React from "react";

import EmailIcon from "@mui/icons-material/Email";

import "../styles/ContactCopy.scss";

const ContactDetailHorizontalTile = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <EmailIcon />
      <h2 style={{ marginLeft: "5px" }}>EMAIL</h2>
    </div>
  );
};

export default function Contact() {
  return (
    <main className="content">
      <div className="contact-header">
        <h1>Let's Create Something Great Together</h1>
      </div>
      <main className="main-contact-page">
        <section className="left-section">
          <div className="form-container">
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
        </section>
        <section className="right-section">
          <div className="contact-info">
            {ContactDetailHorizontalTile()}
            <p>JackTodd@gmail.com</p>
            <hr
              style={{
                borderTop: "1px solid white",
                width: "100%",
                marginTop: "6px",
              }}
            />
            <h2>LinkedIn</h2>
            <p>/JackTodd</p>
            <h2>Instagram</h2>
            <p>@JackToddDesigns</p>
          </div>
        </section>
      </main>
    </main>
  );
}
