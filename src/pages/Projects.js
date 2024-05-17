import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <Container className="mt-5">
      <h1>Projects</h1>
      <Row>
        <Col md={6}>
          <ProjectCard
            image=""
            title="Project 1"
            description="Description of project 1."
            link="https://github.com/your-github/project1"
          />
        </Col>
        <Col md={6}>
          <ProjectCard
            title="Project 2"
            description="Description of project 2."
            link="https://github.com/your-github/project2"
          />
        </Col>
      </Row>
      {/* Add more ProjectCard components as needed */}
    </Container>
  );
}
export default Projects;