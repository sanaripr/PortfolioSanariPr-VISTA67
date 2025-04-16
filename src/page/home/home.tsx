import React, { useEffect } from 'react';
import '../../style-script/home.css';
import profileImg from '../../images/profile.jpg';
import project1Img from '../../images/SepelinKidsLogo.jpg';
import project2Img from '../../images/C-PortfolioLogo.jpg';

const Home: React.FC = () => {
  useEffect(() => {
    const button = document.getElementById("enterSite");
    const mainContent = document.getElementById("mainContent");
    const intro = document.getElementById("intro");

    if (button && mainContent && intro) {
      button.addEventListener("click", () => {
        intro.style.display = "none";
        mainContent.classList.remove("hidden");
      });
    }

    return () => {
      if (button) {
        button.removeEventListener("click", () => {});
      }
    };
  }, []);

  return (
    <>
      <section id="intro">
        <div className="intro-content">
          <h1>Welkom bij mijn Portfolio</h1>
          <p>Sandrine Prumpeler</p>
          <button id="enterSite">Klik hier!</button>
        </div>
      </section>

      <div id="mainContent" className="hidden">
        <header>
          <div className="navbar">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Over mij</a></li>
              <li><a href="#projects">Projecten</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </header>

        <section id="home" className="hero">
          <div className="hero-content">
            <h2>Ola! Ik ben een Software Developer</h2>
            <p>yup, geen idee wat ik moet plaatsen.....</p>
            <a href="#projects" className="btn">Bekijk mijn werk</a>
          </div>
        </section>

        <section id="about">
          <h2>Over mij</h2>
          <div className="about-container">
            <img src={profileImg} alt="Mijn foto" />
            <p>chicken nuggetssssssssssssssssssssssssss</p>
          </div>
        </section>

        <section id="projects">
          <h2>Mijn projecten/mijn werk</h2>
          <div className="project-container">
            <div className="project">
              <img src={project1Img} alt="P1" />
              <h3>Sepelin Kids</h3>
              <p>SEP sep SEP sep SEP sep SEP sep SEP</p>
            </div>
            <div className="project">
              <img src={project2Img} alt="P2" />
              <h3>OPDR 2</h3>
              <p>idk IDK idk IDK idk IDK idk IDK idk IDK idk IDK</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <form id="contactForm">
            <label htmlFor="name">Naam:</label>
            <input type="text" id="name" required />

            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" required />

            <label htmlFor="message">Iets:</label>
            <textarea id="message" required></textarea>

            <button type="submit">Verstuur</button>
          </form>
          <p id="formMessage"></p>
        </section>

        <footer className="footer">
          <p>&copy; 2025 Sandrine Prumpeler | Software Developer portfolio examen | 
            <a href="#contact">contact opnemen</a></p>
        </footer>
      </div>
    </>
  );
};

export default Home;
