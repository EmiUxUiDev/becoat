/* import React, { useEffect, useState } from "react";
import testimonialsData from "../data/testimonials.json";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, []);

  return (
    <section id="testimonials" className="section">
      <h2>Testimonios</h2>
      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <blockquote key={index} className="testimonial-card">
            <img
              className="testimonialAvatar"
              src={item.image}
              alt={item.author}
            />
            <p>"{item.quote}"</p>
            <cite>- {item.author}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
 */