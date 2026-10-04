// ---------------------------------------------------------------
// Header.jsx  -  the title at the top of the page
// A very simple component: no state, no props, just JSX.
// ---------------------------------------------------------------
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      
      <h1 className="header__title">
        Cosmic <span>Number</span> Orb
      </h1>
    </header>
  );
}

export default Header;
