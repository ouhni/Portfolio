import React, { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import memoryGame1 from '../assets/images/Memory_Game_Pic_1.png';
import memoryGame2 from '../assets/images/Memory_Game_Pic_2.png';
import memoryGame3 from '../assets/images/Memory_Game_Pic_3.png';
// import quotesGenerator1 from '../assets/images/quotes_generator_1.png';
// import quotesGenerator2 from '../assets/images/quotes_generator_2.png';
// import quotesGenerator3 from '../assets/images/quotes_generator_3.png';

const projectData = [
  {
    title: 'Memory Game',
    description: 'A classic memory game built with HTML, CSS, and JavaScript. Players match pairs of cards with the same image by clicking on them. The game includes a timer and a move counter to track the player\'s progress.',
    link: 'https://ouhni.github.io/Memory_Game/',
    images: [memoryGame1, memoryGame2, memoryGame3]
  },
  // {
  //   title: 'Random Quotes Generator',
  //   description: 'A web application that generates random quotes with dynamic background colors. Built with HTML, CSS, and JavaScript. Users can click a button to generate a new quote and see a different background color each time.',
  //   link: 'https://github.com/ouhni/Random_Quotes_Generator', // Update with the correct link if necessary
  //   images: [quotesGenerator1, quotesGenerator2, quotesGenerator3]
  // }
];


const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
  };

  return (
    <Container className="mt-5">
      <h1>Projects</h1>
      <ProjectCard {...projectData[currentIndex]} />
      <Carousel activeIndex={currentIndex} onSelect={handleSelect} className="mt-5">
        {projectData.map((project, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              <img
                className="d-block w-25"
                src={project.images[0]} 
                alt={`Project ${index + 1}`}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
export default Projects;