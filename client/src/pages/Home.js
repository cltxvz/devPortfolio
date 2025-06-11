import { Container, Button, Image } from 'react-bootstrap';
import profilePic from '../components/Home/profile.jpg';
import resumeFile from '../components/Files/resume.pdf';

function Home() {
  return (
    <div className="d-flex flex-column flex-grow-1" style={{ backgroundColor: 'white' }}>
      <Container
        fluid
        className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center py-5"
        style={{
          background: 'linear-gradient(to bottom, rgb(245, 251, 252), rgb(245, 251, 252))',
        }}
      >
        {/* Profile Picture */}
        <div className="mb-4">
          <Image
            src={profilePic}
            alt="Profile"
            rounded
            fluid
            className="shadow"
            style={{ maxHeight: '320px', objectFit: 'cover' }}
          />
        </div>

        {/* Text Section */}
        <div style={{ maxWidth: '650px' }}>
          <h2 className="fw-bold mb-3 display-5">Hello, I'm Carlos 👋</h2>
          <h4 className="text-muted mb-4">Software Engineer</h4>
          <p className="fs-6 mb-4">
            I build modern apps and tools with clean code, scalable architecture, and a passion for problem-solving!
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="primary" size="md" href="/projects">
              View Projects
            </Button>
            <a
              href={resumeFile}
              download="Carlos A. Cárdenas - Resume.pdf"
              className="btn btn-outline-secondary btn-md"
            >
              Download Resume
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
