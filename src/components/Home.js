import React from "react";
import "./home.scss";
import BlogCategoryNav from "./shared/BlogCategoryNav";
// import FlipPages from "./shared/FlipPages";
const Home = () => {
  return (
    <div className='home'>
      <h2 className='huge-heading'>Welcome to SkyTrappers</h2>
      <h2 className='normal-heading'>
        {" "}
        For the latest information on the latest Tv series, movies and
        documentaries
      </h2>
      <h2 className='normal-heading'>
        {" "}
        For the most captivating blogs of the 21st century and real life
        adventure stories in Kenya
      </h2>

      {/* <FlipPages /> */}
      <div className='home__image'>
        <img src='./../img/pexels-sanaan-mazhar-3075993.jpg' alt='Home' />
      </div>
    </div>
  );
};

export default Home;
