import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-3">
      <Container fluid>
        <Row className="align-items-center mb-3">
          <Col xs={12} lg={9}>
            <h5 className="mb-0">Enroll, Learn and Grow ! Get ready to achieve your learning goals with SkillPlus Academy</h5>
          </Col>
          <Col xs={12} lg={3} className="text-lg-end mt-2 mt-lg-0">
            <Button variant="light" className="rounded-pill px-4">Refer and Earn</Button>
          </Col>
        </Row>
        <hr className="my-3" />
        <Row className="justify-content-center text-center">
          <Col xs={12}>
            <nav className="mb-3">
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-3"><Link to="/about" className="text-white">About</Link></li>
                <li className="list-inline-item me-3"><Link to="/careers" className="text-white">Careers</Link></li>
                <li className="list-inline-item me-3"><Link to="/privacy" className="text-white">Privacy</Link></li>
                <li className="list-inline-item me-3"><Link to="/terms" className="text-white">Terms</Link></li>
                <li className="list-inline-item me-3"><Link to="/refunds" className="text-white">Refunds</Link></li>
                <li className="list-inline-item me-3"><Link to="/downloads" className="text-white">Downloads</Link></li>
                <li className="list-inline-item"><Link to="/contact" className="text-white">Contact</Link></li>
              </ul>
            </nav>
          </Col>
        </Row>
        <Row className="justify-content-center text-center mb-3">
          <Col xs={12}>
            <Link to="/instagram" className="text-white me-3"><FaInstagram size={24} /></Link>
            <Link to="/twitter" className="text-white me-3"><FaTwitter size={24} /></Link>
            <Link to="/linkedin" className="text-white me-3"><FaLinkedin size={24} /></Link>
            <Link to="/youtube" className="text-white"><FaYoutube size={24} /></Link>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <small>Copyright © 2024 SkillPlus Academy</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;