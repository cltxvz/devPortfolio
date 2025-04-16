import { Row, Col, Button } from 'react-bootstrap';
import CarouselWithModal from '../CarouselWithModal';
import dream1 from './screen1.png';
import dream2 from './screen2.png';
import dream3 from './screen3.png';
import dream4 from './screen4.png';
import dream5 from './screen5.png';
import dream6 from './screen6.png';
import dream7 from './screen7.png';

function DreamBuy() {
  const dreamImages = [dream1, dream2, dream3, dream4, dream5, dream6, dream7];

  return (
    <Row className="mb-5 align-items-center">
      {/* Screenshot Carousel */}
      <Col md={5} className="text-center mb-3 mb-md-0">
        <CarouselWithModal images={dreamImages} />
      </Col>

      {/* Project Info */}
      <Col md={7}>
        <h3 className="text-decoration-underline">DreamBuy</h3>
        <p>
          <strong>DreamBuy</strong> is a full-stack e-commerce simulator that replicates the feel of a
          real online store — from browsing to checkout to live order tracking. With secure
          authentication, dynamic cart updates, and simulated order fulfillment, it offers an immersive
          shopping experience where you can shop like a billionaire without spending a dime.
        </p>

        <p><strong>Tech Stack:</strong> React, Bootstrap 5, React Router, Axios, Node.js, Express.js, MongoDB Atlas, Mongoose, JWT, Socket.io, Nodemailer, Git & GitHub.</p>

        <p>
          <strong>My Contributions:</strong>
          <ul>
            <li>Developed both frontend and backend using the MERN stack.</li>
            <li>Built modular product catalog, cart, and checkout components with full routing.</li>
            <li>Integrated JWT authentication, protected routes, and role-based access control.</li>
            <li>Implemented real-time order status updates using Socket.io.</li>
            <li>Connected to cloud MongoDB with Mongoose for product & order data.</li>
            <li>Set up Nodemailer for email-based password recovery.</li>
          </ul>
        </p>

        <Button
          variant="primary"
          href="https://dreambuy-frontend-a8d2abd7dad6.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </Button>
      </Col>
    </Row>
  );
}

export default DreamBuy;
