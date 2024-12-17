import React from "react";
//import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemsSolutions from "./components/ProblemsSolutions";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/whatsAppButon";
import "./App.css";

const App = () => {
  return (
    //    <Router>
    <div>
      <Header />
      <Hero />
      <ProblemsSolutions />
      <Testimonials />
      <CallToAction />
      <WhatsAppButton />
      <Footer />
    </div>
    //    </Router>
  );
};

export default App;
