import React, { useState } from "react";
import styled from "styled-components";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";

function Details() {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <DetailsStyled id="portfolio">
      <DetailsContainer>
        <div className="navbar">
          <div className="nav-wrapper">
            <div
              className={toggle === 1 ? "navbar-div active" : "navbar-div"}
              onClick={() => toggleTab(1)}
            >
              <h3>About</h3>
            </div>
            <div
              className={toggle === 2 ? "navbar-div active" : "navbar-div"}
              onClick={() => toggleTab(2)}
            >
              <h3>Projects</h3>
            </div>

            <div
              className={toggle === 3 ? "navbar-div active" : "navbar-div"}
              onClick={() => toggleTab(3)}
            >
              <h3>Skills</h3>
            </div>
          </div>
        </div>
        <>{toggle === 1 && <About />}</>
        <>{toggle === 2 && <Projects />}</>
        <>{toggle === 3 && <Skills />}</>
      </DetailsContainer>
    </DetailsStyled>
  );
}

const DetailsStyled = styled.div`
  background-color: #001d20;
  color: white;
  min-height: 93vh;
  border-top: 1px solid #001d20;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media screen and (max-width: 1030px) {
    margin-top: -100px;
  }
`;
const DetailsContainer = styled.div`
  background-color: #043a4e;
  color: white;
  min-height: 82vh;
  width: 65%;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  @media screen and (max-width: 1030px) {
    width: 90%;
    min-height: 73vh;
  }
  .navbar {
    display: flex;
    align-items: center;
    background-color: #3f3d56;
    border-bottom: 3px solid #002937;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
    height: 70px;
    .nav-wrapper {
      display: flex;
      width: 100%;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      text-align: center;
      height: 100%;
      flex: 1;
      h3 {
        font-weight: 300;
        cursor: pointer;
        :hover {
          color: #458deb;
        }
      }
    }
    .navbar-div {
      flex: 1;
      height: 100%;
    }
    .active {
      background-color: #0c5975;
    }
  }
`;

export default Details;
