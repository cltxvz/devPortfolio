import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import resumeFile from '../components/Files/resume.pdf';
import placeholder from '../components/Files/ucf.jpg';
import TripPlanner from '../components/Projects/TripPlanner/TripPlanner';

function Projects() {
  const completedProjects = [
    { title: 'TripPlanner', live: true },
    { title: 'DreamBuy', live: true },
    { title: 'SnapQuiz', live: true },
    { title: 'JobTracker', live: true },
    { title: 'PayMates', live: true },
    { title: 'MiSu App', live: false },
    { title: 'TBC Dealers Portal', live: false },
    { title: 'GymBroseph', live: false, placeholder: true },
    { title: 'Contact Manager', live: false, placeholder: true },
  ];

  const ongoingProjects = [
    { title: 'TBC Tracking System', live: false },
  ];

  return (
    <Container className="py-5">
      {/* Header */}
      <h1 className="mb-5 text-center text-decoration-underline">Portfolio Projects</h1>

      {/* Completed Projects */}
      {completedProjects.map((project, idx) => (
        <div key={idx}>
          {project.title === 'TripPlanner' ? (
            <TripPlanner />
          ) : (
            <Row className="mb-4 align-items-center">
              <Col md={5} className="text-center mb-3 mb-md-0">
                <Image
                  src={placeholder}
                  alt={`${project.title} Screenshot`}
                  fluid
                  className="shadow"
                />
              </Col>
              <Col md={7}>
                <h3>{project.title}</h3>
                <p><em>Description coming soon...</em></p>
                <p><strong>Tech Stack:</strong> TBD</p>
                {project.live ? (
                  <Button variant="primary" href="#" target="_blank">Live Demo</Button>
                ) : (
                  <p className="text-muted">Demo not available</p>
                )}
              </Col>
            </Row>
          )}
          {/* Divider */}
          {idx !== completedProjects.length - 1 && <hr className="mb-5" />}
        </div>
      ))}

      {/* Ongoing Projects Header */}
      <div className="mt-5 pt-5 pb-2 border-top">
        <h1 className="text-center mb-4 text-decoration-underline">Ongoing Projects</h1>
      </div>

      {/* Ongoing Projects List */}
      {ongoingProjects.map((project, idx) => (
        <Row key={idx} className="mb-5 align-items-center">
          <Col md={5} className="text-center mb-3 mb-md-0">
            <Image
              src={placeholder}
              alt={`${project.title} Screenshot`}
              fluid
              className="shadow"
            />
          </Col>
          <Col md={7}>
            <h3>{project.title}</h3>
            <p><em>Currently in development. Details coming soon.</em></p>
            <p><strong>Tech Stack:</strong> TBD</p>
            <p className="text-muted">Demo not available</p>
          </Col>
        </Row>
      ))}

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
