import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [formError, setFormError] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ezyn0xd', 'template_sw73awh', form.current, {
      publicKey: '383udVgl7aBzDgWpR'
    })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormError('');
          e.target.reset();
          navigate('/confirmation');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setFormError('Failed to send message. Please try again later.');
        }
      );
  };
  return (
    <Container className="mt-5 contact">
      <h1>Contact</h1>
      {formError && <Alert variant="danger">{formError}</Alert>}
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="user_name" placeholder="Enter your name" required />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="user_email" placeholder="Enter your email" required />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" name="message" rows={3} placeholder="Enter your message" required />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Send
        </Button>
      </Form>
    </Container>
  );
}
export default Contact;
