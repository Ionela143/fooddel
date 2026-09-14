import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">

      <section className="contact-hero">
        <p className="contact-subtitle">GET IN TOUCH</p>

        <h1>
          Contact <span>Us</span>
        </h1>

        <p>
          Have a question, suggestion or need help with your order?
          We would love to hear from you.
        </p>
      </section>

      <section className="contact-content">

        <div className="contact-info">

          <h2>Let's talk</h2>

          <p>
            Whether you have a question about our menu, your order,
            delivery or anything else, our team is here to help.
          </p>

          <div className="contact-info-item">
            <div className="contact-icon">📧</div>
            <div>
              <h3>Email</h3>
              <p>support@fooddel.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon">📞</div>
            <div>
              <h3>Phone</h3>
              <p>+40 700 000 000</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon">📍</div>
            <div>
              <h3>Location</h3>
              <p>Romania</p>
            </div>
          </div>

        </div>

        <div className="contact-form-container">

          <h2>Send us a message</h2>

          <form>

            <div className="contact-form-row">

              <div className="contact-input">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="contact-input">
                <label>Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

            </div>

            <div className="contact-input">
              <label>Subject</label>
              <input
                type="text"
                placeholder="What is your message about?"
                required
              />
            </div>

            <div className="contact-input">
              <label>Message</label>
              <textarea
                rows="6"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

      <section className="contact-bottom">
        <h2>Hungry?</h2>
        <p>Go back to our menu and discover something delicious.</p>

        <button onClick={() => window.location.href = '/'}>
          Explore Our Menu
        </button>
      </section>

    </div>
  );
};

export default Contact;