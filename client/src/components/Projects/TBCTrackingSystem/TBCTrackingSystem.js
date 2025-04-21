import { Row, Col, Image } from 'react-bootstrap';
import touchlessLogo from './touchless.jpg';

function TBCTrackingSystem() {
  return (
    <Row className="mb-5 align-items-center">
      {/* Project Image */}
      <Col md={5} className="text-center mb-3 mb-md-0">
        <Image
          src={touchlessLogo}
          alt="TBC Tracking System"
          fluid
          className="shadow"
          style={{ maxHeight: '300px', objectFit: 'contain' }}
        />
      </Col>

      {/* Project Info */}
      <Col md={7}>
        <h3 className="text-decoration-underline">TBC Tracking System</h3>
        <p>
          <strong>TBC Tracking System</strong> is an internal tool designed to monitor customer orders from placement to shipment. This system provides real-time visibility into the fulfillment pipeline and is aimed at improving transparency and logistics efficiency within the warehouse.
        </p>
        <p>
          The goal is to integrate this system into a broader dealer-facing dashboard, where authorized users can log in and track the status of their orders. This will be one of several tools planned for a complete Dealer Portal currently in development.
        </p>
        <p>
          <strong>My Role:</strong> I am responsible for designing and implementing the entire tracking system, including the backend architecture, database integration, and frontend interfaces for both internal use and future dealer-facing access.
        </p>
        <p className="text-muted">Demo not available – project still in development.</p>
      </Col>
    </Row>
  );
}

export default TBCTrackingSystem;
