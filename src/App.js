import React from "react";
//import { BrowserRouter as Router } from 'react-router-dom';
import Hero from "./components/Hero";
import StepByStep from "./components/StepByStep";
/* import Testimonials from "./components/Testimonials"; */
import Footer from "./components/Footer";
import WhatsAppButton from "./components/whatsAppButon";
import Banner from "./components/Banner";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    //    <Router>
    <div>
      <Banner />
      <Navbar />
      <Hero />
      <StepByStep />
      {/* <Testimonials /> */}
      <WhatsAppButton />
      <Footer />
    </div>
    //    </Router>
  );
};

export default App;
