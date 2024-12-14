import React from "react";

function Contact() {
  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center">Contact Page</h1>
      <p className="lead text-center">
        If you want to reach out to us, please fill out the form below, and we
        will get back to you as soon as possible.
      </p>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Your Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Your Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Your message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
