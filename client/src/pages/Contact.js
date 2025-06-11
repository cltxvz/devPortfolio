import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState, useRef } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [captchaToken, setCaptchaToken] = useState(null);
  const captchaRef = useRef(null);

  const [status, setStatus] = useState({ message: '', type: '' });

  const showStatus = (message, type = 'success') => {
    setStatus({ message, type });
    setTimeout(() => {
      setStatus({ message: '', type: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      showStatus('Please verify you are human.', 'danger');
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, {
        ...formData,
        captcha: captchaToken,
      });

      showStatus('Message sent successfully!', 'success');

      setFormData({ name: '', email: '', subject: '', message: '' });
      setCaptchaToken(null);
      if (captchaRef.current) captchaRef.current.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      showStatus('Something went wrong. Please try again later.', 'danger');
    }
  };

  return (
    <div style={{ background: 'linear-gradient(to bottom, rgb(245, 251, 252), rgb(245, 251, 252))', minHeight: '100vh', width: '100%' }}>
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

              <Form.Group className="mb-2 d-flex justify-content-center">
                <ReCAPTCHA
                  ref={captchaRef}
                  sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                  onChange={setCaptchaToken}
                />
              </Form.Group>

              {status.message && (
                <div className={`text-center mb-3 text-${status.type}`}>
                  {status.message}
                </div>
              )}

              <div className="text-center">
                <Button variant="primary" type="submit">Send Message</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
