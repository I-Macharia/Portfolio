// AboutPage.js

import React from 'react';
import './App.css';

const About = () => {
 return (
    <div className="container">
      <header>
        {/* Header content */}
      </header>
      <section className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            Highly skilled and detail-oriented administrative assistant with a strong focus on delivering exceptional back-office operations, providing comprehensive team support, and handling queries and calls.
          </p>
          <p>
            Passionate about the field of data science and eager to contribute to projects and opportunities in this domain. Continuously improving skills in data analysis, visualization, reporting, and machine learning. Currently pursuing certification in Data Science and Microsoft Azure.
          </p>
          <p>
            Proven ability to manage multiple responsibilities effectively while maintaining attention to detail. Polished editing skills and the ability to meet tight deadlines.
          </p>
          <p>
            Our team of dedicated professionals is committed to providing you with exceptional service and guiding you through the entire process of buying your dream property. Whether you are looking for a cozy beachfront villa, a piece of land or a luxurious vacation home, we have something for everyone.
          </p>
          <p>
            <strong>
              Here is a link to my <a href="https://1drv.ms/b/s!Ak7EKHkZFDrbiTVF1__FCCRAkpcW?e=vy86HW" target="_blank" rel="noreferrer">Resume</a>.
            </strong>
          </p>
        </div>
        <div className="about-music">
          <h3>My favorite reggae playlist.</h3>
          <iframe title="Reggae" style={{ borderRadius: 0 }} src="https://open.spotify.com/embed/album/7dAFOkOHkAFiBVodhFdEsP?utm_source=generator&theme=0" width="100px" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <h3>My favorite pop playlist.</h3>
          <iframe title="Pop" style={{ borderRadius: 0 }} src="https://open.spotify.com/embed/playlist/1tdcvTHR3jRGGD8rudAJh3?utm_source=generator" width="100px" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <h3>My 2023 Top Songs</h3>
          <iframe title="2023" style={{ borderRadius: 12 }} src="https://open.spotify.com/embed/playlist/37i9dQZF1Fa1IIVtEpGUcU?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </section>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
 );
}

export default About;