import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import profilePhoto from '../assets/images/Yassine_Profile_Photo.png';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home bg-primary text-white py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img src={profilePhoto} alt="Portfolio_Photo" className="home-image" />
          </Col>
          <Col md={6} className="text-center text-md-left">
          <h4>Hello, I'm</h4>
          <h1>Yassine Ouhni</h1>
          <h3>Full Stack Developer / Software Engineer</h3>
          <h4>Based in Boston, Ma</h4>
          <p>
          I'm passionate about crafting dynamic web applications and seeking a developer or software engineer role to innovate and grow.
          Skilled in HTML, CSS, JavaScript, Node.js, Express, React, SQL, Python, and Java, I thrive in collaborative environments and 
          am committed to continuous learning. My aim is to contribute to impactful projects while advancing my career in tech.
          </p>
            <Button variant="light" href="/About">More About Me</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
