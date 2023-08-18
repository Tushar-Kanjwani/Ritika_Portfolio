import React, { useEffect, useState } from 'react';
import './App.css';
import img0 from "../src/image/img0.png";
import img1 from "../src/image/eco.PNG";
import img2 from "../src/image/mobile.jpg";

// import ProjectCardData from './components/WorkCardData';

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`App ${visible ? 'visible' : ''}`}>
      <nav className={`navbar ${visible ? 'visible' : ''}`}>
        <div className="navbar-content">
          <a href="data:image/jpeg;base64,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" className="navbar-logo">
      
          </a>
          <ul className="navbar-menu">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    <div className="page-container">
    <header className={`header ${visible ? 'visible' : ''}`}>
      <div className="header-content">
        <h1 className="header-title">Ritika Dhanwani</h1>
        <p className="header-description">Web Developer & Designer</p>
      </div>
    </header>
  </div>
  
  <section className={`about ${visible ? 'visible' : ''}`} id="about">
  <div className="about-content">
    <div className="about-text">
      <h2>About Me</h2>
      <p>
        Hello, I'm Ritika Dhanwani – a passionate web developer and designer who transforms ideas into
        captivating online experiences.
      </p>
      <p>
        With a toolbox filled with HTML, CSS, and JavaScript, I specialize in creating user-friendly and intuitive
        websites that not only look remarkable but also provide seamless navigation. My approach to web development
        revolves around collaboration and keeping pace with industry trends, ensuring that every project I undertake
        stands out in the ever-evolving digital landscape.
      </p>
      <p>
        Let's collaborate to bring your ideas to life and create extraordinary digital solutions that leave a lasting
        impact. Together, we can build the future of the web and turn your vision into reality.
      </p>
    </div>
    <div className="about-image">
      <img src="https://media.licdn.com/dms/image/D4D03AQGAbbpbFFO9wA/profile-displayphoto-shrink_800_800/0/1689362120422?e=1697068800&v=beta&t=fmwlGwQQLzP2l18w-icWzCVmASML60TrK4gUKCs0UTE" alt="Ritika Dhanwani" />
    </div>
  </div>
</section>
   
<section className={`projects ${visible ? 'visible' : ''}`} id="projects">
  <h2>Projects</h2>
  <div className="project-boxes">
    <div className="project-box">
      <div className="project-image">
        <img src={img0} alt="Project 1" />
      </div>
      <div className="project-details">
        <h3>Netflex clone</h3>
        <p>
        Replicating the UI and features of Netflix, showcasing front-end skills, API integration, and UI design.
         A responsive, interactive experience demonstrating modern web development proficiency.     </p>
        <a href="https://eloquent-dango-c48a8d.netlify.app/" className="project-button">View Project</a>
      </div>
    </div>
    <div className="project-box">
      <div className="project-image">
        <img src={img1} alt="Project 2" />
      </div>
      <div className="project-details">
        <h3>Ecommerce Website</h3>
        <p>
        Developed an e-commerce platform with dynamic product listings, secure cart functionality, 
        and seamless checkout. Highlighting skills in building user-friendly shopping experiences
         and backend integration.
  
               </p>
        <a href="https://starlit-boba-0356a3.netlify.app/" className="project-button">View Project</a>
      </div>
    </div>
    <div className="project-box">
      <div className="project-image">
        <img src={img2} alt="Project 3" />
      </div>
      <div className="project-details">
        <h3>Mobile Shop Application</h3>
        <p>
        I have developed a dynamic Java-based mobile shop application that seamlessly integrates inventory management and customer interactions, offering a user-friendly experience that enhances operational efficiency and customer satisfaction.
        </p>
        <a href="https://www.linkedin.com/posts/engr-tushar-kanjwani-_javaprogramming-digital-mobile-activity-7027732776246218752-DhJo?utm_source=share&utm_medium=member_desktop" className="project-button">View Project</a>
      </div>
    </div>
    {/* Add more project boxes as needed */}
  </div>
</section>

     
<section className={`contact ${visible ? 'visible' : ''}`} id="contact">
  <h2>Contact Me</h2>
  <p>
    Want to discuss a project, collaborate, or just say hi? Don't hesitate to get in touch with me!
  </p>
  <div className="contact-details">
    <p>Email: <a href="mailto:ritzdhanwani@gmail.com">Ritzdhanwani@gmail.com</a></p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/ritika-dhanwani-ba2079231/">Ritika Dhanwani</a></p>
    <p>Twitter: <a href="https://twitter.com/ritzdhanwani">Ritz Dhanwani</a></p>
  </div>
  
  <h3>Send me a message:</h3>
  <form>
    <label htmlFor="name">Your Name:</label>
    <input type="text" id="name" name="name" required />
    
    <label htmlFor="email">Your Email:</label>
    <input type="email" id="email" name="email" required />
    
    <label htmlFor="message">Your Message:</label>
    <textarea id="message" name="message" rows="4" required></textarea>
    
    <button type="submit">Send</button>
  </form>
</section>



      <footer className={`footer ${visible ? 'visible' : ''}`}>
        <p>&copy; {new Date().getFullYear()} Ritika Dhanwani. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
