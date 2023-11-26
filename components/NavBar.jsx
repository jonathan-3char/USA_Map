function NavBar({ handlePopup, handleToggleTheme }) {
  return (
    <div className="sticky-navbar">
      <nav className="navbar">
        <a href="https://github.com/jonathan-3char" target="_blank">
          Github Link
        </a>
        <button onClick={() => handlePopup(true)}>Help</button>
        <button onClick={handleToggleTheme}>Toggle Theme</button>
      </nav>
    </div>
  );
}

export default NavBar;
