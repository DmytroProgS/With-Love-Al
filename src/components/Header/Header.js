import React from 'react';
import earring2 from '../../assets/images/instagram-icon.png';
import logo from '../../assets/images/site-logo.png'; // Додаємо логотип

function Header() {
  return (
    <header className='header-block'>
      <nav className='header-navigation'>
        {/* Логотип зліва */}
        <div className="logo">
          <a href="/"><img src={logo} alt="Site Logo" /></a>
        </div>

        <ul className='header-menu'>
          <li><a href="/">Company</a></li>
          <li><a href="/">Jewelry</a></li>
          <li><a href="/">Contact</a></li>
        </ul>

        <div className="instagram-link">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={earring2} alt="Instagram" />
          </a> 
        </div>
      </nav>
    </header>
  );
}

export default Header;
