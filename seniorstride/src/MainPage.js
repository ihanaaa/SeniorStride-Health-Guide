import React from "react";
import "./MainPage.css";
import banner from "./images/banner.png";

const MainPage = () => {
  return (
    <>
      <img className="image" src={banner} alt="banner" />

      <h1>SeniorStride - Health Guide App</h1>
      <h3>By Ihana Fahmy, Shamma Sarah Markis, Muiz Madadi</h3>

    </>
  );
};

export default MainPage;
