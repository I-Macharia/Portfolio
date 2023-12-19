import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const Market = () => {
  return (
    <>
      {/* Marketplace Section */}
      <section className="market-item">
        <h2>Marketplace</h2>
        {/* Add images of property gallery here */}
      </section>

      {/* Container for the main content */}
      <div className="container">
        {/* Market Section */}
        <section className="market">
          <div className="market-item">
            <h2>Amazon Prime Student 6-Month Trial</h2>
            <p>Are you a student looking to unlock a world of convenience and savings? The Amazon Prime Student 6-Month Trial is your golden ticket to a treasure trove of exclusive perks. Join the millions of students already enjoying the benefits of Amazon Prime Student.</p>
            <a target="_blank" href="https://www.amazon.com/gp/student/signup/info?_encoding=UTF8&linkCode=ib1&tag=bobbybob0a-20&linkId=11a52d0736b3e7fbe55b2a9665571ba6&ref_=ihub_curatedcontent_72f7e23f-1364-4127-b830-8df992a72463">Amazon Prime Student 6-Month Trial</a>
          </div>

          <div className="market-item">
            <h2>Blink Floodlight camera - Wireless smart security Outdoor camera (3rd Gen) + LED mount, two-year battery, motion detection - 1 camera system (Black)</h2>
            <p>Introducing the Blink Floodlight – Your Ultimate Wire-Free HD Smart Security LED Floodlight Camera</p>
            <p><strong>Product Description:</strong></p>
            <p>The Blink Floodlight is a cutting-edge security solution designed for the outdoors. This innovative product combines state-of-the-art technology with a user-friendly design to provide you with the ultimate peace of mind. With a focus on wireless operation, high-definition surveillance, and user convenience, the Blink Floodlight is a game-changer in home security.</p>
            <a target="_blank" href="https://www.amazon.com/Blink-Floodlight-Camera/dp/B094YXVVRF?_encoding=UTF8&linkCode=ib1&tag=bobbybob0a-20&linkId=0b39867246ad794f73e77960f4cc9d05&ref_=ihub_curatedcontent_39beba8c-ca4b-4525-94ea-e7e3fc388e7f">Blink Outdoor Camera - Early Prime Day Deals</a>
          </div>

          <div className="market-item">
            <h2>Join Amazon Prime: Limited time free trial.</h2>
            <p>Amazon Prime Video is a world-class streaming service that brings the best of entertainment directly to your screens. With a vast and diverse selection of movies, TV shows, and exclusive original content, it offers something for everyone.</p>
            <p><strong>Subscription Benefits:</strong></p>
            <p>Amazon Prime Video is included as part of the Amazon Prime subscription, which offers additional benefits like free two-day shipping on Amazon orders, access to Amazon Music, Kindle eBooks, and more.</p>
            <p>Whether you're a movie buff, a binge-watcher, or someone seeking family entertainment, Amazon Prime Video has it all. It's a one-stop destination for quality content that caters to a wide range of tastes and preferences. Start your free trial today and discover the world of entertainment that awaits on Amazon Prime Video.</p>
            <a target="_blank" href="http://www.amazon.com/gp/video/primesignup?_encoding=UTF8&linkCode=ib1&tag=bobbybob0a-20&linkId=e49f9a1f7b9157732a955ee19bd69f23&ref_=ihub_curatedcontent_5d5520b9-1915-4beb-bdfc-01a90af1be3f">Prime Video Free trial</a>
          </div>
        </section>
      </div>
      {/* End of .container */}

      {/* Footer Section */}
      <footer>
        <ul className="navigation">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blogs</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/market">Marketplace</Link></li>
          <li><a href="https://machariagichoya.substack.com/" className="btn" target="_blank" rel="noreferrer">Subscribe</a></li>
        </ul>
        <br />
        <p>&copy; 2023 Gichoya Macharia</p>
      </footer>
    </>
  );
}

export default Market;
