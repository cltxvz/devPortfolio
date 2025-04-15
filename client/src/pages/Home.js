import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import profilePic from '../components/Home/profile.jpg';
import resumeFile from '../components/Files/resume.pdf';
import techPic from '../components/Home/technologies.jpg';

function Home() {
  return (
    <div
      style={{
        backgroundColor: 'white',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {/* Hero Section */}
      <Container
        fluid
        className="d-flex flex-column justify-content-start align-items-center text-center"
        style={{ height: '90vh' }}
      >
        {/* Profile Picture */}
        <div className="d-flex flex-grow-1 align-items-center justify-content-center w-100">
          <Image
            src={profilePic}
            alt="Profile"
            rounded
            fluid
            className="shadow"
            style={{ maxHeight: '300px', objectFit: 'cover' }}
          />
        </div>

        {/* Hero Text */}
        <div className="mt-1 mb-4">
          <h1 className="fw-bold mb-3">Hello, I'm Carlos 👋</h1>
          <h4 className="text-muted">Software Engineer</h4>
          <p className="mt-3 mb-2">
            I build modern web apps with clean code, scalable architecture, and a passion for problem-solving!
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Button variant="primary" href="/projects">View Projects</Button>
            <a href={resumeFile} download className="btn btn-outline-secondary">
              Download Resume
            </a>
          </div>
        </div>

        {/* Scroll Arrow */}
        <div className="mt-auto pb-4">
          <a href="#skills-section" className="text-dark fs-3">
            <i className="bi bi-chevron-double-down"></i>
          </a>
        </div>
      </Container>

      {/* Tech Skills Section */}
      <Container fluid id="skills-section" className="pt-5 pb-5">
        <Container>
          <Row className="align-items-center">
            <Col md={4} className="text-center mb-4 mb-md-0">
              <Image
                src={techPic}
                alt="Tech Stack Icons"
                fluid
                className="shadow"
                style={{ maxHeight: '350px', objectFit: 'cover' }}
              />
            </Col>

            <Col md={8} className="d-flex flex-column justify-content-center">
            <h2 className="mb-4">Tech Skills</h2>
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
                <strong>Cloud & Services:</strong> Amazon Web Services (EC2, S3, RDS), Microsoft Azure, DigitalOcean, Heroku, MongoDB TTL Indexes.
              </li>
              <li className="mb-3">
                <strong>Authentication & Security:</strong> JWT, Bcrypt, Secure REST APIs, Environment Variables.
              </li>
              <li className="mb-4">
                <strong>IDEs & Platforms:</strong> VS Code, Visual Studio, PyCharm, IntelliJ, Code::Blocks.
              </li>
              <li className="mb-4">
                <strong>Operating Systems:</strong> Windows, macOS, Linux.
              </li>
            </ul>


              <div>
                <Button variant="primary" href="/about">Learn more about me!</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Home;
