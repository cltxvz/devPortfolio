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
        <h3 className="text-decoration-underline">Touchless Tracking (Touchless Cover, LLC.)</h3>
        <p>
          <strong>Touchless Tracking</strong> is an internal tool built for Touchless Cover, LLC, designed to track customer orders from placement to shipment. The application provides real-time visibility into the fulfillment pipeline, improving transparency and logistics efficiency within the warehouse.
        </p>
        <p>
          In addition to order-tracking functionality, several tools have been developed and integrated into the application to reduce repetitive processes, automate dealer communication, schedule orders for production, generate production reports, and consolidate multiple Excel files into a single software solution, making the entire order workflow more efficient.
        </p>
        <p>
          <strong>My Contributions:</strong>
          <ul>
            <li>Facilitated cross-functional collaboration with stakeholders, managers, and dealers to gather requirements, align expectations, and define project goals using Agile methodologies.</li>
            <li>Designed and implemented RESTful APIs and NoSQL database structures, alongside frontend interfaces.</li>
            <li>Led development for both frontend and backend integrations.</li>
            <li>Integrated JWT authentication, protected routes, and role-based access control.</li>
            <li>Connected to cloud MongoDB with Mongoose for product & order data.</li>
            <li>Set up Nodemailer for email-based password recovery.</li>
          </ul>
        </p>

        {/* <p className="text-muted">Demo not available.</p> */}
        
      </Col>
    </Row>
  );
}

export default TBCTrackingSystem;
