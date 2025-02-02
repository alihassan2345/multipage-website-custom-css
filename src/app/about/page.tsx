import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Us</h2>
        <p>We are a team of dedicated professionals committed to delivering top-notch digital services.</p>
        <div className="cards">
          <Card title="Our Mission" description="To empower businesses with innovative digital solutions." />
          <Card title="Our Vision" description="To be a global leader in digital transformation services." />
          <Card title="Our Values" description="Innovation, Integrity, and Excellence." />
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  title: string;
  description: string;
}

function Card({ title, description }: CardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}