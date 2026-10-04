// ---------------------------------------------------------------
// History.jsx  -  small bubbles showing your last few numbers
//
// Props:
//   items -> array of numbers, newest first
// ---------------------------------------------------------------
import "../styles/History.css";

function History({ items }) {
  // Conditional rendering again: hide the section until there is history
  if (items.length === 0) return null;

  return (
    <section className="history">
      <h2 className="history__title">Recent pulls</h2>
      <ul className="history__list">
        {items.map((value, index) => (
          <li
            key={`${value}-${items.length - index}`}
            className="history__item"
            style={{ "--i": index }}
          >
            {value}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default History;
