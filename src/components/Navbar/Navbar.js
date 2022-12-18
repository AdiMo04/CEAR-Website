import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import logo from "../../Images/logo.png";
import Microsoft from "../../Images/microsoft.png";
import Button from "@mui/material/Button";
// import { signInWithGoogle } from "../../configGoogle";
import { signInwithMicrosoft } from "../ConfigMicrosot";
import { signOutwithMicrosoft } from "../ConfigMicrosot";
import person from "../../Images/person.png";
import { NavLink } from "react-router-dom";
// import About from "../Routes/About/About";
// import { BrowserRouter } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const login = localStorage.getItem("isLoggedIn");
  // console.log(login);
  // console.log("localStorage", localStorage.getItem("isLoggedIn"));
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const flag = localStorage.getItem("isLoggedIn");
  // setIsLoggedIn(flag);
  // console.log(isLoggedIn);
  const controlnav = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlnav);
    // console.log("ho");
    return () => {
      window.removeEventListener("scroll", controlnav);
      // console.log("hello");
    };
  }, []);
  return (
    <div className={`${classes.navbar} ${!show && classes.nav}`}>
      <div className={classes.logo}>
        <img className={classes.img1} src={logo} />
      </div>
      <div className={classes["navbar-right"]}>
        {login && (
          <div className={classes.leftSide}>
            <NavLink className={classes.link} to="/events">
              Events
            </NavLink>
            <NavLink className={classes.link} to="/blog">
              Blog
            </NavLink>
            <NavLink className={classes.link} to="/newsletter">
              NewsLetter
            </NavLink>
            <NavLink className={classes.link} to="/team">
              Team
            </NavLink>
            <NavLink className={classes.link} to="/contactus">
              ContactUs
            </NavLink>
            {/* <h3>ContactUs</h3> */}
          </div>
        )}
        {!login ? (
          <Button
            onClick={signInwithMicrosoft}
            variant="outlined"
            className={classes.login}
          >
            <img src={Microsoft} />
            <span>Sign in</span>
          </Button>
        ) : (
          <Button
            onClick={signOutwithMicrosoft}
            variant="outlined"
            className={(classes.login, classes.signout)}
          >
            <img className={classes.person} src={person} />
            <span>{localStorage.getItem("name")}</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
