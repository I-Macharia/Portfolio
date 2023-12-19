// Contact.js

import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
 return (
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
      <div className="container">
        <section className="portfolio">
          <h2>Contact Me</h2>
          <p>If you have any inquiries or need assistance, please feel free to get in touch with me. I am always happy to be of any assistance.</p>
          <p>Email: Macharia.Gichoya@gmail.com</p>
          <p>Phone: +2547 1833 8439</p>
          <address>
            <p>Address: 123 Main Street, Cityville, Country</p>
          </address>
        </section>
      </div>
      <section className="container">
        <section className="social-media">
          <h2>Follow Me on Social Media</h2>
          {/* Social media icons */}
        </section>
      </section>
      <footer>
        <ul className="navigation">
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Blog">Blogs</Link></li>
          <li><Link to="/Contact">Contact Me</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="/Market">Marketplace</Link></li>
          <li><a href="https://machariagichoya.substack.com/" className="btn" target="_blank" rel="noopener noreferrer">Subscribe</a></li>
        </ul>
        <br />
        <p>&copy; 2023 Gichoya Macharia</p>
      </footer>
    </div>
 );
};

export default Contact;