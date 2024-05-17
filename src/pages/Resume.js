import React from 'react';
import { Container } from 'react-bootstrap';
const Resume = () => {
  return (
    <Container className="mt-5">
      <h1>Resume</h1>
      <h2>Experience</h2>
      <div className="experience">
        <h3>Teaching Support Associate</h3>
        <p>Harvard Business School, Cambridge, MA</p>
        <p>August 2020 – May 2021</p>
        <ul>
          <li>Recorded, tracked, and resolved service tickets in ServiceNow system accurately.</li>
          <li>Performed an average of 5 pre-teaching check-ins per day for professors to ensure classes were ready to start.</li>
          <li>Assisted in Zoom tests to get familiar with the application and find workarounds to better assist professors and students.</li>
        </ul>
        
        <h3>Front Desk Technician, Walk-In Support Center</h3>
        <p>Harvard University Information Technology, Cambridge, MA</p>
        <p>January 2020 – July 2021</p>
        <ul>
          <li>Performed technical tasks related to Wi-Fi connectivity, advanced printing configuration, and helped with set up and management of Harvard’s single sign-on accounts.</li>
          <li>Resolved 90% of the Service Now tickets on the first contact without the need for escalation.</li>
          <li>Triaged Zoom, VPN, Microsoft applications, and connectivity problems for clients on a daily basis while providing exceptional customer service over the phone during the university’s closure of campus.</li>
        </ul>
      </div>
      
      <h2>Skills & Certification</h2>
      <div className="skills">
        <h3>Technical Skills:</h3>
        <p>HTML, CSS, JavaScript, jQuery, Bootstrap, Java, Node.js, Python, Data Structure and Algorithms, MySQL, Microsoft Office Suite 2016, Microsoft Windows Operating Systems, Mac OS, Android, IOS, and Good Understanding of Computer Networking (TCP/IP Protocols).</p>
        <h3>Professional Communication:</h3>
        <p>College-level training in teamwork, time management, e-mail etiquette, oral presentations, customer service, and conflict resolution.</p>
        <h3>Additional Languages:</h3>
        <p>Berber (native), Arabic (fluent), French (conversational).</p>
      </div>
      
      <h2>Education</h2>
      <div className="education">
        <h3>Boston University, Boston, MA</h3>
        <p>Bachelor / Computer Science, Aug 2023</p>
        <p>Relevant Coursework: Programming with Java, Data Structure, Computer Architecture, Web Development (HTML/CSS/JavaScript), Information Structure with Python.</p>
        
        <h3>Year Up, Boston, MA</h3>
        <p>Information Technology Track, July 2020</p>
        <p>Relevant Coursework: Computer Information Systems; Business Communications; Business Writing; Public Speaking; Customer Service; Career Development and Interpersonal Relationships.</p>
      </div>
    </Container>
  );
}
export default Resume;