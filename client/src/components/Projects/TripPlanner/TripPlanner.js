import { Row, Col, Carousel, Button } from 'react-bootstrap';
import trip1 from './screen1.png';
import trip2 from './screen2.png';
import trip3 from './screen3.png';
import trip4 from './screen4.png';
import trip5 from './screen5.png';
import trip6 from './screen6.png';
import trip7 from './screen7.png';

function TripPlanner() {
  const imageStyle = {
    height: '300px',
    objectFit: 'cover',
  };

  return (
    <Row className="mb-5 align-items-center">
      {/* Screenshot Carousel */}
      <Col md={5} className="text-center mb-3 mb-md-0">
        <Carousel fade className="shadow rounded carousel-dark">
          <Carousel.Item>
            <img src={trip1} alt="TripPlanner Screenshot 1" className="d-block w-100" style={imageStyle} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={trip2} alt="TripPlanner Screenshot 2" className="d-block w-100" style={imageStyle} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={trip3} alt="TripPlanner Screenshot 3" className="d-block w-100" style={imageStyle} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={trip4} alt="TripPlanner Screenshot 4" className="d-block w-100" style={imageStyle} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={trip5} alt="TripPlanner Screenshot 5" className="d-block w-100" style={imageStyle} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={trip6} alt="TripPlanner Screenshot 6" className="d-block w-100" style={imageStyle} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={trip7} alt="TripPlanner Screenshot 7" className="d-block w-100" style={imageStyle} />
          </Carousel.Item>
        </Carousel>
      </Col>

      {/* Project Info */}
      <Col md={7}>
        <h3 className='text-decoration-underline'>TripPlanner</h3>
        <p>
          <strong>TripPlanner</strong> is an interactive trip planning app that helps users organize
          destinations, manage activities, and track expenses — all in one place. With a
          drag-and-drop itinerary builder, real-time budget tracking, and JSON import/export
          functionality, users can create and share fully customized travel plans effortlessly.
        </p>

        <p><strong>Tech Stack:</strong> React, Bootstrap 5, React Router, CSS, LocalStorage, Git & GitHub.</p>

        <p>
          <strong>My Contributions:</strong>
          <ul>
            <li>Designed and built the entire frontend using React and Bootstrap 5.</li>
            <li>Implemented drag-and-drop scheduling and daily itinerary calendar view.</li>
            <li>Handled local state management and data persistence with LocalStorage.</li>
            <li>Created modular, reusable components and implemented event handling across features.</li>
            <li>Planned architecture to support future backend integration.</li>
          </ul>
        </p>

        <Button
          variant="primary"
          href="https://tripplanner-frontend-f9551d40cec7.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </Button>
      </Col>
    </Row>
  );
}

export default TripPlanner;
