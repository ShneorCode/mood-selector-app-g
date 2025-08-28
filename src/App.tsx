import { useState } from "react";
import CurrentMood from "./comp/CurrentMood";
import ChangeButton from "./comp/ChangeButton";
import Header from "./comp/Header";
import "./App.css";

type MoodLabel = "Happy" | "Sad" | "Angry";

const moods: { emoji: string; label: MoodLabel }[] = [
  { emoji: "😀", label: "Happy" },
  { emoji: "😢", label: "Sad" },
  { emoji: "😡", label: "Angry" },
];

function App() {
  const [currentMood, setCurrentMood] = useState({ emoji: "😐", label: "Neutral" });

  const [history, setHistory] = useState([{ emoji: "😐", label: "Neutral" }]);

  const [counters, setCounters] = useState<Record<MoodLabel, number>>({
    Happy: 0,
    Sad: 0,
    Angry: 0,
  });

  const changeMood = (mood: { emoji: string; label: MoodLabel }) => {
    setCurrentMood(mood);
    setHistory((prev) => [...prev, mood].slice(-4)); 
    setCounters((prev) => ({ ...prev, [mood.label]: prev[mood.label] + 1 }));
  };

  const randomMood = () => {
    const randomIndex = Math.floor(Math.random() * moods.length);
    changeMood(moods[randomIndex]);
  };

  const resetMood = () => {
    const neutral = { emoji: "😐", label: "Neutral" };
    setCurrentMood(neutral);
    setHistory([neutral]);
    setCounters({ Happy: 0, Sad: 0, Angry: 0 });
  };

  return (
    <div>
      <Header />
      <CurrentMood mood={currentMood} />

      <div style={{ margin: "10px 0" }}>
        {moods.map((mood) => (
          <ChangeButton
            key={mood.label}
            textButton={`${mood.emoji} ${mood.label}`}
            setButtonText={() => changeMood(mood)}
          />
        ))}
      </div>

      <button onClick={randomMood}>Random Mood</button>
      <button onClick={resetMood}>Reset</button>

      <h3>History (last 3 moods):</h3>
      <ul>
        {history.slice(-4, -1).map((m, i) => (
          <li key={i}>
            {m.emoji} {m.label}
          </li>
        ))}
      </ul>

      <h3>Mood Counters:</h3>
      <p>
        😀 Happy: {counters.Happy} | 😢 Sad: {counters.Sad} | 😡 Angry: {counters.Angry}
      </p>
    </div>
  );
}

export default App;
