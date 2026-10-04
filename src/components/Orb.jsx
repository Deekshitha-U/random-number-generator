// ---------------------------------------------------------------
// Orb.jsx  -  the big glowing ball that shows the number
//
// THIS is where the CONDITIONAL RENDERING happens:
//   number === null  ->  show "No number generated yet"
//   otherwise        ->  show the number
//
// Props:
//   number   -> the generated number (null before the first click)
//   rolling  -> true while the number is flickering
//   heat     -> 0 to 1, how high the number is inside the range
//               (used to change the orb color)
// ---------------------------------------------------------------
import "../styles/Orb.css";

function Orb({ number, rolling, heat }) {
  // hue 220 = cool blue, hue 340 = hot pink. Slides with the number!
  const hue = 220 + heat * 120;

  return (
    <div
      className={`orb ${rolling ? "orb--rolling" : ""}`}
      style={{ "--hue": hue }}
    >
      {number === null ? (
        <p className="orb__placeholder">No number generated yet</p>
      ) : (
        // key={number} makes React replay the pop animation on each change
        <span key={number} className="orb__number" aria-live="polite">
          {number}
        </span>
      )}
    </div>
  );
}

export default Orb;
