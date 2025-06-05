import React, { useState } from "react";
import "./card.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // đừng quên import CSS
import { easeIn, easeInOut, motion, scale, useInView } from "motion/react";

const Card = ({ title, desc, img, link, variant }) => {
  const [showTippy, setShowTippy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText("0833873869")
      .then(() => {
        setShowTippy(true);
        setTimeout(() => {
          setShowTippy(false);
        }, 2000); // hiển thị tooltip trong 2s
      })
      .catch((err) => {
        console.error("Copy failed: ", err);
      });
  };

  return (
    <motion.div className="card">
      <span className="title">{title}</span>
      <img className="cardImg" src={img} alt="card" />
      <span className="desc">{desc}</span>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          GO TO MY FACEBOOK
        </a>
      ) : (
        <Tippy content="Copied phone number!" visible={showTippy}>
          <button onClick={handleCopy}>COPY NUMBER</button>
        </Tippy>
      )}
    </motion.div>
  );
};

export default Card;
