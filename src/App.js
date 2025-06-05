import { useEffect, useRef, useState } from "react";
import "./App.scss";
import Contact from "./components/contact/Contact";
import CountDown from "./components/countDown/CountDown";
import Dear from "./components/dear/Dear";
import Ending from "./components/ending/Ending";
import Home from "./components/home/Home";
import Location from "./components/location/Location";

function App() {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  // Hàm cố gắng phát nhạc
  const tryPlayAudio = () => {
    if (!audioRef.current) return;
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        // Nếu bị chặn, vẫn giữ isPlaying = false
        setIsPlaying(false);
      });
  };

  useEffect(() => {
    // Tự động thử phát sau 3 giây
    const timer = setTimeout(() => {
      tryPlayAudio();
    }, 3000);

    // Nếu chưa phát được, lắng nghe sự kiện click trên document
    const handleUserInteraction = () => {
      if (!isPlaying) {
        tryPlayAudio();
      }
    };

    if (!isPlaying) {
      document.addEventListener("click", handleUserInteraction);
      document.addEventListener("touchstart", handleUserInteraction);
    }

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
      document.removeEventListener("scroll", handleUserInteraction);
    };
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} src="/assets/audio/music.mp3" loop />
      <div className="container">
        <section id="home">
          <Home />
        </section>
        <section id="dear">
          <Dear />
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
    </>
  );
}

export default App;
