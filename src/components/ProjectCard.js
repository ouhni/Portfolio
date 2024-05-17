import React from 'react';
import { Card, Button } from 'react-bootstrap';
// import './ProjectCard.css';
import '../styles/ProjectCard.css'
const ProjectCard = ({ title, description, link }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
