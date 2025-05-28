import './aboutPage.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Typical from 'react-typical';

function AboutPage() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="about-page">
      <motion.h1
        className="about-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      <motion.div
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="profile-section">
          <motion.img
            src={logo}
            alt="Profile"
            className="profile-photo"
            whileHover={{ scale: 1.05, rotate: 3, boxShadow: '0 0 15px  #8a2be2' }}
            transition={{ type: 'spring', stiffness: 100 }}
          />
          <h2>Hello, I'm Yatharth Prajapat</h2>
          <p className="role">
            <Typical
              steps={['Full Stack Developer', 2000, 'BCA Student', 2000]}
              loop={Infinity}
              wrapper="span"
            />
          </p>
        </div>

        <div className="description-section">
          <p>
            I'm a dedicated <strong>Frontend Developer</strong>  and a passionate learner currently pursuing my Bachelor of Computer Application (BCA) degree from Devi Ahilya Vishwavidyalaya (DAVV), Indore. My journey in web development started with a curiosity for building interactive and user-friendly digital experiences, which quickly grew into a deep passion for coding and problem-solving.
          </p>
          <p>
            I specialize in React JS and JavaScript, focusing on creating clean, efficient, and responsive web applications that provide seamless user experiences across devices. I believe that a great frontend developer must blend creativity with technical expertise, and I constantly strive to improve both through hands-on projects and continuous learning.
          </p>




          {showMore && (
            <p style={{ marginTop: '1rem', maxWidth: '100%', textAlign: 'center' }}>
              I also enjoy exploring backend technologies, learning about UI/UX design principles, and contributing to open-source projects in my free time.
              <br />
              <br />
              Outside of coding, I am a fitness enthusiast who finds balance in life by hitting the gym regularly. I enjoy curating high-energy workout playlists that keep me motivated, often pairing that with my love for delicious food like biryani — because a strong mind and body deserve great fuel! This balance of discipline and enjoyment helps me stay focused and productive in both my personal and professional life.
            </p>
          )}
          <button
            onClick={() => setShowMore(!showMore)}
            className="read-more-btn"
          >
            {showMore ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-120 300-300l58-58 122 122 122-122 58 58-180 180ZM358-598l-58-58 180-180 180 180-58 58-122-122-122 122Z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-120 300-300l58-58 122 122 122-122 58 58-180 180ZM358-598l-58-58 180-180 180 180-58 58-122-122-122 122Z" /></svg>}
          </button>
          <div className="skills-section">
            <h3>My Skills</h3>
            <div className="skills-list">
              {['React JS', 'JavaScript', 'HTML/CSS', 'Frontend Development', 'Responsive Design', 'Git & GitHub', 'Node.js (Basics)'].map(skill => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 8px #8a2be2' }}
                  className="skill-pill"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutPage;
