import { Container, Row, Col, Image } from 'react-bootstrap';
import aboutPic from '../components/About/about.jpg';
import ucfLogo from '../components/About/ucf.jpg';
import mdcLogo from '../components/About/mdc.jpg';
import touchlessLogo from '../components/About/touchless.jpg';
import resumeFile from '../components/Files/resume.pdf';

function About() {
  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh', width: '100%' }}>
      {/* Section 1: Top → About Me */}
      <div style={{ background: 'linear-gradient(to bottom, rgba(2, 136, 169, 0.28), rgb(245, 251, 252))' }}>
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
                I'm a curious and driven software engineer who loves building things that actually make a difference. Whether it's developing full-stack apps or setting up backend systems from scratch, I enjoy solving problems and turning ideas into real, functional solutions. I’m always looking to learn, grow, and push my limits — and whether I’m working solo or collaborating with a team, I aim to write clean, scalable code that I'm proud of.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Section 2: Education */}
      <div style={{ background: 'linear-gradient(to bottom, rgb(245, 251, 252), rgb(245, 251, 252)' }}>
        <Container className="py-5">
          {/* Education */}
          <Row className="mb-5">
            <Col>
              <h2 className="mb-4">Education:</h2>

              <Row className="align-items-center mb-4">
                <Col xs={2} className="text-center">
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
        </Container>
      </div>

      {/* Section 3: Work Experience → Bottom */}
      <div style={{ background: 'linear-gradient(to bottom,rgb(245, 251, 252), rgba(2, 136, 169, 0.28))' }}>
        <Container className="py-5">
          {/* Work Experience */}
          <Row>
            <Col>
              <h2 className="mb-4">Work Experience:</h2>

              {/* Experience #1 */}
              <Row className="align-items-start mb-4">
                <Col xs={2} className="text-center">
                  <Image
                    src={touchlessLogo}
                    alt="Touchless Cover Logo"
                    fluid
                  />
                </Col>
                <Col>
                  <h5 className="mb-1">Software Developer</h5>
                  <p className="mb-1 text-muted">Touchless Cover LLC | Jan 2025 – Present</p>
                  <ul className="mb-0">
                    <li>Currently leading the development of an internal order tracking system to streamline logistics and order visibility.</li>
                    <li>Designing and implementing backend APIs, frontend interfaces, and database structures for a future dealer portal.</li>
                    <li>Collaborated with stakeholders to gather requirements and propose scalable software solutions tailored to operational needs.</li>
                    <li>Contributing to the modernization of internal operations through automation and custom tooling.</li>
                  </ul>
                </Col>
              </Row>

              {/* Experience #2 */}
              <Row className="align-items-start mb-4">
                <Col xs={2} className="text-center">
                  <Image
                    src={touchlessLogo}
                    alt="Touchless Cover Logo"
                    fluid
                  />
                </Col>
                <Col>
                  <h5 className="mb-1">Quality Control Inspector</h5>
                  <p className="mb-1 text-muted">Touchless Cover LLC | Feb 2021 – December 2024</p>
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
      </div>
    </div>
  );
}

export default About;