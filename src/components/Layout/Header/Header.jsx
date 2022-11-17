import React from "react";

const Header = () => {
  return (
    <header className="">
      <nav>
        <a href="#">Amine Elkhalidy</a>

        {/* Navbar for mobile */}
        <div>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#services">Features</a>
            </li>
            <li>
              <a href="#services">Contact</a>
            </li>
          </ul>

          {/* Close icon */}
          <div></div>
        </div>

        {/* Navbar for desktop */}
        <div>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#services">Features</a>
            </li>
            <li>
              <a href="#services">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
