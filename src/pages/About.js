import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import profilePhoto from '../assets/images/Yassine_Profile_Photo.png'; // Adjust the path as needed
import '../styles/About.css';

const About = () => {
  return (
    <div className="content">
      <Container className="about-container mt-5">
        <Row className="align-items-center mt-4">
          <Col md={6} className="text-center">
            <img src={profilePhoto} alt="Profile" className="about-image" />
          </Col>
          <Col md={6}>
            <h1>About Me</h1>
            <p>
              I have a background in supporting academic and IT environments, with experience in Harvard University’s IT departments. I am skilled in technical support, front desk assistance, and customer service. 
              I have a Bachelor’s degree in Computer Science from Boston University and completed an Information Technology Track at Year Up.
            </p>
            <div className="button-group mt-4">
              <Button variant="primary" href="/path/to/cv" className="mr-2">Download CV</Button>
              <Button variant="secondary" href="/projects" className="mr-2">My Projects</Button>
              <Button variant="success" href="/contact">Contact Me</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
