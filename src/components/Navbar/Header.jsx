import React, { useContext } from 'react';
import { ThemeContext } from "../../ThemeContext.jsx";

// styles
import './Navbar.css';

// icon
import { Sun, Moon } from 'lucide-react';

// component
import HamburgerButton from './HamburgerButton.jsx';
import ThemeToggleButton from './ThemeToggleButton.jsx';

const Header = ({ isOpen, toggleMenu }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      
      <h5 className='logo-name'>Rolly Dev</h5>

      <ul className='nav-menu'>
        <a href='#Home' style={{textDecoration:"none"}}>
          <li className='nav-list'>Home</li>
        </a> 
        <a href='#Skills' style={{textDecoration:"none"}}>
          <li className='nav-list'>Skills</li>
        </a> 
        <a href='#About' style={{textDecoration:"none"}}>
          <li className='nav-list'>About</li>
        </a> 
        <a href='#Work' style={{textDecoration:"none"}}>
          <li className='nav-list'>Work</li>
        </a> 
        <a href='#Contact' style={{textDecoration:"none"}}>
          <li className='nav-list'>Contact</li>
        </a> 
      </ul>

      <div className='toggle-container'>
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
        <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
};

export default Header;

