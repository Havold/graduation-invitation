import React from "react";

import "./card.scss";

const Card = ({ title, desc, img, link }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText("0833873869")
      .then(() => {
        alert("Đã sao chép số điện thoại: 0833873869");
      })
      .catch((err) => {
        alert("Lỗi khi sao chép!");
        console.error("Copy failed: ", err);
      });
  };
  return (
    <div className="card">
      <span className="title">{title}</span>
      <img src={img} alt="card" />
      <span className="desc">{desc}</span>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          GO TO MY FACEBOOK
        </a>
      ) : (
        <button onClick={handleCopy}>COPY NUMBER</button>
      )}
    </div>
  );
};

export default Card;
