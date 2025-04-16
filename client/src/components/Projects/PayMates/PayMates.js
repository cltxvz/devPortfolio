import { Row, Col, Button } from 'react-bootstrap';
import CarouselWithModal from '../CarouselWithModal';
import pay1 from './screen1.png';
import pay2 from './screen2.png';
import pay3 from './screen3.png';
import pay4 from './screen4.png';
import pay5 from './screen5.png';

function PayMates() {
  const payImages = [pay1, pay2, pay3, pay4, pay5];

  return (
    <Row className="mb-5 align-items-center">
      {/* Screenshot Carousel */}
      <Col md={5} className="text-center mb-3 mb-md-0">
        <CarouselWithModal images={payImages} />
      </Col>

      {/* Project Info */}
      <Col md={7}>
        <h3 className="text-decoration-underline">PayMates</h3>
        <p>
          <strong>PayMates</strong> is a lightweight, full-stack expense-splitting app designed to help
          groups manage shared costs like rent, groceries, or travel expenses. With unique invite codes,
          users can easily join events, add transactions, split them evenly or by custom amounts, and keep
          track of who owes who.
        </p>

        <p>
          <strong>Tech Stack:</strong> React, Bootstrap 5, React Router, Axios, Node.js, Express.js,
          MongoDB Atlas, Mongoose, MongoDB TTL Indexes, Git & GitHub.
        </p>

        <p>
          <strong>My Contributions:</strong>
          <ul>
            <li>Developed the full MERN application including user flows for event creation, joining, and expense tracking.</li>
            <li>Built backend with auto-expiring MongoDB TTL indexes to automatically clean up old events and transactions.</li>
            <li>Implemented flexible transaction logic with support for both even and custom splitting.</li>
            <li>Built real-time summary views showing balances and payment status.</li>
            <li>Designed responsive, mobile-friendly frontend with modals, toasts, and validations.</li>
          </ul>
        </p>

        <Button
          variant="primary"
          href="https://paymates-frontend-a0fac6217401.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </Button>
      </Col>
    </Row>
  );
}

export default PayMates;
