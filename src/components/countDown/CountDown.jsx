import { useState, useEffect, useRef } from "react";
import "./countDown.scss";
import { easeInOut, motion, useInView } from "motion/react";

const timerVariant = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
      easeInOut,
    },
  },
};

const CountDown = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });

  const targetDate = new Date("2025-06-08T11:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      if (updatedTime) {
        setTimeLeft(updatedTime);
      } else {
        setTimeLeft(null);
        setIsTimeUp(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (number, digits = 2) => {
    return number.toString().padStart(digits, "0");
  };

  return (
    <div ref={ref} className="countdownContainer">
      <span className="title">LET THE COUNTDOWN BEGIN</span>

      {isTimeUp ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="celebrationMessage"
        >
          🎉 It's time to celebrate! 🎓
        </motion.div>
      ) : (
        <motion.div
          variants={timerVariant}
          animate={isInView ? "animate" : "initial"}
          className="countdown"
        >
          <motion.div variants={timerVariant} className="timeContainer">
            <span className="number">{formatNumber(timeLeft.days, 3)}</span>
            <span className="label">DAYS</span>
          </motion.div>
          <motion.div variants={timerVariant} className="timeContainer">
            <span className="number">{formatNumber(timeLeft.hours)}</span>
            <span className="label">HOURS</span>
          </motion.div>
          <motion.div variants={timerVariant} className="timeContainer">
            <span className="number">{formatNumber(timeLeft.minutes)}</span>
            <span className="label">MINUTES</span>
          </motion.div>
          <motion.div variants={timerVariant} className="timeContainer">
            <span className="number">{formatNumber(timeLeft.seconds)}</span>
            <span className="label">SECONDS</span>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CountDown;
