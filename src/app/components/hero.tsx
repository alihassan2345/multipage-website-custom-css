import React from 'react';
import './hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h2>Welcome to My multipage website custom css</h2>
        <p>We provide innovative solutions to help your business thrive in the digital world.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
}