import React from "react";
import HomHeader from "./HomeSection/HomHeader";
import HomeInfo from "./HomeSection/HomeInfo";
import HomeAbout from "./HomeSection/HomeAbout";
import HomeProduct from "./HomeSection/HomeProduct";
import HomeScrollbar from "./HomeSection/HomeScrollbar";
import "./Home.css"
export const Home = () => {
  return (
    <div className="HomeStyle">
        <HomHeader/>
        <HomeInfo/>
        <HomeAbout/>
        <HomeProduct/>
        <HomeScrollbar/>
    </div>
  );
};
export default Home
