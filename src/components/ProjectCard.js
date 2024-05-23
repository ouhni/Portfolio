import React from 'react';
import { Card, Button, Carousel } from 'react-bootstrap';
// import './ProjectCard.css';
import '../styles/ProjectCard.css'
const ProjectCard = ({ title, description, link, images }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {images && images.length > 0 && (
          <Carousel className="mb-3">
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        )}
        <Button variant="primary" href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;