import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Testimonials from "../Testimonials/Testimonials";

const DashBoardwithoutLogin = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default DashBoardwithoutLogin;
