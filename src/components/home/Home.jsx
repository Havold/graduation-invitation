import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* TOP */}
      <div className="top">
        {/* CENTER */}
        <span className="title">Graduation Ceremony</span>
      </div>
      {/* CENTER */}
      <div className="center">
        <h1 className="date">08 . 06 . 2025</h1>
        <img
          className="img_sub"
          src="https://i.pinimg.com/736x/e9/8f/17/e98f1782dca3abeef419e29b59d1aa77.jpg"
          alt="image_1"
        />
        <img
          className="img_center"
          src="/assets/images/UIT-4.jpg"
          alt="image_2"
        />
        <img
          className="img_sub"
          src="https://i.pinimg.com/736x/b4/92/90/b4929080376e3cd65c47a8241a226a1b.jpg"
          alt="image_3"
        />
      </div>
      {/* BOTTOM */}
      <div className="bottom">
        <p className="invitation">
          Join me as I celebrate a journey of growth, learning, and new
          beginnings.
        </p>
      </div>
    </div>
  );
};

export default Home;
