import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center mt-auto">
      <Container>
        <Row>
          <Col>
            <p>© 2024 | Designed & Developed by Yassine Ouhni</p>
            <div>
              <a href="https://github.com/your-github" className="text-white mr-3" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/your-linkedin" className="text-white mr-3" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:your-email@example.com" className="text-white">Email</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;