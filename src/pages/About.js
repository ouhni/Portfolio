import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import profilePhoto from '../assets/images/Yassine_Profile_2_Photo.png'; // Adjust the path as needed
import '../styles/About.css';
import resume from '../assets/images/Yassine_Ouhni_Resume.pdf'; // Adjust the path as needed

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
              I'm Yassine, a recent Computer Science graduate deeply passionate about web development and software engineering. My journey into the world of technology began six years ago with an enriching experience at Year Up. There, as an IT technician, I immersed myself in hardware intricacies, laying the groundwork for my fascination with software development.
            </p>
            <p>
              Transitioning to coding, I eagerly pursued a deeper understanding, which led me to Boston University. Through its comprehensive curriculum, I mastered programming languages and web development, fueling my passion and propelling me towards becoming a proficient software engineer.
            </p>
            <p>
              Now equipped with a solid foundation in both hardware and software, I'm excited to embark on the next chapter of my career. As a web developer or software engineer, I'm eager to leverage my diverse skill set and passion for technology to create innovative solutions that make a meaningful impact.
            </p>
            <p>
              Beyond my academic and professional pursuits, I enjoy soccer, experimenting with cuisines in the kitchen, and leisurely walks under the sun.
            </p>

            <div className="button-group mt-4">
              <a href={resume} download="Yassine_Ouhni_Resume.pdf" className="btn btn-primary mr-2">Download CV</a>
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
