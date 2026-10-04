// ---------------------------------------------------------------
// Background.jsx  -  twinkling stars + floating nebula clouds
// Purely decorative, so no props and no state.
// ---------------------------------------------------------------
import "../styles/Background.css";

function Background() {
  return (
    <div className="background" aria-hidden="true">
      <div className="background__stars" />
      <div className="background__cloud background__cloud--violet" />
      <div className="background__cloud background__cloud--pink" />
    </div>
  );
}

export default Background;
