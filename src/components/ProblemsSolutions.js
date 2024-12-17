import React, { useEffect, useState } from 'react';
import problemsData from '../data/problems.json';
import '../styles/ProblemsSolutions.css'
const ProblemsSolutions = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    setProblems(problemsData);
  }, []);

  return (
    <section id="problems" className="section">
      <h2>Problemas Frecuentes y Nuestra Solución</h2>
      {problems.map((item, index) => (
        <div key={index}>
          <h3>{item.problem}</h3>
          <p>{item.solution}</p>
        </div>
      ))}
    </section>
  );
};

export default ProblemsSolutions;