import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows={5}></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}