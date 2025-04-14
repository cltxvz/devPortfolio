import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light py-4 mt-5 border-top">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md="auto" className="mb-2">
            <a href="mailto:youremail@example.com" className="text-dark mx-3 fs-4" aria-label="Email">
              <i className="bi bi-envelope-fill"></i>
            </a>
            <a href="https://github.com/cltxvz" target="_blank" rel="noopener noreferrer" className="text-dark mx-3 fs-4" aria-label="GitHub">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-dark mx-3 fs-4" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="tel:+1234567890" className="text-dark mx-3 fs-4" aria-label="Phone">
              <i className="bi bi-telephone-fill"></i>
            </a>
          </Col>
        </Row>
        <Row className="text-center mt-2">
          <Col>
            <small className="text-muted">&copy; {new Date().getFullYear()} Carlos A. Cárdenas — All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
