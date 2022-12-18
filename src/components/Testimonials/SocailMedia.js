import React from "react";
import instagram from "../../Images/instagram.png";
import linkedin from "../../Images/linkedin.png";
import github from "../../Images/github.png";
import classes from "./Testimonials.module.css";

const SocailMedia = () => {
  return (
    <div className={classes["social-media"]}>
      <a href="https://google.com" target="_blank" rel="noreferrer">
        <img className={classes["social-icons"]} src={instagram} />
      </a>
      <a href="https://google.com" target="_blank" rel="noreferrer">
        <img className={classes["social-icons"]} src={linkedin} />
      </a>
      <a href="https://google.com" target="_blank" rel="noreferrer">
        <img className={classes["social-icons"]} src={github} />
      </a>
    </div>
  );
};

export default SocailMedia;
