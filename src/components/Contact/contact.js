import { useRef, useImperativeHandle, forwardRef, useState } from 'react';
import './contact.css';

const ContactToggle = forwardRef((_, ref) => {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useImperativeHandle(ref, () => ({
    toggle: handleToggle,
  }));

  function handleToggle() {
    if (isVisible) {
      // Trigger closing animation
      setIsAnimating(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsAnimating(false);
      }, 500); // match animation duration

    } else {
      // Open immediately
      setIsVisible(true);
    }
  }

  return (
    <>

      {/* Contact form panel when visible */}
      {isVisible && (
        <section
          id="contact"
          ref={contactRef}
          className={`contact-panel animate__animated ${
            isAnimating ? 'animate__rotateOutUpRight' : 'animate__rotateInUpRight'
          } animate__faster`}
        >
          <div className="contact-close-button">
            <h4>Hi There, 👋</h4>
            <button className="close-btn" onClick={handleToggle}>
               <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#000000">
                <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
              </svg>
            </button>
          </div>
          <p>Questions or ideas? <br /> Send them over — I’ll get back to you!</p>
          <div className="contact-container">
            <form className="contact-form">
              <div className="form-control">
                <input type="text" placeholder=" " />
                <label>
                  <span style={{ transitionDelay: "350ms" }}>U</span>
                  <span style={{ transitionDelay: "300ms" }}>s</span>
                  <span style={{ transitionDelay: "250ms" }}>e</span>
                  <span style={{ transitionDelay: "200ms" }}>r</span>
                  <span style={{ transitionDelay: "150ms" }}>n</span>
                  <span style={{ transitionDelay: "100ms" }}>a</span>
                  <span style={{ transitionDelay: "50ms" }}>m</span>
                  <span style={{ transitionDelay: "0ms" }}>e</span>
                </label>
              </div>

              <div className="messageBox">
                <input id="messageInput" type="text" placeholder="Message..." />
                <button id="sendButton" type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
});

export default ContactToggle;
