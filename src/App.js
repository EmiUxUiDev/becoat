import React from "react";
import Hero from "./components/Hero";
import StepByStep from "./components/StepByStep";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/whatsAppButon";
import Banner from "./components/Banner";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
   
    <div>
      <Banner />
      <Navbar />
      <Hero />
      <StepByStep />
      <WhatsAppButton />
      <Footer />
    </div>
   
  );
};

export default App;
