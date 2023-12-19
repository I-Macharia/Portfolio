// Blog.js (or any appropriate component file)
import React, { useEffect, useRef } from 'react';
import {
 BrowserRouter as Router,
 Routes,
 Route,
 Link,
} from "react-router-dom";
import './App.css'; // Import your CSS file

const Blog = () => {
 const iframeRef = useRef(null);

 useEffect(() => {
    // Listen for iframe's scroll events
    const iframe = iframeRef.current;
    iframe.addEventListener('load', () => {
      iframe.contentWindow.addEventListener('scroll', (event) => {
        // Send scroll position to the parent page
        window.parent.postMessage({
          scrollY: event.target.scrollingElement.scrollTop,
          iframeScroll: true // Update this flag to indicate iframe scrolling
        }, '*'); // '*' allows cross-origin communication
      });
    });

    // Receive scroll position from iframe
    window.addEventListener('message', (event) => {
      if (event.origin === 'https://bobchronicles.wordpress.com' && event.data.iframeScroll) {
        // Update parent page's scroll position
        window.scrollTo(0, event.data.scrollY);
      }
    });
 }, []);

 return (
    <div>
      {/* Header Section */}
      <header>
        <ol className="nav_header">
          <h2>Gichoya Macharia</h2>
          <h3>Writer</h3>
        </ol>

        {/* Your navigation list */}
        <ul className="navigation">
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Blog">Blogs</Link></li>
          <li><Link to="/Contact">Contact Me</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="/Market">Marketplace</Link></li>
        </ul>
      </header>

      {/* Container for the main content */}
      <div className="container">
        {/* Blog Posts Section */}
        <section className="blog">
          <iframe ref={iframeRef} title="blog-iframe" src="https://bobchronicles.wordpress.com/" frameBorder="0" scrolling="yes" width="100%" height="600px"></iframe>
        </section>
      </div>
      {/* End of .container */}

      {/* Footer Section */}
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
        <br/>
        <p>&copy; 2023 Gichoya Macharia</p>
      </footer>
    </div>
 );
};

export default Blog;