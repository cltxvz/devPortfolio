import { Container, Row, Col, Image } from 'react-bootstrap';
import aboutPic from '../components/About/about.jpg';
import ucfLogo from '../components/About/ucf.jpg';
import mdcLogo from '../components/About/mdc.jpg';
import touchlessLogo from '../components/About/touchless.jpg';
import resumeFile from '../components/Files/resume.pdf';

function About() {
  return (
    <div style={{ backgroundColor: 'rgb(245, 251, 252)', minHeight: '100vh', width: '100%' }}>
      {/* Section 1: About Me */}
      <div
        style={{
          background: 'linear-gradient(to bottom, rgb(245, 251, 252), rgb(245, 251, 252))',
          paddingTop: '3rem',
          paddingBottom: '3rem',
        }}
      >
        <Container>
          <Row className="align-items-center">
            {/* Text */}
            <Col md={6} className="text-md-start text-center mb-4 mb-md-0">
              <h2 className="fw-bold mb-3">Hello! I'm Carlos.</h2>
              <p className="fs-5 text-muted">
                I’m an Orlando-based software engineer with a strong interest in building impactful applications. I gained 
                my initial development experience through school and personal projects—several of which are showcased in
                my portfolio. Whether collaborating with a team or working independently, I focus on writing clean, maintainable
                code that solves real-world problems. I’m continuously learning and growing, driven by curiosity and a commitment
                to excellence in everything I create.
              </p>
            </Col>

            {/* Image */}
            <Col md={6} className="text-center">
              <Image
                src={aboutPic}
                alt="Carlos Cardenas"
                fluid
                className="shadow"
                style={{
                  maxHeight: '350px',
                  width: 'auto',
                  borderRadius: '1rem',
                  objectFit: 'cover',
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Section 2: Education */}
      <div style={{ background: 'linear-gradient(to bottom, rgb(245, 251, 252), rgb(245, 251, 252))', paddingTop: '0', paddingBottom: '0' }}>
        <Container>
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

      {/* Section 3: Work Experience*/}
      <div style={{ background: 'linear-gradient(to bottom, rgb(245, 251, 252), rgb(245, 251, 252))', paddingTop: '0', paddingBottom: '2rem' }}>
        <Container>
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
                  <h5 className="mb-1">Software Engineer</h5>
                  <p className="mb-1 text-muted">Touchless Cover LLC | March 2025 – Present</p>
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
                  <p className="mb-1 text-muted">Touchless Cover LLC | February 2021 – March 2025</p>
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
        </Container>
      </div>
      {/* Section 4: Tech Skills */}
      <div style={{ background: 'linear-gradient(to bottom, rgb(245, 251, 252), rgb(245, 251, 252))', paddingTop: '0', paddingBottom: '5rem' }}>
        <Container>
          <Row>
            <Col>
              <h2 className="mb-4">Tech Skills:</h2>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>Languages:</strong> Python, JavaScript, TypeScript, Java, C, SQL, HTML/CSS.
                </li>
                <li className="mb-3">
                  <strong>Frameworks & Libraries:</strong> React.js, React Native, Express.js, Flask, Bootstrap 5, Mongoose, Socket.io, React Router, Axios, BeautifulSoup, Pillow, Nodemailer.
                </li>
                <li className="mb-3">
                  <strong>Developer Tools:</strong> Git, GitHub, Node.js, MongoDB Atlas, Putty, Postman, LocalStorage, Jira, Android Studio, REST APIs.
                </li>
                <li className="mb-3">
                  <strong>Cloud & Services:</strong> Amazon Web Services, Microsoft Azure, DigitalOcean, Heroku, MongoDB TTL Indexes.
                </li>
                <li className="mb-3">
                  <strong>Authentication & Security:</strong> JWT, Secure REST APIs, Environment Variables.
                </li>
                <li className="mb-3">
                  <strong>IDEs & Platforms:</strong> VS Code, Visual Studio, PyCharm, IntelliJ, Code::Blocks.
                </li>
                <li className="mb-3">
                  <strong>Operating Systems:</strong> Windows, macOS, Linux.
                </li>
              </ul>
            </Col>
          </Row>

          {/* Call-to-Action Buttons */}
          <Row className="mt-3 justify-content-center">
            <Col md="auto">
              <div className="d-flex justify-content-center gap-3">
                <a href="/projects" className="btn btn-primary">View Projects</a>
                <a href={resumeFile} download="Carlos A. Cardenas - Resume.pdf" className="btn btn-outline-secondary">Download Resume</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
