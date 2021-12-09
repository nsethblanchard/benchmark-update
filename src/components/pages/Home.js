import React from "react";
import "./pages.css";

function Home() {
  return (
    <>
      <div>
        <img
          className="staunton"
          src="/images/Staunton.png"
          alt="Staunton city"
        />
      </div>
      <div className="page_content">
        <h1 className="title">Employment Services in The Valley</h1>
        <h3 className="subtitle">Helping families since 2012</h3>
        <p className="mission">
          BEST, LLC is a company devoted to offering top quality job search
          services to public agencies who desire a great return on investment
          for their clients. We offer an organized approach to finding the
          correct solutions to employment barriers such as transportation,
          daycare, lack of consistent job history, and general disorganization
          that burden many low-income families. Our services are flexible and
          can be molded to fit each individual’s background while maintaining a
          structure that will result in quick success. We are a great link in
          the chain to self-sufficiency and success in the workplace and life.{" "}
        </p>
      </div>
      <div className="page_content">
        <h3 className="subtitle">Why Use Us</h3>
        <p className="mission">
          Looking for employment is hard for anyone. There are many resources
          that can be had for the aggressive, organized job seeker with
          reasonable computer skills and a willingness to achieve at any cost.
          The problem is that many people do not have these qualities and become
          mired in all of the complications that life throws their way.
        </p>
        <p className="mission">
          At BEST, LLC, we work to prioritize goals and ensure that each person
          is fully equipped for their job search through creation of resumes,
          interview etiquette, and direct one on one assistance with online and
          paper applications.
        </p>
        <p className="mission">
          We also assist with all ancillary barriers that many low income
          families face, such as locating daycare and transportation, finding a
          work/life balance for the newly employed, and ensuring that clients
          understand how maintaining employment will create positive long term
          change in their lives.
        </p>
        <p className="mission">
          We have a vast network of human resource and management connections
          and can even provide helpful introductions, whenever possible. BEST,
          LLC is the perfect vehicle to provide clients who need a lift on the
          road to financial success.
        </p>
      </div>
      <div className="page_content">
        <h3 className="subtitle">Our Experience Shows</h3>
        <p className="mission">
          We know that it is hard to trust a new company when limited funds mean
          that every dollar needs to go towards a winning strategy. If the
          strategy hasn't yet been proven in your locality, why should you
          utilize our services over those that have been in place? We recognize
          the need to justify our costs to you and have kept meticulous records
          in order to show that our model for job search is very effective and
          extremely cost efficient.
        </p>
        <p className="mission">
          Last year, the average time between when we began working with our
          clients and when they located employment was 15 calendar days. The
          average cost, per client, in this period of job search was under $700.
          In total, we had a success rate of 84% over the course of the year. Of
          the 18% who did not locate employment, the majority either chose to
          close their case because they weren't interested in participating or
          they had their TANF case closed in sanction. At BEST, LLC, we focus on
          getting results! Clients who are assigned to us will either have
          success or will quickly show that they do not want to participate in
          their own path to financial independence. Either way, the assigning
          social worker receives a concrete solution in their client's case.
        </p>
      </div>
    </>
  );
}

export default Home;
