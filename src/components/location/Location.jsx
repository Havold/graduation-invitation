import { Link } from "react-router-dom";

import "./location.css";

const Location = () => {
  return (
    <div className="location">
      <div className="title">Location</div>
      <div className="content">
        <span className="address">
          UNIVERSITY OF <br />
          INFORMATION TECHNOLOGY
        </span>
        <img src="/assets/images/UIT-2.jpg" alt="UIT" />
        <span className="address">
          HAN THUYEN, WARD 6 <br /> THU DUC, HO CHI MINH CITY
        </span>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://maps.app.goo.gl/Jn1eNhfQeydCk5Lo7"
        className="btn"
      >
        GO TO ADDRESS
      </a>
    </div>
  );
};

export default Location;
