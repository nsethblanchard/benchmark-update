import React from "react";

function Services() {
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
        <h1 className="title">Available Services</h1>
        <h3 className="subtitle">Current Services Offered</h3>
        <ul className="mission">
          <li>
            Assessment of background to determine employment/barrier mitigation
          </li>
          <li>Resume and job search essentials</li>
          <li>Facilitation of discussions between local community agencies</li>
          <li>
            Assistance with interviews and how to talk with potential employers
          </li>
          <li>Direct intervention with employers if needed</li>
          <li>Scheduling of employment and responsibilities at home</li>
          <li>
            Help in locating transportation and child care along with job follow
            up
          </li>
        </ul>
        <h3 className="subtitle">Barriers Addressed</h3>
        <ul className="mission">
          <li>Educational limitations</li>
          <li>ESL and other language issues</li>
          <li>Transportation</li>
          <li>Child care</li>
          <li>Job retention problems and/or lack of job history</li>
          <li>Criminal and drug backgrounds</li>
          <li>Family instability</li>
        </ul>
      </div>
    </>
  );
}

export default Services;
