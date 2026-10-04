// ---------------------------------------------------------------
// App.jsx  -  the "boss" component
// It owns ALL the state and passes data down to child components
// through props. This pattern is called "lifting state up".
// ---------------------------------------------------------------
import { useState, useRef, useEffect } from "react";

import Background from "./components/Background";
import Header from "./components/Header";
import Orb from "./components/Orb";
import Particles from "./components/Particles";
import CosmicMessage from "./components/CosmicMessage";
import RangeInput from "./components/RangeInput";
import GenerateButton from "./components/GenerateButton";
import History from "./components/History";

import "./styles/App.css";

function App() {
  // ----- STATE -------------------------------------------------
  // The main one: the generated number. null means "nothing yet".
  const [number, setNumber] = useState(null);

  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [history, setHistory] = useState([]); // last few numbers
  const [rolling, setRolling] = useState(false); // is the orb flickering?
  const [burstId, setBurstId] = useState(0); // replays the particle burst
  const [error, setError] = useState(""); // validation message

  // useRef remembers the timer id so we can clean it up later
  const timerRef = useRef(null);
  useEffect(() => () => clearInterval(timerRef.current), []);

  // ----- HELPER ------------------------------------------------
  // Random whole number from low to high (both included)
  const randomBetween = (low, high) =>
    Math.floor(Math.random() * (high - low + 1)) + low;

  // ----- EVENT: button click -----------------------------------
  const handleGenerate = () => {
    const low = Math.ceil(Number(min));
    const high = Math.floor(Number(max));

    // Stop if the range is not valid
    if (Number.isNaN(low) || Number.isNaN(high) || low >= high) {
      setError("Min must be smaller than Max.");
      return;
    }
    setError("");
    setRolling(true);

    // The real answer is decided right now...
    const finalNumber = randomBetween(low, high);

    // ...but first we flicker random numbers for a cool slot-machine feel
    let ticks = 0;
    timerRef.current = setInterval(() => {
      ticks += 1;
      setNumber(randomBetween(low, high));

      if (ticks === 12) {
        clearInterval(timerRef.current);
        setNumber(finalNumber); // land on the real number
        setHistory((old) => [finalNumber, ...old].slice(0, 8));
        setBurstId((id) => id + 1);
        setRolling(false);
      }
    }, 45);
  };

  // ----- DERIVED VALUE -----------------------------------------
  // heat = where the number sits in the range, from 0 (min) to 1 (max)
  const low = Number(min);
  const high = Number(max);
  const heat =
    number === null || high <= low
      ? 0
      : Math.min(1, Math.max(0, (number - low) / (high - low)));

  // ----- UI ----------------------------------------------------
  return (
    <main className="app">
      <Background />
      <Header />

      <section className="app__orb-area">
        <div className="app__ring app__ring--one" aria-hidden="true" />
        <div className="app__ring app__ring--two" aria-hidden="true" />
        <Orb number={number} rolling={rolling} heat={heat} />
        {burstId > 0 && !rolling && <Particles burstId={burstId} />}
      </section>

      <CosmicMessage number={rolling ? null : number} heat={heat} />

      <section className="app__controls">
        <RangeInput
          min={min}
          max={max}
          onMinChange={setMin}
          onMaxChange={setMax}
        />
        {error && <p className="app__error">{error}</p>}
        <GenerateButton onClick={handleGenerate} disabled={rolling} />
      </section>

      <History items={history} />
    </main>
  );
}

export default App;
