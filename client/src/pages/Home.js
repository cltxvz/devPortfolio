import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import profilePic from '../components/Files/profile.jpg';
import resumeFile from '../components/Files/resume.pdf';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <Container
        fluid
        className="d-flex flex-column justify-content-start align-items-center text-center"
        style={{ height: '90vh' }}
      >

        {/* Large Profile Picture at the Top */}
        <div className="d-flex mt-5 mb-5 align-items-center justify-content-center w-100">
          <Image
            src={profilePic}
            alt="Profile"
            rounded
            fluid
            className="shadow"
            style={{ maxHeight: '300px', objectFit: 'cover' }}
          />
        </div>

        {/* Hero Content Below Picture */}
        <div className="mb-4 mt-4">
          <h1 className="fw-bold mb-3">Hello, I'm Carlos 👋</h1>
          <h4 className="text-muted">Full-Stack Developer</h4>
          <p className="mt-4">
            I build modern, scalable web applications with clean, efficient code. Let's bring ideas to life together.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Button variant="primary" href="/projects">View Projects</Button>
            <a href={resumeFile} download className="btn btn-outline-secondary">
              Download Resume
            </a>
          </div>
        </div>

        {/* Scroll down arrow */}
        <div className="mt-auto pb-4">
          <a href="#skills-section" className="text-dark fs-3">
            <i className="bi bi-chevron-double-down"></i>
          </a>
        </div>
      </Container>

      {/* About & Tech Skills Section */}
      <Container fluid id="skills-section" className="pt-5 pb-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <Row className="align-items-center">
            {/* Placeholder image for tech stack icons */}
            <Col md={4} className="text-center mb-4 mb-md-0">
              <Image
                src="https://via.placeholder.com/300x200?text=Tech+Icons"
                alt="Tech Stack Icons"
                fluid
                className="shadow"
              />
            </Col>

            {/* Tech Skills Content */}
            <Col md={8} className="d-flex flex-column justify-content-center">
              <h2 className="mb-4">Tech Skills</h2>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>Languages:</strong> Python, Java, TypeScript, JavaScript, C#, C, SQL, HTML/CSS
                </li>
                <li className="mb-3">
                  <strong>Developer Tools:</strong> Amazon Web Services, Git, GitHub, GitHub Actions, Node.js, Slurm, NoSQL, Expo, Jira, Batch, Bash
                </li>
                <li className="mb-3">
                  <strong>Frameworks:</strong> React Native, .NET, Flask, Bootstrap
                </li>
                <li className="mb-3">
                  <strong>Libraries:</strong> PyTorch, NumPy, Matplotlib, Scikit-learn, Pandas, TensorFlow, Windows Forms
                </li>
                <li className="mb-4">
                  <strong>IDEs:</strong> VS Code, Visual Studio, Jupyter Notebook, Google Colab, IntelliJ
                </li>
              </ul>

              {/* CTA Button to About */}
              <div>
                <Button variant="secondary" href="/about">Learn more about me!</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home;
