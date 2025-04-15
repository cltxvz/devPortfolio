import { Container, Row, Col, Image } from 'react-bootstrap';
import aboutPic from '../components/About/about.jpg';
import ucfLogo from '../components/About/ucf.jpg';
import mdcLogo from '../components/About/mdc.jpg';
import touchlessLogo from '../components/About/touchless.jpg';
import resumeFile from '../components/Files/resume.pdf';

function About() {
  return (
    <Container className="py-5">
      {/* About Picture */}
      <Row className="justify-content-center mb-5">
        <Col md={4} className="text-center">
          <Image
            src={aboutPic}
            alt="Carlos Cardenas"
            rounded
            fluid
            className="shadow"
            style={{ maxHeight: '300px', objectFit: 'cover' }}
          />
        </Col>
      </Row>

      {/* About Me */}
      <Row className="mb-5">
        <Col>
          <h2 className="mb-3">About Me:</h2>
          <p>
            I'm a dedicated and curious software engineer with a passion for learning, problem-solving, and building real-world solutions through clean, scalable code. Whether it's through team collaboration or independent work, I strive to grow with each project and contribute meaningfully to the development community.
          </p>
        </Col>
      </Row>

      {/* Education */}
      <Row className="mb-5">
        <Col>
          <h2 className="mb-4">Education:</h2>

          <Row className="align-items-center mb-4">
            <Col xs={2} className="text-center">
              {/* Placeholder for UCF Logo */}
              <Image
                src={ucfLogo}
                alt="UCF Logo"
                fluid
              />
            </Col>
            <Col>
              <h5 className="mb-1">University of Central Florida</h5>
              <p className="mb-1 text-muted">Bachelor of Science in Computer Science</p>
              <p className="mb-0">Coursework: Algorithms & Data Structures, OOP, Systems Software, Discrete Structures, Graphs, Trees, Dynamic Programming, and more.</p>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col xs={2} className="text-center">
              {/* Placeholder for MDC Logo */}
              <Image
                src={mdcLogo}
                alt="MDC Logo"
                fluid
              />
            </Col>
            <Col>
              <h5 className="mb-1">Miami Dade College</h5>
              <p className="mb-1 text-muted">Associate of Arts in Computer Science</p>
              <p className="mb-0">Coursework: Intro to C++, Calculus, Physics, Statistics, and more.</p>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Work Experience */}
      <Row>
        <Col>
          <h2 className="mb-4">Work Experience:</h2>

          {/* Experience #1 */}
          <Row className="align-items-start mb-4">
            <Col xs={2} className="text-center">
              {/* Placeholder for Company Logo */}
              <Image
                src={touchlessLogo}
                alt="Touchless Cover Logo"
                fluid
              />
            </Col>
            <Col>
              <h5 className="mb-1">Quality Control Inspector</h5>
              <p className="mb-1 text-muted">Touchless Cover LLC | Feb 2021 – Present</p>
              <ul className="mb-0">
                <li>Inspected products across production stages and maintained quality control databases.</li>
                <li>Generated Bills of Lading and defect reports while managing inventory accuracy.</li>
                <li>Led monthly strategic meetings to improve product quality and team collaboration.</li>
                <li>Handled dealer inquiries and ensured consistent adherence to quality standards.</li>
              </ul>
            </Col>
          </Row>

          {/* Experience #2 (duplicate for now) */}
          <Row className="align-items-start mb-4">
            <Col xs={2} className="text-center">
              {/* Placeholder for Company Logo */}
              <Image
                src={touchlessLogo}
                alt="Touchless Cover Logo"
                fluid
              />
            </Col>
            <Col>
              <h5 className="mb-1">Quality Control Inspector</h5>
              <p className="mb-1 text-muted">Touchless Cover LLC | Feb 2021 – Present</p>
              <ul className="mb-0">
                <li>Inspected products across production stages and maintained quality control databases.</li>
                <li>Generated Bills of Lading and defect reports while managing inventory accuracy.</li>
                <li>Led monthly strategic meetings to improve product quality and team collaboration.</li>
                <li>Handled dealer inquiries and ensured consistent adherence to quality standards.</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Call-to-Action Buttons */}
      <Row className="mt-3 justify-content-center">
        <Col md="auto">
          <div className="d-flex justify-content-center gap-3">
            <a href="/projects" className="btn btn-primary">View Projects</a>
            <a href={resumeFile} download className="btn btn-outline-secondary">Download Resume</a>
          </div>
        </Col>
      </Row>

    </Container>
  );
}

export default About;
