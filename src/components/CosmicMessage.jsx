// ---------------------------------------------------------------
// CosmicMessage.jsx  -  a fun line of text that matches your number
//
// More conditional rendering: nothing is shown before the first click,
// then the message depends on where the number sits in the range.
//
// Props:
//   number -> generated number (null before first click)
//   heat   -> 0 to 1, position of the number inside the range
// ---------------------------------------------------------------
import "../styles/CosmicMessage.css";

function getMessage(heat) {
  if (heat < 0.2) return "🌑 A quiet little number from the deep void";
  if (heat < 0.45) return "🌙 Calm cosmic energy";
  if (heat < 0.7) return "⭐ Balanced, right in the middle of the galaxy";
  if (heat < 0.9) return "🔥 A bright, blazing number";
  return "☄️ Supernova! Near the top of the range";
}

function CosmicMessage({ number, heat }) {
  // No number yet? Render nothing at all.
  if (number === null) return null;

  return (
    <p className="cosmic-message" key={number}>
      {getMessage(heat)}
    </p>
  );
}

export default CosmicMessage;
