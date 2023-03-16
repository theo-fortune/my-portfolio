import React, {useState} from 'react'
import './header.css';
import { RiHome5Line } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaBriefcase } from "react-icons/fa";
import { MdLandscape, MdContacts } from "react-icons/md";
import { BsX } from "react-icons/bs";
import { AiOutlineAppstore } from "react-icons/ai";

const Header = () => {
  const[Toggle, showMenu] =useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Fortune
        </a>
        <div className={Toggle ? "nav__menu show__menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-ink">
                <RiHome5Line className="nav__icon" /> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <BiUser className="nav__icon" /> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <AiOutlineFileSearch className="nav__icon" /> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <FaBriefcase className="nav__icon" /> Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <MdLandscape className="nav__icon" /> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <MdContacts className="nav__icon" /> Contact
              </a>
            </li>
          </ul>
          <BsX className="nav__close" onClick={() => showMenu(!Toggle)} />
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <AiOutlineAppstore />
        </div>
      </nav>
    </header>
  );
}

export default Header