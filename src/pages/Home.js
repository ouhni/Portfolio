import React from 'react';
import { Container, Button } from 'react-bootstrap';
const Home = () => {
  return (
    <div className="bg-primary text-white text-center py-5">
      <Container>
        <h1>Welcome to my Portfolio</h1>
        <p>I am a passionate Frontend/Fullstack Engineer eager to contribute to impactful projects.</p>
        <Button variant="primary" href="/resume">View Resume</Button>
      </Container>
    </div>
  );
}
export default Home;