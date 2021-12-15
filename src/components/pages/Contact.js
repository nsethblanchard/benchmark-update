import React from "react";

function Contact() {
  return (
    <>
      <div>
        <img
          className="staunton"
          src="/images/spring_in_staunton.jpg"
          alt="Staunton city"
        />
      </div>
      <div className="page_content">
        <h1 className="title">Contact Us Today</h1>
        <p className="mission">
          We would love to speak with you about your agencies needs and how our
          services may benefit your clients.
        </p>
        <p className="mission">
          By email:{" "}
          <a href="mailto: seth.blanchard@benchmark-employment.com">
            seth.blanchard@benchmark-employment.com
          </a>
        </p>
        <p className="mission">
          By Phone: <strong>(540) 688-7016</strong>
        </p>
      </div>
    </>
  );
}

export default Contact;
