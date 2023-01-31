import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logoGPT3 from '../../assets/logoGPT3.svg';
import machinaLogo from '../../assets/machinaLogo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={machinaLogo} />
          <img src={logoGPT3} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Accueil</a></p>
          <p><a href="#wgpt3">Pourquoi GPT3 ?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Etudes de cas</a></p>
          <p><a href="#blog">Articles</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Connection</p>
        <button type="button">Inscription</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Accueil</a></p>
            <p><a href="#wgpt3">Pourquoi GPT3 ?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Etudes de cas</a></p>
            <p><a href="#blog">Articles</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Connection</p>
            <button type="button">Inscription</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
