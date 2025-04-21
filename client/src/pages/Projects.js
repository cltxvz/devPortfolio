import { Container, Row, Col } from 'react-bootstrap';
import resumeFile from '../components/Files/resume.pdf';

// Project Components
import TripPlanner from '../components/Projects/TripPlanner/TripPlanner';
import DreamBuy from '../components/Projects/DreamBuy/DreamBuy';
import SnapQuiz from '../components/Projects/SnapQuiz/SnapQuiz';
import JobTracker from '../components/Projects/JobTracker/JobTracker';
import PayMates from '../components/Projects/PayMates/PayMates';
import MiSuApp from '../components/Projects/MiSuApp/MiSuApp';
import TBCTrackingSystem from '../components/Projects/TBCTrackingSystem/TBCTrackingSystem';

function Projects() {
  const completedProjects = [
    { title: 'TripPlanner', live: true },
    { title: 'DreamBuy', live: true },
    { title: 'SnapQuiz', live: true },
    { title: 'JobTracker', live: true },
    { title: 'PayMates', live: true },
    { title: 'MiSuApp', live: false },
  ];

  return (
    <Container className="py-5">
      {/* Header */}
      <h1 className="mb-5 text-center text-decoration-underline">Portfolio Projects</h1>

      {/* Completed Projects */}
      {completedProjects.map((project, idx) => (
        <div key={idx}>
          {project.title === 'TripPlanner' && <TripPlanner />}
          {project.title === 'DreamBuy' && <DreamBuy />}
          {project.title === 'SnapQuiz' && <SnapQuiz />}
          {project.title === 'JobTracker' && <JobTracker />}
          {project.title === 'PayMates' && <PayMates />}
          {project.title === 'MiSuApp' && <MiSuApp />}
          {/* Divider */}
          {idx !== completedProjects.length - 1 && <hr className="mb-5" />}
        </div>
      ))}

      {/* Ongoing Projects Header */}
      <div className="mt-5 pt-5 pb-2 border-top">
        <h1 className="text-center mb-4 text-decoration-underline">Ongoing Projects</h1>
      </div>

      {/* Ongoing Project Component */}
      <TBCTrackingSystem />

      {/* Call-to-Action Buttons */}
      <Row className="mt-5 justify-content-center">
        <Col md="auto">
          <div className="d-flex justify-content-center gap-3">
            <a href="/contact" className="btn btn-primary">Contact Me</a>
            <a href={resumeFile} download className="btn btn-outline-secondary">Download Resume</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
