import React from "react";

function Header() {
  return (
    <header className="App-header">
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About Us</li>
      </ul>
      <hr></hr>
      <button className="menu-btn">
        <span className="menu-bar"></span>
      </button>
    </header>
  );
}

export default Header;
