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
    </>
  );
}

export default Home;
