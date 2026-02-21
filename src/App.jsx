import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="app-container">
      {/* Background ambient blobs */}
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>

      {/* Main Layout */}
      <nav className="navbar glass">
        <div className="container nav-content">
          <a href="#home" className="logo text-gradient">Portfolio.</a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <section id="home" className="hero-section container animate-fade-in">
          <h1>
            Hi, I'm <span className="text-gradient">Rohan Patel</span>
          </h1>
          <p className="subtitle">
            I am an AIML Engineer passionate about building modern, interactive web experiences using advanced AI tools.
          </p>
          <div className="cta-container">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </section>

        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="footer glass">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Rohan Patel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
