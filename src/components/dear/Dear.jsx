import { TypeAnimation } from "react-type-animation";
import "./dear.scss";
import { easeIn, motion } from "motion/react";

const Dear = () => {
  return (
    <div className="dear">
      <div className="letterContainer">
        <div className="letter">
          <TypeAnimation
            sequence={[
              `Dear my friend, \nAs this precious chapter of my university life comes to a close, I’m filled with gratitude looking back on the journey we've shared. My graduation day is just around the corner — a milestone that marks not only the end of student life but also the beginning of a new chapter in adulthood.\nI want to sincerely thank you for being by my side through it all — for the laughter, the tears, the highs and the lows. Your presence has meant so much to me throughout these unforgettable years.\nIt would mean the world to me if you could join and celebrate this special moment together. Let’s make one more beautiful memory to add to our story.\nWith all my heart,`,
            ]}
            wrapper="p"
            cursor={false}
            speed={80}
            className="typing"
            style={{ whiteSpace: "pre-line" }}
          />
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 14, ease: easeIn }}
          className="signature"
        >
          Truong Huu Tho.
        </motion.span>
      </div>
    </div>
  );
};

export default Dear;
