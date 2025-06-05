import "./App.scss";
import Contact from "./components/contact/Contact";
import CountDown from "./components/countDown/CountDown";
import Ending from "./components/ending/Ending";
import Home from "./components/home/Home";
import Location from "./components/location/Location";

function App() {
  return (
    <div className="container">
      <section id="home">
        <Home />
      </section>
      <section id="ending">
        <Ending />
      </section>
      <section id="location">
        <Location />
      </section>
      <section id="countDown">
        <CountDown />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="ending">
        <Ending />
      </section>
    </div>
  );
}

export default App;
