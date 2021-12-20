import React from "react";
import Faqs from "../../data/faqs.json";
import FAQCard from "./FAQCard";

function FAQList() {
  return (
    <>
      <h1>FAQ Page</h1>
      {Faqs.faqs.map((elem) => (
        <FAQCard key={elem.id} info={elem} />
      ))}
    </>
  );
}

export default FAQList;
