import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStar, FaBook, FaHeadset, FaUsers, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './SuccessStorySection.css';

const SuccessStorySection = () => {
  return (
    <Container fluid className="success-story-section py-5">
      <h2 className="text-center mb-5">Your Success Story is Next</h2>
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h3>World Class Pedagogy</h3>
            <ul>
              <li>Learn from best faculties & Industry Experts</li>
              <li>Learn with fun Hands-on Exercises & Assignments</li>
              <li>Participate in Group Activities</li>
            </ul>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={6}>
                <div className="icon-card">
                  <FaStar />
                  <p>5/5 Rating</p>
                </div>
              </Col>
              <Col xs={6}>
                <div className="icon-card">
                  <FaBook />
                  <p>Blended Learning</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h3>Personalized Guidance with 24/7 Support</h3>
            <ul>
              <li>24/7 Learning Support</li>
              <li>Global Certification Support</li>
              <li>Premium Content with Lifetime Free Upgrade</li>
            </ul>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={6}>
                <div className="icon-card">
                  <FaHeadset />
                  <p>24/7 Support</p>
                </div>
              </Col>
              <Col xs={6}>
                <div className="icon-card">
                  <FaUsers />
                  <p>1:1 Mentorship</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h3>Career Assistance</h3>
            <ul>
              <li>Resume Building & Interview Prep</li>
              <li>Job-Ready employees post training</li>
              <li>Network with Peers & Interact with Industry Leaders</li>
            </ul>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={6}>
                <div className="icon-card">
                  <FaGraduationCap />
                  <p>Career transition</p>
                </div>
              </Col>
              <Col xs={6}>
                <div className="icon-card">
                  <FaBriefcase />
                  <p>Job Support*</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      
      <Row className="mt-5">
        <Col className="text-center">
          <p>Download Mobile App [ORG Code: JJLUE]</p>
          <button className="btn btn-secondary me-3">Get the iOS APP</button>
          <button className="btn btn-secondary">Get the Android APP</button>
        </Col>
      </Row>
    </Container>
  );
};

export default SuccessStorySection;