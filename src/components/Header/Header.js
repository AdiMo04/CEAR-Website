import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";

const Header = () => {
  const [q, setQ] = useState("Hi We are Aitians Glad to see u here ♥️♥️♥️");
  const quote = [
    "Don't think of robots as replacements for humans -- think of them as things that will help make us better at tackling many of the problems we face.",
    "The danger of the past was that men became slaves. The danger of the future is that men may become robots.",
    "My dear Miss Glory, Robots are not people. They are mechanically more perfect than we are, they have an astounding intellectual capacity, but they have no soul.",
    "My dear Miss Glory, Robots are not people. They are mechanically more perfect than we are, they have an astounding intellectual capacity, but they have no soul. ",
  ];
  let counter = 0;
  useEffect(() => {
    setInterval(() => {
      //  console.log(counter);
      setQ(quote[counter]);
      counter++;
      if (counter >= quote.length) {
        counter = 0;
      }
    }, 10000);
    return () => {
      // console.log("hi");
    };
  }, []);

  return (
    <div className={classes.header}>
      <div className={classes.content}>
        <h1 className={classes.text}>Robotics Club</h1>
        <p style={{ color: "white" }}>{q}</p>
      </div>
      <div className={classes.illustration}>
        <iframe src="https://embed.lottiefiles.com/animation/40582"></iframe>
      </div>
    </div>
  );
};

export default Header;
