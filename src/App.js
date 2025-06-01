import "./App.css";
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
      <section id="countDown">
        <CountDown />
      </section>
      <section id="location">
        <Location />
      </section>
      <section id="ending">
        <Ending />
      </section>
    </div>
  );
}

export default App;
