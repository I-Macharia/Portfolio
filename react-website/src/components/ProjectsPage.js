// App.js (or any appropriate component file)
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


import './App.css'; // Import your CSS file

const Projects = () => (
  <div>
    <header>
      <h1>Gichoya Macharia</h1>
      <h2>Data Scientist</h2>
      <nav>
        <ul className="navigation">
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Blog">Blogs</Link></li>
          <li><Link to="/Contact">Contact Me</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="/Market">Marketplace</Link></li>
        </ul>
      </nav>
    </header>

    <section className="portfolio-item">
      <h2>Projects</h2>
      {/* Add content for projects here */}
    </section>

    <div id="footer">
      <ul className="navigation">
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Blog">Blogs</Link></li>
        <li><Link to="/Contact">Contact Me</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Market">Marketplace</Link></li>
        <li><a href="https://machariagichoya.substack.com/" className="btn" target="_blank" rel="noopener noreferrer">Subscribe</a></li>
      </ul>
      <p>&copy; 2023 Gichoya Macharia</p>
    </div>
  </div>
);

// Additional components (About, Blog, Contact, Projects, Market) can be created similarly

export default Projects;
