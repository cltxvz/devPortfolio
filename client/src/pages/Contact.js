import { Container, Row, Col, Form, Button, Toast, ToastContainer } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    captcha: null,
  });

  const [toast, setToast] = useState({
    show: false,
    message: '',
    variant: 'success',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.captcha) {
      setToast({
        show: true,
        message: 'Please verify you are human.',
        variant: 'danger',
      });
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, formData);
      setToast({
        show: true,
        message: 'Message sent successfully!',
        variant: 'success',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        captcha: null,
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setToast({
        show: true,
        message: 'Something went wrong. Please try again later.',
        variant: 'danger',
      });
    }
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center text-decoration-underline">Contact Me</h1>
      <Row className="justify-content-center">
        <Col md={8}>
          <Form onSubmit={handleSubmit} className="p-4 shadow bg-white rounded">
            <Form.Group className="mb-3" controlId="contactName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contactEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="your@email.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contactSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Optional subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="contactMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Write your message here..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4 d-flex justify-content-center">
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={(value) => setFormData({ ...formData, captcha: value })}
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit">Send Message</Button>
            </div>
          </Form>
        </Col>
      </Row>

      {/* Toast Notifications */}
      <ToastContainer position="bottom-center" className="mb-4">
        <Toast
          onClose={() => setToast({ ...toast, show: false })}
          show={toast.show}
          bg={toast.variant}
          delay={4000}
          autohide
        >
          <Toast.Body className="text-white">{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
}

export default Contact;
