import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai";
import { BsDribbble } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/fortuneui"
        className="home__social-icon"
      >
        <AiOutlineInstagram />
      </a>
      <a
        href="https://www.dribbble.com/uninfectiblebreed"
        className="home__social-icon"
      >
        <BsDribbble />
      </a>
      <a
        href="https://www.github.com/theo-fortune"
        className="home__social-icon"
      >
        <FiGithub />
      </a>
    </div>
  );
}

export default Social