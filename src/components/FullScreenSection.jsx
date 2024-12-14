import React from "react";
import { Link } from "react-router-dom";

function FullScreenSection() {
  return (
    <div className="fullscreen-section">
      <div className="text-section">
        <h1>Grow Your Business with Our Digital Marketing Solutions</h1>
        <p>
          Unlock the full potential of your brand with our expert digital
          marketing services. From SEO to social media marketing, we offer
          strategies that drive results.
        </p>
        <Link to="/contact">
          <button className="btn">Book a Free Consultation</button>
        </Link>
      </div>
      <div className="image-section">
        {/* Optional: Add any small image here to enhance visual appeal */}
      </div>
    </div>
  );
}

export default FullScreenSection;
