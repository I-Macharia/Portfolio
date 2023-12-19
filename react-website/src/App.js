// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import ProjectsPage from './components/ProjectsPage';
import MarketPage from './components/MarketPage';

const App = () => {
  return (
     <><Router>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/Market">Market</Link>
          </li>
        </ul>
      </nav>
      <Router>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>

      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
    
      </Routes>
      </Router>
      <Routes>
        <Route path="/Home" exact component={HomePage} />
        <Route path="/About" component={AboutPage} />
        <Route path="/Blog" component={BlogPage} />
        <Route path="/Contact" component={ContactPage} />
        <Route path="/Projects" component={ProjectsPage} />
        <Route path="/Market" component={MarketPage} />
      </Routes>
    </Router><footer>
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
      </footer></>
 );
};

export default App;