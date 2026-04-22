import { Container, Row, Col, Image } from 'react-bootstrap';
import aboutPic from '../components/About/about.jpg';
import ucfLogo from '../components/About/ucf.jpg';
import mdcLogo from '../components/About/mdc.jpg';
import touchlessLogo from '../components/About/touchless.jpg';
import ascensusLogo from '../components/About/ascensus.jpg';
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

      {/* Section 2: Work Experience*/}
      <div style={{ background: 'linear-gradient(to bottom, rgb(245, 251, 252), rgb(245, 251, 252))', paddingTop: '0', paddingBottom: '2rem' }}>
        <Container>
          <Row>
            <Col>
              <h2 className="mb-4">Work Experience:</h2>

              {/* Experience #1 - Ascensus */}
              <Row className="align-items-start mb-4">
                <Col xs={2} className="text-center">
                  <Image
                    src={ascensusLogo}
                    alt="Ascensus Logo"
                    fluid
                  />
                </Col>
                <Col>
                  <h5 className="mb-1">Associate Software Engineer</h5>
                  <p className="mb-1 text-muted">Ascensus, Inc. | May 2026 – Present (Hybrid, Lake Mary, FL)</p>
                  <ul className="mb-0">
                    <li>Develop, test, and maintain full-stack software applications across the SDLC to deliver scalable solutions aligned with business requirements.</li>
                    <li>Collaborate within an Agile Scrum team to design, implement, and ship features following established architectural and coding standards.</li>
                    <li>Contribute to performance optimization, debugging, and testing efforts to ensure high-quality code delivery.</li>
                    <li>Support CI/CD pipeline maintenance and leverage generative AI tools to enhance development velocity and deployment efficiency.</li>
                  </ul>
                </Col>
              </Row>

              {/* Experience #2 - Touchless Cover */}
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
                  <p className="mb-1 text-muted">Touchless Cover, LLC. | May 2025 – April 2026 (Orlando, FL)</p>
                  <ul className="mb-0">
                    <li>Led the development of an internal order tracking system to streamline logistics and order visibility, reducing manual processing time by 5+ hours per week.</li>
                    <li>Designed and implemented RESTful APIs and NoSQL database structures, alongside frontend interfaces, for the dealer portal.</li>
                    <li>Facilitated cross-functional collaboration with stakeholders, managers, and dealers to gather requirements, align expectations, and define project goals using Agile methodologies.</li>
                    <li>Contributed to the modernization of internal operations through automation and custom tooling.</li>
                  </ul>
                </Col>
              </Row>

            </Col>
          </Row>
        </Container>
      </div>

      {/* Section 3: Education */}
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
                  <strong>IDEs & Platforms:</strong> Cursor, Zed, VS Code, Visual Studio, PyCharm, IntelliJ, Code::Blocks.
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
