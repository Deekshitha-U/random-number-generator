// ---------------------------------------------------------------
// RangeInput.jsx  -  the Min and Max boxes
// This is a "controlled input": React state holds the value, and
// every keystroke calls onMinChange / onMaxChange to update it.
//
// Props:
//   min, max          -> current values (from App's state)
//   onMinChange(val)  -> function to update min in App
//   onMaxChange(val)  -> function to update max in App
// ---------------------------------------------------------------
import "../styles/RangeInput.css";

function RangeInput({ min, max, onMinChange, onMaxChange }) {
  return (
    <div className="range">
      <label className="range__field">
        Min
        <input
          type="number"
          value={min}
          onChange={(e) => onMinChange(e.target.value)}
        />
      </label>

      <span className="range__arrow">→</span>

      <label className="range__field">
        Max
        <input
          type="number"
          value={max}
          onChange={(e) => onMaxChange(e.target.value)}
        />
      </label>
    </div>
  );
}

export default RangeInput;
