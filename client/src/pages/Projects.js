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
  return (
    <div style={{ backgroundColor: 'rgb(245, 251, 252)', minHeight: '100vh', width: '100%' }}>
      {/* Section 1: Top to DreamBuy */}
      <div style={{ background: 'linear-gradient(to bottom, rgb(245, 251, 252), rgb(245, 251, 252))', paddingTop: '5rem', paddingBottom: '0' }}>
        <Container>
          <h1 className="mb-5 text-center text-decoration-underline">Portfolio Projects</h1>
          <DreamBuy />
          <hr className="mb-5" />
        </Container>
      </div>

      {/* Section 2: SnapQuiz to MiSuApp */}
      <div style={{ background: 'linear-gradient(to bottom, rgb(245, 251, 252), rgb(245, 251, 252))', paddingTop: '0', paddingBottom: '0' }}>
        <Container>
          <SnapQuiz />
          <hr className="mb-5" />
          <JobTracker />
          <hr className="mb-5" />
          <TripPlanner />
          <hr className="mb-5" />
          <PayMates />
          <hr className="mb-5" />
          <MiSuApp />
        </Container>
      </div>

      {/* Section 3: Ongoing Projects to Bottom */}
      <div style={{ background: 'linear-gradient(to bottom, rgb(245, 251, 252), rgb(245, 251, 252))', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <Container>
          <div className="pt-3 pb-2 border-top">
            <h1 className="text-center mb-4 text-decoration-underline">Ongoing Projects</h1>
          </div>

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
      </div>
    </div>
  );
}

export default Projects;
