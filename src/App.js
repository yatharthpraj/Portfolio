import './style.css';
import { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ContactForm from './components/Contact/contact.js';
import NavBar from './components/NavBar/navbar.js';
import MainSection from './components/MainSection/mainsection.js';
import About from './components/AboutSection/about.js';
import Projects from './components/Projects/project.js';
import Footer from './components/Footer/footer.js';
import AboutPage from './Pages/About_page/aboutPage.js';
import ProjectPage from './Pages/Project/project.js';
function App() {
  const contactRef = useRef(null);
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Apply theme class to <body> on change
  useEffect(() => {
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
  }, [isDark]);
  const handleToggleContact = () => {
    if (contactRef.current) {
      contactRef.current.toggle();
    } else {
      console.warn("ContactToggle is not mounted yet.");
    }
  };

  return (
    <Router>
      <div className="container">
        {/* Meta and Head elements should be placed in index.html, not here */}

        {/* Shared Navbar */}
        {/* <NavBar /> */}
        <NavBar isDark={isDark} toggleTheme={toggleTheme} />
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <MainSection />
                <About />
                <Projects />
                <div className="contact-me">
                  <button onClick={handleToggleContact}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF">
                      <path d="M240-399.33h315.33V-466H240v66.67ZM240-526h480v-66.67H240V-526Zm0-126.67h480v-66.66H240v66.66ZM80-80v-733.33q0-27 19.83-46.84Q119.67-880 146.67-880h666.66q27 0 46.84 19.83Q880-840.33 880-813.33v506.66q0 27-19.83 46.84Q840.33-240 813.33-240H240L80-80Zm131.33-226.67h602v-506.66H146.67v575l64.66-68.34Zm-64.66 0v-506.66 506.66Z" />
                    </svg>
                  </button>
                </div>
                <ContactForm ref={contactRef} />
              </>
            }
          />

          {/* About Page */}
          <Route path="/about" element={<AboutPage />} />
          {/* Projects Page */}
          <Route path="/projects" element={<ProjectPage />} />


        </Routes>

        {/* Shared Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
