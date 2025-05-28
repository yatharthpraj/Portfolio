import './about.css';

function about(){
    return(
        <section id="about" className="about">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Here you will find more information about me, what I do, and my current
            skills mostly in terms of programming and technology
          </p>
          <div className="about-content">
            {/* Left Column */}
            <div className="about-left">
              <h3>Get to know me!</h3>
              <p>
                I'm a <strong>Frontend Focused Web Developer</strong> building and
                managing the frontend of websites and web applications that leads to
                the success of the overall product.
                <br />
                <br />I also like sharing content related to the stuff that I have
                learned over the years in <strong> Web Development</strong> to help
                other people of the Dev Community. Feel free to Connect or Follow me
                on my{" "}
                <a
                  href="https://www.linkedin.com/in/yatharth-prajapat-963b96294/"
                  target="_blank"
                >
                  Linkedin
                </a>{" "}
                and{" "}
                <a href="https://github.com/yatharthpraj" target="_blank">
                  GitHub
                </a>{" "}
                where I post useful content related to Web Development and
                Programming
                <br />
                <br />
                I’m open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don’t hesitate to <strong>contact</strong> me.
              </p>
              <a href="#contact" className="btn">
                Contact Me
              </a>
            </div>
            {/* Right Column */}
            <div className="about-right">
              <h3>My Skills</h3>
              <div className="skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>WordPress</span>
                <span>PHP</span>
                <span>SASS</span>
                <span>Git</span>
                <span>GitHub</span>
                <span>Responsive Design</span>
                <span>SEO</span>
                <span>Terminal</span>
              </div>
            </div>
          </div>
        </section>
    );
}

export default about;