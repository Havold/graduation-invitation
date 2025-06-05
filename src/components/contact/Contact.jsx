import Card from "../card/Card";
import "./contact.scss";
import { easeIn, easeInOut, motion, scale, useInView } from "motion/react";
import { useRef } from "react";

// const imageVariant = {
//   initial: {
//     scale: 0.8,
//     opacity: 0,
//   },
//   animate: {
//     scale: 1,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       easeInOut,
//     },
//   },
// };

const cardsVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
      easeInOut,
      staggerChildren: 0.5,
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

const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div ref={ref} className="contact">
      <motion.div
        variants={titleVariant}
        animate={isInView ? "animate" : "initial"}
        className="title"
      >
        Contact
      </motion.div>
      <motion.div
        variants={cardsVariant}
        animate={isInView ? "animate" : "initial"}
        className="cards"
      >
        <Card
          desc="Contact me via phone: 0833873869"
          title="Phone"
          img="/assets/images/phone-2.jpg"
        />
        <span className="or">OR</span>
        <Card
          desc="Contact me via Facebook"
          title="Facebook"
          img="/assets/images/messenger-2.jpg"
          link="https://www.facebook.com/tho.truong.509511/"
        />
      </motion.div>
    </div>
  );
};

export default Contact;
