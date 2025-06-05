import { easeIn, easeInOut, motion, scale, useInView } from "motion/react";

import "./location.scss";
import { useRef } from "react";

const imageVariant = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      easeInOut,
    },
  },
};

const leftVariant = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      easeInOut,
    },
  },
};

const rightVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      easeInOut,
    },
  },
};

const footerVariant = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      easeIn,
    },
  },
};

const titleVariant = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      easeInOut,
    },
  },
};

const Location = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div ref={ref} className="location">
      <motion.div
        variants={titleVariant}
        animate={isInView ? "animate" : "initial"}
        className="title"
      >
        Location
      </motion.div>
      <div className="content">
        <motion.span
          variants={leftVariant}
          animate={isInView ? "animate" : "initial"}
          className="address"
        >
          UNIVERSITY OF <br />
          INFORMATION TECHNOLOGY
        </motion.span>
        <motion.img
          variants={imageVariant}
          animate={isInView ? "animate" : "initial"}
          src="/assets/images/UIT-2.jpg"
          alt="UIT"
        />
        <motion.span
          variants={rightVariant}
          animate={isInView ? "animate" : "initial"}
          className="address"
        >
          HAN THUYEN, WARD 6 <br /> THU DUC, HO CHI MINH CITY
        </motion.span>
      </div>
      <motion.a
        variants={footerVariant}
        animate={isInView ? "animate" : "initial"}
        target="_blank"
        rel="noopener noreferrer"
        href="https://maps.app.goo.gl/Jn1eNhfQeydCk5Lo7"
        className="btn"
      >
        GO TO ADDRESS
      </motion.a>
    </div>
  );
};

export default Location;
