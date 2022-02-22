import React from "react";
import styled from "styled-components";
import reactImg from "../img/react.png";
import sassImg from "../img/sass.png";
import framerImg from "../img/framer.png";
import reduxImg from "../img/redux.png";
import music from "../img/music.png";
import gaming from "../img/gaming.png";
import github from "../img/github.svg";

function Projects() {
  return (
    <ProjectsContainer>
      <ProjectsStyled>
        <div className="project-left">
          <h5>#1 Music Player</h5>
          <img src={music} alt="music-player" />
          <a
            href="https://github.com/boltex33/music-player"
            target="_blank"
            rel="noreferrer"
          >
            <div className="align-button">
              <img src={github} alt="github" />
              Check Code
            </div>
          </a>
          <a
            href="https://mymusic-player.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="align-button">
              <img src={github} alt="github" />
              Visit Website
            </div>
          </a>
        </div>
        <div className="project-right">
          <h6>Technologies Used</h6>
          <div className="project-used">
            <h4>
              <img src={reactImg} alt="react" />
              ReactJs
            </h4>
            <h4>
              <img src={sassImg} alt="sass" />
              Sass
            </h4>
            <div className="right-p">
              <p>
                A simple music player application that uses static data. The
                application is build from scratch, including the player itself,
                buttons and slider.
              </p>
              <p>
                The application can be easily edited into fetching an API of
                songs/wallpapers. Or querry from a database.
              </p>
              <p>
                Mobile friendly{" "}
                <span style={{ color: "rgb(87, 184, 148)" }}>✓</span>
              </p>
            </div>
          </div>
        </div>
      </ProjectsStyled>
      <ProjectsStyled>
        <div className="project-left">
          <h5>#2 Gaming Database</h5>
          <img src={gaming} alt="music-player" />
          <a
            href="https://github.com/boltex33/gaming-database"
            target="_blank"
            rel="noreferrer"
          >
            <div className="align-button">
              <img src={github} alt="github" />
              Check Code
            </div>
          </a>
          <a
            href="https://gaming-database.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="align-button">
              <img src={github} alt="github" />
              Visit Website
            </div>
          </a>
        </div>
        <div className="project-right">
          <h6>Technologies Used</h6>
          <div className="project-used">
            <h4>
              <img src={reactImg} alt="react" />
              ReactJs
            </h4>
            <h4>
              <img src={framerImg} alt="framer-motion" />
              Framer-motion / Styled Components
            </h4>
            <h4>
              <img src={reduxImg} alt="redux" />
              Redux / Redux-thunk
            </h4>
            <div className="right-p">
              <p>
                A simple music player application that uses static data. The
                application is build from scratch, including the player itself,
                buttons and slider.
              </p>
              <p>
                The application can be easily edited into fetching an API of
                songs/wallpapers. Or querry from a database.
              </p>
              <p>
                Mobile friendly{" "}
                <span style={{ color: "rgb(87, 184, 148)" }}>✓</span>
              </p>
            </div>
          </div>
        </div>
      </ProjectsStyled>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  height: 70vh;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  @media only screen and (max-width: 1030px) {
    height: 60vh;
  }
`;

const ProjectsStyled = styled.div`
  color: #fff;
  display: -webkit-flex;
  display: flex;
  background-color: #3f3d56;
  border-radius: 3px;
  width: 90%;
  height: 67vh;
  margin: 20px auto 30px;
  @media only screen and (max-width: 1030px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 120vh;
  }
  @media only screen and (max-width: 575px) {
    min-height: 110vh;
  }
  .project-left {
    width: 50%;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    @media only screen and (max-width: 1030px) {
      width: 110vw;
    }
    @media only screen and (max-width: 575px) {
      margin-top: -150px;
    }
    h5 {
      font-size: 25px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    img {
      width: 60%;
    }
    a {
      color: #fff;
      display: inline;
      background-color: #007bff;
      border: none;
      margin-top: 20px;
      padding: 5px;
      border-radius: 3px;
      transition: 0.5s;
      width: 60%;
      text-align: center;
      text-decoration: none;
      box-shadow: 0 8px 6px -6px #001d20;
      .align-button {
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        flex-direction: row;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: space-around;
        justify-content: space-around;
        img {
          filter: invert(100%) sepia(0%) saturate(3352%) hue-rotate(120deg)
            brightness(95%) contrast(100%);
          width: 1.8rem;
        }
      }
    }
  }
  .project-right {
    width: 50%;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: center;
    justify-content: center;

    margin-bottom: -3rem;
    @media only screen and (max-width: 1030px) {
      width: 90%;
    }
    h6 {
      font-size: 23px;
      font-weight: 300;
      margin: 30px 0;
    }
    .project-used {
      h4 {
        display: flex;
        gap: 5px;
        font-size: 17px;
        font-weight: 300;
        margin: 0 0 8px 0;
      }
      img {
        width: 1.7rem;
      }
      p {
        width: 90%;
      }
      .right-p {
        margin-top: 30px;
      }
    }
  }
`;

export default Projects;
