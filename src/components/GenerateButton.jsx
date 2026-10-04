// ---------------------------------------------------------------
// GenerateButton.jsx  -  the "Generate Random Number" button
//
// Props:
//   onClick   -> function to run when clicked (comes from App)
//   disabled  -> true while the orb is rolling
// ---------------------------------------------------------------
import "../styles/GenerateButton.css";

function GenerateButton({ onClick, disabled }) {
  return (
    <button className="generate-btn" onClick={onClick} disabled={disabled}>
      {disabled ? "Summoning..." : "Generate Random Number"}
    </button>
  );
}

export default GenerateButton;
