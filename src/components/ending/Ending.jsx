import { easeInOut, motion, useInView } from "motion/react";
import { useRef } from "react";
import "./ending.scss";

const titleVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1.2,
      easeInOut,
    },
  },
};

const Ending = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <motion.div
      variants={titleVariant}
      animate={isInView ? "animate" : "initial"}
      ref={ref}
      className="ending"
    >
      <motion.span variants={titleVariant} className="title">
        Thank you
      </motion.span>
      <motion.span variants={titleVariant} className="subTitle">
        for being a part of my youth.
      </motion.span>
    </motion.div>
  );
};

export default Ending;
