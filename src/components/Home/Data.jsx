import React from 'react'
// import { IoMdHand } from 'react-icons/io';
import { IoPaperPlane } from 'react-icons/io5';
const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Theo Fortune {/* <IoMdHand style={{ color: "#ffdd67" }} className="hand-icon" /> */}
      </h1>
      <h3 className="home__subtitle">Software Engineer</h3>
      <p className="home__description">
        As a ReactJS software engineer with expertise in UI/UX product design
        and proficiency in C++, Java and Python, I specialize in delivering
        high-quality software solutions that enhance user experience and drive
        business growth.
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello
        <IoPaperPlane style={{ color: "var(--container-color)" }} />
      </a>
    </div>
  );
}

export default Data