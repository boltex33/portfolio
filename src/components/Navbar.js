import React from "react";
import styled from "styled-components";
import portfolio from "../img/portfolio.svg";
import download from "../img/download.svg";
import resume from "../utils/Resume.pdf";

function Navbar() {
  return (
    <Nav>
      <div className="logo">
        <img className="logo-img" src={portfolio} alt="portfolio" />
        <a href="#start">My Portfolio</a>
      </div>
      <Links>
        <li className="del">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="del">
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href={resume} download>
            Resume
            <img className="resume-img" src={download} alt="portfolio" />
          </a>
        </li>
      </Links>
    </Nav>
  );
}

const Nav = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 6vh;
  align-items: center;
  justify-content: space-between;
  font-weight: 300;
  color: white;
  font-size: 1.1rem;
  background-color: #002a39;
  position: sticky;
  top: 0;
  z-index: 10;
  .logo {
    margin-left: 17%;
    flex-grow: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    @media only screen and (max-width: 730px) {
      margin-left: 2%;
    }

    .logo-img {
      filter: invert(42%) sepia(93%) saturate(1352%) hue-rotate(87deg)
        brightness(119%) contrast(119%);
      width: 1.5rem;
    }
    a {
      text-decoration: none;
      color: white;
    }
  }
`;
const Links = styled.div`
  margin-right: 17%;
  text-transform: uppercase;
  gap: 1.5rem;
  display: flex;
  flex-grow: 100;
  justify-content: end;
  @media only screen and (max-width: 730px) {
    .del {
      display: none;
    }
    margin-right: 2%;
  }
  a {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    .resume-img {
      filter: invert(85%) sepia(35%) saturate(600%) hue-rotate(87deg)
        brightness(70%) contrast(119%);
      width: 1.5rem;
    }
  }
  a:hover {
    color: #61d199;
  }
  li {
    list-style: none;
  }
`;

export default Navbar;
