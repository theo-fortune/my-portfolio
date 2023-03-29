import React from 'react';
import "./testimonials.css";
import { Data } from './Data.jsx';

const Testimonials = () => {
  return (
    <section className="testimonials section container">
      <h3 className="section__title">Testimonials</h3>
      <span className="section__subtitle">My clients say</span>
      <div className="testimonial__container">
        {Data.map(({ id, image, title, description }) => {
          return (
            <div className="testimonial__card" key={id}>
              <img src={image} alt="users" className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials