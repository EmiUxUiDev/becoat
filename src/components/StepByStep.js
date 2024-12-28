import React, { useEffect, useState } from "react";
import stepsData from "../data/steps.json";
import "../styles/StepByStep.css";
import card_bgd from "../assets/LogoBecoat.png";

const StepByStep = () => {
  const [steps, setsteps] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setsteps(
      stepsData.map((step) => ({
        ...step,
        image: require(`../assets/${step.image}`), // Carga dinámica de imágenes
      }))
    );
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="steps">
      <h2 id="step_h2">Seguí estos pasos para presupuestar</h2>
      <img className="section_img" src={card_bgd} alt="Background" />
      {steps.map((item, index) => (
        <div className="step_container" key={index}>
          <img
            className="card_img"
            src={item.image}
            alt={`Step ${index + 1}`}
          />
          <div className="step_card">
            <h3>{item.problem}</h3>
            {/* <p id="p_card"></p> */}
            <p className={isExpanded ? "expanded" : ""}>{item.solution}</p>
            <button className="ver_mas_btn" onClick={toggleExpand}>
              {isExpanded ? "Ver menos" : "Ver más"}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StepByStep;
