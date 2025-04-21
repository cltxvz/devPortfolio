import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 border-top border-secondary">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md="auto" className="mb-2">
            <a href="mailto:carlos.cardenas09@outlook.com" className="text-white mx-3 fs-4" aria-label="Email">
              <i className="bi bi-envelope-fill"></i>
            </a>
            <a href="https://github.com/cltxvz" target="_blank" rel="noopener noreferrer" className="text-white mx-3 fs-4" aria-label="GitHub">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://linkedin.com/in/carlos-a-cardenas" target="_blank" rel="noopener noreferrer" className="text-white mx-3 fs-4" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="tel:+13054143420" className="text-white mx-3 fs-4" aria-label="Phone">
              <i className="bi bi-telephone-fill"></i>
            </a>
          </Col>
        </Row>
        <Row className="text-center mt-2">
          <Col>
            <small className="text-light">&copy; {new Date().getFullYear()} Carlos A. Cárdenas — All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
