import { useState, useEffect } from "react";
import "./countDown.scss";

const CountDown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-06-08T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (number, digits = 2) => {
    return number.toString().padStart(digits, "0");
  };

  return (
    <div className="countdownContainer">
      <span className="title">LET THE COUNTDOWN BEGIN</span>
      <div className="countdown">
        <div className="timeContainer">
          <span className="number">{formatNumber(timeLeft.days, 3)}</span>
          <span className="label">DAYS</span>
        </div>
        <div className="timeContainer">
          <span className="number">{formatNumber(timeLeft.hours)}</span>
          <span className="label">HOURS</span>
        </div>
        <div className="timeContainer">
          <span className="number">{formatNumber(timeLeft.minutes)}</span>
          <span className="label">MINUTES</span>
        </div>
        <div className="timeContainer">
          <span className="number">{formatNumber(timeLeft.seconds)}</span>
          <span className="label">SECONDS</span>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
