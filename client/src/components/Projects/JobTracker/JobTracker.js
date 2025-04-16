import { Row, Col, Button } from 'react-bootstrap';
import CarouselWithModal from '../CarouselWithModal';
import job1 from './screen1.png';
import job2 from './screen2.png';
import job3 from './screen3.png';
import job4 from './screen4.png';
import job5 from './screen5.png';
import job6 from './screen6.png';

function JobTracker() {
  const jobImages = [job1, job2, job3, job4, job5, job6];

  return (
    <Row className="mb-5 align-items-center">
      {/* Screenshot Carousel */}
      <Col md={5} className="text-center mb-3 mb-md-0">
        <CarouselWithModal images={jobImages} />
      </Col>

      {/* Project Info */}
      <Col md={7}>
        <h3 className="text-decoration-underline">JobTracker</h3>
        <p>
          <strong>JobTracker</strong> is a full-featured job search and application tracking tool that 
          helps users organize, monitor, and streamline their job hunting process. It integrates job search 
          APIs, a personal dashboard, calendar, and sorting/filtering features to keep everything in one place.
        </p>

        <p><strong>Tech Stack:</strong> React, Bootstrap 5, React Router, Axios, Node.js, Express.js, MongoDB Atlas, Mongoose, JWT, Nodemailer, Git & GitHub.</p>

        <p>
          <strong>My Contributions:</strong>
          <ul>
            <li>Built a full MERN stack app with advanced job search, tracking, and dashboard features.</li>
            <li>Integrated both Google Jobs and Adzuna APIs for real-time job listings.</li>
            <li>Implemented secure authentication with JWT.</li>
            <li>Developed a sortable, filterable dashboard for saved applications.</li>
            <li>Added an interactive calendar for scheduling interviews, follow-ups, and deadlines.</li>
            <li>Handled error states, form validation, and UI responsiveness throughout the app.</li>
          </ul>
        </p>

        <Button
          variant="primary"
          href="https://jobtracker-frontend-32244539ef91.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </Button>
      </Col>
    </Row>
  );
}

export default JobTracker;
