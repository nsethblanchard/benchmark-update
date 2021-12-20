import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import CaseStudies from "./components/pages/CaseStudies";
import Testimonials from "./components/pages/Testimonials";
import FAQList from "./components/pages/FAQList";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faqs" element={<FAQList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
