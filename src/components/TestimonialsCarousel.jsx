import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './TestimonialsCarousel.css';

const testimonials = [
  {
    id: 1,
    image: "/path/to/vidhi-image.jpg",
    content: "SkillPlus Academy is a great place to learn Certification Courses. I took MCSA Course and I passed the exam in first attempt. Thank you Jamal Sir for teaching me on my preferred time.",
    name: "Vidhi Patel",
    role: "Technical Analyst, Edmonton, Canada",
    rating: 5
  },
  {
    id: 2,
    image: "/path/to/tausif-image.jpg",
    content: "I did CCNA. Currently I am in USA and taking online class from India. I was a bit worried about online training, but wasn't problem at all. The Trainer has friendly & supportive nature while teaching.",
    name: "Tausif Palejwala",
    role: "Network Engineer, Northshore, USA",
    rating: 5
  },
  {
    id: 3,
    image: "/path/to/jitendra-image.jpg",
    content: "I attended AWS Cloud training from SkillPlus. Its really a good experience. Trainer Mr. Jamal gives training in very simple fashion. His way of teaching make your concepts very clear.",
    name: "Jitendra Manthrani",
    role: "Network Engineer, Reliance, Hazira",
    rating: 5
  },
  {
    id: 4,
    image: "/path/to/vidhi-image.jpg",
    content: "SkillPlus Academy is a great place to learn Certification Courses. I took MCSA Course and I passed the exam in first attempt. Thank you Jamal Sir for teaching me on my preferred time.",
    name: "Vidhi Patel",
    role: "Technical Analyst, Edmonton, Canada",
    rating: 5
  },
  {
    id: 5,
    image: "/path/to/vidhi-image.jpg",
    content: "SkillPlus Academy is a great place to learn Certification Courses. I took MCSA Course and I passed the exam in first attempt. Thank you Jamal Sir for teaching me on my preferred time.",
    name: "Vidhi Patel",
    role: "Technical Analyst, Edmonton, Canada",
    rating: 5
  }
  // Add more testimonials here...
];


const TestimonialsCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex - 1 < 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getVisibleTestimonials = () => {
    const visibleTestimonials = [];
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % testimonials.length;
      visibleTestimonials.push(testimonials[index]);
    }
    return visibleTestimonials;
  };

  return (
    <section className="testimonials-section py-5">
      <Container>
        <h2 className="text-center mb-5">What Our Students Say About Us</h2>
        <div className="position-relative">
          <Row className="testimonial-carousel">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Col md={4} key={index}>
                <div className="testimonial-card">
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                  <div className="testimonial-content">
                    <p>"{testimonial.content}"</p>
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="star" />
                      ))}
                    </div>
                    <h4>{testimonial.name}</h4>
                    <p className="role">{testimonial.role}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <button className="carousel-control-prev" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <button className="carousel-control-next" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsCarousel;