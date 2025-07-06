import React from 'react';
import '../styles/global.css';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-page">
      <nav>
        <a href="/profile"><p>PROFILE</p></a>
        <a href="/explore"><p>BROWSE</p></a>
<a href="/home" className="MainTitle">
  <p>WAGON<span className="purpleColor">VOGUE</span></p>
</a>
        <a href="/about"><p>ABOUTUS</p></a>
        <a href="/login" className="LoginButton"><p>LOGIN</p></a>
      </nav>

      <main>
        <h2>ABOUT <span className="uspurple">US</span></h2><br />
        <p>We Final Year Computer Science Students of <span className="uspurple">UKF</span> College Of Engineering and Technology.</p>
        <p>
          This <span className="uspurple">Website</span> acts a platform for users to book different applications such as saloons, movies, trains, bus etc.
        </p>
        <h3><span className="uspurple">Our Team</span></h3>
        <h4>Hilal Muhammed (<span className="uspurple">Team Lead</span>) &nbsp;&nbsp;&nbsp;&nbsp;
            Adithya Jayan (<span className="uspurple">Senior Developer</span>)</h4>
        <h4>Aswin D S (<span className="uspurple">Senior Developer</span>) &nbsp;&nbsp;&nbsp;&nbsp;
            Salman Remli (<span className="uspurple">UI/UX Developer, Front End Developer</span>)</h4>
        <h4>Aleesha Rahim (<span className="uspurple">Backend Developer</span>) &nbsp;&nbsp;&nbsp;&nbsp;
            Chandana Nair (<span className="uspurple">Backend Developer</span>)</h4>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-section brand">
            <h2>Wagon<br />Vogue</h2>
          </div>
          <div className="footer-section">
            <h3>Our Services</h3>
            <ul>
              <li>Saloons</li>
              <li>Restaurants</li>
              <li>Concerts</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Info</h3>
            <ul>
              <li>My Account</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
            </div>
            <p>Gmail : hello@gamil.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
