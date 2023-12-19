// HomePage.js
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";



const Home = () => (
  <div>
    <header>
      <img src="assets/Images/background.jpg" alt="keyword" width="200px" />
      <h1>Gichoya Macharia</h1>
      <h2>Data Scientist</h2>

      <div className="container">
        <Routes>
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/market" component={Market} />

        </Routes>
      </div>
    </header>


    <footer>
      <ul className="navigation">
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/Blog">Blogs</Link></li>
        <li><Link to="/Contact">Contact Me</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Market">Marketplace</Link></li>
        <li><a href="https://machariagichoya.substack.com/" className="btn" target="_blank" rel="noreferrer">Subscribe</a></li>
      </ul>
      <br />
      <p>&copy; 2023 Gichoya Macharia</p>
    </footer>
  </div>
);

const About = () => (
  <div className="container">
    {/* About content */}
  </div>
);

const Blog = () => (
  <div className="container">
    {/* Blog content */}
  </div>
);

const Contact = () => (
  <div className="container">
    {/* Contact content */}
  </div>
);

const Projects = () => (
  <div className="container">
    {/* Projects content */}
  </div>
);

const Market = () => (
  <div className="container">
    {/* Marketplace content */}
  </div>
);


export default Home;
