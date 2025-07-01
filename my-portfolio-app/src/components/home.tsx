import React, { useState, useRef } from 'react';
import './home.css';


const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); // Default to dark mode
  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

const heroImageSrc = theme === 'dark' ? '/batman.jpg' : '/robin_profile_pic.jpg';
  const heroAltText = theme === 'dark' ? 'Batman Profile' : 'Robin Nguyen Profile';
  const heroHeadingText = theme === 'dark'
    ? (
      <>
        Hello! I'm <span className="hero-heading-highlight">Batman...</span> Jk It's still Robin!
      </>
    )
    : (
      <>
        Hello! I'm <span className="hero-heading-highlight">Robin Nguyen</span>
      </>
    );

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <div className={theme === 'dark' ? 'dark super' : 'light'}>
    <div className="app-container">

      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="nav-brand">Robin Nguyen</div>
          <div className="nav-links">
            <button onClick={() => scrollToSection(aboutRef)} className="nav-link">About</button>
            <button onClick={() => scrollToSection(projectsRef)} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection(skillsRef)} className="nav-link">Skills</button>
            <button onClick={() => scrollToSection(contactRef)} className="nav-link">Contact</button>
          </div>
        </div>

        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '☀ Light' : '🌙 Dark'}
        </button>
      </nav>

      {/* Main Content */}
      <main className="container px-6 py-12">

        {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-content">
              <h1 className="hero-heading">
                {heroHeadingText} {/* Use the dynamically set hero heading */}
              </h1>
              <p className="hero-text">
                An experienced Software Engineer passionate about developing enterprise-level applications and exploring cutting-edge technologies.
              </p>
              <button onClick={() => scrollToSection(contactRef)} className="hero-button">
                Get in Touch
              </button>
            </div>
            <div className="hero-image-container">
              <img
                src={heroImageSrc} // Dynamically set the image source
                alt={heroAltText} // Dynamically set the alt text
                className="hero-image"
              />
            </div>
          </section>

        {/* Projects */}
        <section id="projects" ref={projectsRef} className="section-common">
          <h2 className="section-heading">Highlighted Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <img
                src="https://placehold.co/400x250/3f51b5/ffffff?text=AI+Resume+Builder"
                alt="AI Resume Builder Screenshot"
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">AI Resume Builder</h3>
                <p className="project-description">
                  Developed a full-stack AI-powered resume builder designed to help users create professional resumes efficiently.
                </p>
                <a
                  href="https://simpleres-io-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="project-placeholder"><p>More projects coming soon!</p></div>
            <div className="project-placeholder"><p>Another project here!</p></div>
          </div>
        </section>

        {/* About */}
        <section id="about" ref={aboutRef} className="section-common">
          <h2 className="section-heading">About Me</h2>
          <div className="about-content">
            <p>
              As an experienced Software Engineer with over three years in the field, I specialize in developing robust enterprise-level applications that serve thousands of users...
            </p>
            <p>
              I spent one year and seven months at Acumen, LLC... Then SAIC... and now building my AI Resume Builder:
              <a
                href="https://simpleres-io-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                simpleres-io-frontend.vercel.app
              </a>
            </p>
            <p>
              In my free time, I explore cafes and build cool things. Let's collaborate!
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" ref={skillsRef} className="section-common">
          <h2 className="section-heading">My Skills</h2>
          <div className="skills-grid">
            {[
              { title: 'Languages', color: 'skill-category-languages', items: ['C#', 'Visual Basic', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Python', 'C++'] },
              { title: 'Frameworks & Libraries', color: 'skill-category-frameworks', items: ['.NET Framework', 'React.js', 'Next.js', 'Node.js', 'Django'] },
              { title: 'Databases', color: 'skill-category-databases', items: ['PostgreSQL', 'Oracle SQL', 'SQL Server', 'Stored Procedure Development'] },
              { title: 'Cloud & DevOps', color: 'skill-category-cloud', items: ['AWS S3 Management', 'AWS EC2 Management', 'AWS RDS Management'] },
              { title: 'Other Tools & Concepts', color: 'skill-category-other', items: ['Git', 'RESTful APIs', 'Agile Methodologies', 'TypeScript', 'Docker (Basic)'] },
            ].map(section => (
              <div key={section.title}>
                <h3 className={`skill-category-heading ${section.color}`}>{section.title}</h3>
                <div className="skill-list">
                  {section.items.map(skill => (
                    <span key={skill} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" ref={contactRef} className="section-common contact-section-bg">
  <div className="container">
    <h2 className="section-heading">Get In Touch</h2>
    <p className="contact-intro-text">
      I'm always open to new opportunities, collaborations, or just a friendly chat.
      Feel free to reach out directly via email or connect with me on social media.
    </p>

    <div className="contact-buttons-container">
      <a href="mailto:robinnguyenk@gmail.com" className="hero-button contact-email-button">
        Say Hello!
      </a>
      <div className="contact-social-links">
        <a href="https://www.linkedin.com/in/robinnguyenk/" target="_blank" rel="noopener noreferrer" className="social-link">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.27V9.771h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 6.879v7.016zM5.233 7.564c-1.168 0-2.104-.934-2.104-2.093 0-1.154.936-2.09 2.104-2.09s2.104.936 2.104 2.09c0 1.159-.936 2.093-2.104 2.093zm-1.792 12.888h3.584V9.771H3.441v10.681zM22.227 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.456c.98 0 1.773-.773 1.773-1.729V1.729C24 .774 23.207 0 22.227 0z"/></svg>
          LinkedIn
        </a>
        <a href="https://github.com/RobKNguyen" target="_blank" rel="noopener noreferrer" className="social-link">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.73.084-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.49.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.295-1.552 3.3-1.23 3.3-1.23.645 1.653.24 2.873.105 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>
      </div>
    </div>
  </div>
</section>
      </main>

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} Robin Nguyen. All rights reserved.</p>
          <p className="footer-text-sm">Built with React and modern CSS</p>
        </div>
      </footer>
    </div>
  </div>
);

};

export default App;
