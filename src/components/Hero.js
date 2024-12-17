import React from "react";
import "../styles/Hero.css";
import ReactPlayer from "react-player";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="video_container">
      <ReactPlayer
        className="video"
        url="Latex con airless.mp4"
        playing
        loop
        muted
        width="600px"
        height="auto"
      />
      <h1>Bienvenidos a Becoat</h1>
      <p>Transformamos tus espacios con tecnología de pintura airless.</p>
      </div>
    </section>
  );
};

export default Hero;
