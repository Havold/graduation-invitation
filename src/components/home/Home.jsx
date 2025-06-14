import { easeIn, easeInOut, motion, useInView } from "motion/react";
import "./home.scss";
import { useRef } from "react";

const imageVariant = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const footerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
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

const Home = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div ref={ref} className="home">
      {/* TOP */}
      <div className="top">
        {/* CENTER */}
        <motion.span
          variants={titleVariant}
          animate={isInView ? "animate" : "initial"}
          className="title"
        >
          Graduation Ceremony
        </motion.span>
      </div>
      {isInView ? (
        <h1 className="date">
          08 . 06 . 2025 <br /> <span className="time">11h - 13h</span>
        </h1>
      ) : (
        <></>
      )}
      {/* CENTER */}
      <motion.div
        variants={imageVariant}
        animate={isInView ? "animate" : "initial"}
        className="center"
      >
        <motion.img
          variants={imageVariant}
          className="img_sub"
          src="/assets/images/MHX2022.jpg"
          alt="image_1"
        />
        <motion.img
          variants={imageVariant}
          className="img_center"
          src="/assets/images/UIT-4.jpg"
          alt="image_2"
        />
        <motion.img
          variants={imageVariant}
          className="img_sub"
          src="/assets/images/MHX2024.jpg"
          alt="image_3"
        />
      </motion.div>
      {/* BOTTOM */}
      <div className="bottom">
        <motion.p
          variants={footerVariant}
          animate={isInView ? "animate" : "initial"}
          className="invitation"
        >
          Join me as I celebrate a journey of growth, learning, and new
          beginnings.
        </motion.p>
      </div>
    </div>
  );
};

export default Home;
