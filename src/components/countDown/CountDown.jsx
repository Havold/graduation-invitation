import "./countDown.scss";

const CountDown = () => {
  return (
    <div className="countdownContainer">
      <span className="title">LET THE COUNTDOWN BEGIN</span>
      <div className="countdown">
        <div className="timeContainer">
          <span className="number">272</span>
          <span className="label">DAYS</span>
        </div>
        <div className="timeContainer">
          <span className="number">23</span>
          <span className="label">HOURS</span>
        </div>
        <div className="timeContainer">
          <span className="number">15</span>
          <span className="label">MINUTES</span>
        </div>
        <div className="timeContainer">
          <span className="number">37</span>
          <span className="label">SECONDS</span>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
