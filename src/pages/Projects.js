import React, { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

import memoryGame1 from '../assets/images/Memory_Game_Pic_1.png';
import memoryGame2 from '../assets/images/Memory_Game_Pic_2.png';
import memoryGame3 from '../assets/images/Memory_Game_Pic_3.png';

import quotesGenerator1 from '../assets/images/Generate_Random_Quotes_Pic_1.png';
import quotesGenerator2 from '../assets/images/Generate_Random_Quotes_Pic_2.png';
import quotesGenerator3 from '../assets/images/Generate_Random_Quotes_Pic_3.png';

import bmiCalculator1 from '../assets/images/BMI_Calculator_Pic_1.png';
import bmiCalculator2 from '../assets/images/BMI_Calculator_Pic_2.png';

import employeeSalary1 from '../assets/images/Employee_Pic_1.png';
import employeeSalary2 from '../assets/images/Employee_Pic_2.png';

import bookmark1 from '../assets/images/Bookmark_Pic_1.png';
import bookmark2 from '../assets/images/Bookmark_Pic_2.png';




const projectData = [
  {
    title: 'Memory Game',
    description: 'A classic memory game built with HTML, CSS, and JavaScript. Players match pairs of cards with the same image by clicking on them.',
    link: 'https://ouhni.github.io/Memory_Game/',
    images: [memoryGame1, memoryGame2, memoryGame3]
  },
  {
    title: 'Random Quotes Generator',
    description: 'A web application that generates random quotes with dynamic background colors. Built with HTML, CSS, and JavaScript. Users can click a button to generate a new quote and see a different background color each time.',
    link: 'https://github.com/ouhni/Generate_Random_Quotes',
    images: [quotesGenerator1, quotesGenerator2, quotesGenerator3]
  },
  {
    title: 'BMI_Calculator',
    description: 'A web application that calculates the Body Mass Index (BMI) based on user inputs of weight and height. Built with HTML, CSS, and JavaScript, it provides instant BMI results and interpretations. Users can choose between metric and imperial units for their convenience.',
    link: 'https://ouhni.github.io/BMI/',
    images: [bmiCalculator1, bmiCalculator2]
  },
  {
    title: 'Employee Net Salary',
    description: 'A web app to calculate employees net salary after deductions. Built with HTML, CSS, and JavaScript, it lets users input gross salary and deductions to display the net salary.',
    link: 'https://ouhni.github.io/Employee---OOP/',
    images: [employeeSalary1, employeeSalary2]
  },
  {
    title: 'Bookmark',
    description: 'A web application that allows users to save, manage, and organize their favorite web links. Built with HTML, CSS, and JavaScript, it features user-friendly categories, search functionality, and easy link addition. Users can quickly access and manage their bookmarks from any device.',
    link: 'https://ouhni.github.io/Bookmark/',
    images: [bookmark1, bookmark2]
  },
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