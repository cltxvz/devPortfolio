import { useState } from 'react';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import CarouselWithModal from '../CarouselWithModal';
import misu1 from './screen1.png';
import misu2 from './screen2.png';
import misu3 from './screen3.png';
import misu4 from './screen4.png';
import misu5 from './screen5.png';
import misu6 from './screen6.png';
import misu7 from './screen7.png';
import misu8 from './screen8.png';

function MiSuApp() {
  const [showModal, setShowModal] = useState(false);
  const misuImages = [misu1, misu2, misu3, misu4, misu5, misu6, misu7, misu8];

  return (
    <>
      <Row className="mb-5 align-items-center">
        {/* Screenshot Carousel */}
        <Col md={5} className="text-center mb-3 mb-md-0">
          <CarouselWithModal images={misuImages} />
        </Col>

        {/* Project Info */}
        <Col md={7}>
          <h3 className="text-decoration-underline">MiSu App (Capstone Project)</h3>
          <p>
            <strong>MiSu</strong> (Mi casa es Su casa) is a smart home access control system built for homeowners to manage
            device access for guests and family members. This mobile app integrates React Native with AWS
            services and Home Assistant through a Raspberry Pi-powered hub.
          </p>
          <p>
            <strong>Tech Stack:</strong> React Native, TypeScript, AWS Lambda, DynamoDB, Cognito, IoT Core,
            API Gateway, S3, SNS, Raspberry Pi, Home Assistant.
          </p>

          <p>
            <strong>My Contributions:</strong>
            <ul>
                <li>Configured the Raspberry Pi and Home Assistant to integrate smart home devices.</li>
                <li>Developed WebSocket APIs within the Raspberry Pi’s Python script for real-time device communication.</li>
                <li>Refactored and modularized sections of the legacy codebase to improve stability and readability.</li>
                <li>Integrated secure user authentication and session handling.</li>
                <li>Redesigned the Raspberry Pi environment to ensure a more reliable and maintainable system.</li>
            </ul>
          </p>

          <p className="text-muted">Demo not available.</p>

          <Button
            variant="primary"
            className="mt-2"
            onClick={() => setShowModal(true)}
          >
            Read More
          </Button>
        </Col>
      </Row>

      {/* Modal for full description */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered scrollable>
        <Modal.Header closeButton>
          <Modal.Title>More About MiSu App</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p className="mt-2">
                <strong>Overview:</strong><br />
                MiSu empowers users to securely manage temporary and role-based access to smart home devices. This version — MiSu v4 — was developed as part of my senior design capstone and focused on rebuilding and improving usability, scalability, and long-term maintainability. Sponsored by UCF faculty, the app integrated mobile, cloud, and IoT technologies to deliver a functional and privacy-conscious smart access system.
            </p>

            <p>
                <strong>Challenges & Rebuild:</strong><br />
                My team inherited a previous version of the app and initially attempted to extend its functionality. However, after encountering persistent issues with outdated dependencies and compatibility limitations, we made the collective decision to rebuild the system with updated tooling and best practices. This allowed us to enhance performance, maintainability, and reliability across the full stack — while preserving the original project vision.
            </p>

            <p>
                <strong>What I Learned:</strong><br />
                MiSu was an invaluable experience in building secure, full-stack systems from the ground up. I deepened my understanding of cloud infrastructure through AWS and learned how to structure scalable backend logic, manage IoT communication, and collaborate effectively within a team on a high-impact project.
            </p>

            <p>
                <strong>Why This Project Matters:</strong><br />
                With the rise of smart devices, secure and selective access control is more important than ever. MiSu introduces a user-centric approach to managing shared access — offering a flexible and scalable solution for households that need more than just an "on or off" switch for their digital homes.
            </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MiSuApp;
