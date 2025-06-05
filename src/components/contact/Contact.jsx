import Card from "../card/Card";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="title">Contact</div>
      <div className="cards">
        <Card
          desc="Contact me via phone: 0833873869"
          title="Phone"
          img="/assets/images/phone-2.jpg"
        />
        <span>OR</span>
        <Card
          desc="Contact me via Facebook"
          title="Facebook"
          img="/assets/images/messenger-2.jpg"
          link="https://www.facebook.com/tho.truong.509511/"
        />
      </div>
    </div>
  );
};

export default Contact;
