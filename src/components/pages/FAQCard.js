import React from "react";

function FAQCard({ info }) {
  console.log(info);
  return (
    <>
      <h3>{info.question}</h3>
      <p>{info.answer}</p>
    </>
  );
}

export default FAQCard;
