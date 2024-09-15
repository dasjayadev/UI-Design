import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SkillPlusNavbar.css";

const SkillPlusNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="py-2 border-bottom">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="align-items-center">
            <Navbar.Brand as={Link} to="/" className="me-4 fs-4 text-center">
              <strong>
                SkillPlus Academy<sup>®</sup>
              </strong>
            </Navbar.Brand>
            <Nav.Link as={Link} to="/courses" className="px-3">
              Courses
            </Nav.Link>
            <Nav.Link as={Link} to="/resources" className="px-3">
              Resources
            </Nav.Link>
            <Nav.Link as={Link} to="/corporate-training" className="px-3">
              Corporate Training
            </Nav.Link>
            <Nav.Link as={Link} to="/hire-from-us" className="px-3">
              Hire From Us
            </Nav.Link>
            <Button
              as={Link}
              to="/self-paced-courses"
              className="rounded-pill px-4 ms-3 self-paced-btn"
            >
              Self-Paced Courses
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SkillPlusNavbar;
