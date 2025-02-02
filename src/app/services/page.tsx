import React from 'react';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="cards">
          <ServiceCard title="Web Development" description="Crafting responsive and dynamic websites tailored to your needs." />
          <ServiceCard title="UI/UX Design" description="Designing user-friendly interfaces with a focus on aesthetics and functionality." />
          <ServiceCard title="Digital Marketing" description="Enhancing your online presence through targeted marketing strategies." />
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
}

function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}