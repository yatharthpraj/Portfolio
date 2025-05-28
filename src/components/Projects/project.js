import './project.css';
import projectImage from '../../assets/Completion Certificate _ SkillsBuild - Google Chrome 26-03-2025 21_04_19.png'; // Replace with the actual path to your project image
function project(){
    return (
        <section id="projects" className="projects-section">
          <h2 className="section-title">PROJECTS</h2>
          <p className="section-description">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
          <div className="project-container">
            <div className="project">
              <img
                src={projectImage}
                alt="Dopefolio Project Screenshot"
                loading="lazy"
                className="animate__animated animate__backInLeft animate__slow"
              />
              <div className="project-info">
                <h3>Dopefolio</h3>
                <p>
                  Dopefolio is a successful Open-Source project that I created which
                  has been featured on some of the biggest tech sites like
                  CSS-Tricks, Hostinger, etc. It is used by thousands of developers
                  globally.
                </p>
                <a href="#" className="btn">
                  Case Study
                </a>
              </div>
            </div>
            <div className="project">
              <div className="project-info">
                <h3>Wilsonport</h3>
                <p>
                  Wilsonport is a multi-service logistics and transport company and
                  I created their website from scratch using the frontend tools I
                  know.
                </p>
                <a href="#" className="btn">
                  Case Study
                </a>
              </div>
              <img
                src={projectImage}
                alt="Dopefolio Project Screenshot"
                loading="lazy"
                className="animate__animated animate__backInRight animate__slow"
              />
            </div>
            <div className="project">
              <img
                src={projectImage}
                alt="Dopefolio Project Screenshot"
                loading="lazy"
                className="animate__animated animate__backInLeft animate__slow"
              />
              <div className="project-info">
                <h3>Boreal Coffee Clone</h3>
                <p>
                  I re-created the frontend of Boreal Coffee’s official web app
                  because I got attracted to their beautiful UI.
                </p>
                <a href="#" className="btn">
                  Case Study
                </a>
              </div>
            </div>
            <div className="project">
              <div className="project-info">
                <h3>Crown Template</h3>
                <p>
                  Crown is a web template that I created targeting the restaurant
                  and food industry which anyone can use to present their business
                  online.
                </p>
                <a href="#" className="btn">
                  Case Study
                </a>
              </div>
              <img
                src={projectImage}
                alt="Dopefolio Project Screenshot"
                loading="lazy"
                className="animate__animated animate__backInRight animate__slow"
              />
            </div>
          </div>
        </section>
    );

};

export default project;