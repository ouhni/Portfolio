import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5 p-4 text-center mt-auto">
      <Container>
        <Row>
          <Col>
            <p>© 2024 | Designed & Developed by Yassine Ouhni</p>
            <div className="social-links">
              <a href="https://github.com/ouhni" className="text-white mr-3" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" /> GitHub
              </a>
              <a href="https://linkedin.com/in/yassine-ouhni" className="text-white mr-3" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" /> LinkedIn
              </a>
              <a href="mailto:ouhniyassine2@gmail.com" className="text-white">
                <FaEnvelope className="social-icon" /> Email
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
