import React from "react";
import styled from "styled-components";
import reactImg from "../img/react.png";
import sassImg from "../img/sass.png";
import framerImg from "../img/framer.png";
import reduxImg from "../img/redux.png";
import music from "../img/music.png";
import memory from "../img/memory.png";
import gaming from "../img/gaming.png";
import IMDB from "../img/IMDB.png";
import classification from "../img/classification.png";
import regression from "../img/regression.png";
import deep_learning from "../img/deep_learning.png";
import tesla from "../img/tesla.png";
import recipe from "../img/recipe.png";
import github from "../img/github.svg";
import external from "../img/external.svg";
import python from "../img/python.svg";

function Projects() {
  return (
    <ProjectsContainer>
      <ProjectsStyled>
    <div className="project-left project-left-1">
      <h5>#1 Dog breed detection</h5>
      <img className="img-resize"  src={deep_learning} alt="python-regression" />
      <a
        href="https://github.com/boltex33/dog-detection"
        target="_blank"
        rel="noreferrer"
      >
        <div className="align-button">
          <img src={github} alt="github" />
          Check Repository
        </div>
      </a>
      <a
        href="https://github.com/boltex33/dog-detection/blob/main/dog_detection.ipynb"
        target="_blank"
        rel="noreferrer"
      >
        <div className="align-button">
          <img src={external} alt="github" />
          Check Notebook
        </div>
      </a>
    </div>
    <div className="project-right">
      <h6>Technologies Used</h6>
      <div className="project-used">
        <h4>
          <img src={python} alt="python" />
          pandas
        </h4>
        <h4>
          <img src={python} alt="python" />
          matplotlib
        </h4>
        <h4>
          <img src={python} alt="python" />
          numpy
        </h4>
        <h4>
          <img src={python} alt="python" />
          tensorflow
        </h4>
        <h4>
          <img src={python} alt="python" />
          tensorflow-hub
        </h4>
        <h4>
          <img src={python} alt="python" />
          sklearn
        </h4>
        <div className="right-p">
          <p>
          This notebook looks into using various Python-based machine learning and data science libraries in an attempt to build a machine learning model capable of predicting the breed of a dog using a given picture.
          </p>
        </div>
      </div>
    </div>
      </ProjectsStyled>
      <ProjectsStyled>
    <div className="project-left">
      <h5>#2 Bulldozer Price Regression</h5>
      <img src={regression} alt="python-regression" />
      <a
        href="https://github.com/boltex33/bulldozer-price-regression"
        target="_blank"
        rel="noreferrer"
      >
        <div className="align-button">
          <img src={github} alt="github" />
          Check Repository
        </div>
      </a>
      <a
        href="https://github.com/boltex33/bulldozer-price-regression/blob/main/bulldoze-price-regression.ipynb"
        target="_blank"
        rel="noreferrer"
      >
        <div className="align-button">
          <img src={external} alt="github" />
          Check Notebook
        </div>
      </a>
    </div>
    <div className="project-right">
      <h6>Technologies Used</h6>
      <div className="project-used">
        <h4>
          <img src={python} alt="python" />
          pandas
        </h4>
        <h4>
          <img src={python} alt="python" />
          matplotlib
        </h4>
        <h4>
          <img src={python} alt="python" />
          numpy
        </h4>
        <h4>
          <img src={python} alt="python" />
          seaborn
        </h4>
        <h4>
          <img src={python} alt="python" />
          sklearn
        </h4>
        <div className="right-p">
          <p>
          This notebook looks into using various Python-based machine learning and data science libraries in an attempt to build a machine learning model capable of predicting the price of a bulldozer.
          </p>
        </div>
      </div>
    </div>
      </ProjectsStyled>
      <ProjectsStyled>
        <div className="project-left">
          <h5>#3 Heart Disease Classification</h5>
          <img src={classification} alt="python-classification" />
          <a
            href="https://github.com/boltex33/heart-disease-classification"
            target="_blank"
            rel="noreferrer"
          >
            <div className="align-button">
              <img src={github} alt="github" />
              Check Repository
            </div>
          </a>
          <a
            href="https://github.com/boltex33/heart-disease-classification/blob/main/heart-disease-classification.ipynb"
            target="_blank"
            rel="noreferrer"
          >
            <div className="align-button">
              <img src={external} alt="github" />
              Check Notebook
            </div>
          </a>
        </div>
        <div className="project-right">
          <h6>Technologies Used</h6>
          <div className="project-used">
            <h4>
              <img src={python} alt="python" />
              pandas
            </h4>
            <h4>
              <img src={python} alt="python" />
              matplotlib
            </h4>
            <h4>
              <img src={python} alt="python" />
              numpy
            </h4>
            <h4>
              <img src={python} alt="python" />
              seaborn
            </h4>
            <h4>
              <img src={python} alt="python" />
              sklearn
            </h4>
            <div className="right-p">
              <p>
              This notebook looks into using various Python-based machine learning and data science libraries in an attempt to build a machine learning model capable of predicting whether or not someone has heart disease based on their medical attributes.
              </p>
            </div>
          </div>
        </div>
      </ProjectsStyled>
      <ProjectsStyled>
        <div className="project-left">
          <h5>#4 TESLA Stocks and Revenue</h5>
          <img src={tesla} alt="tesla-stocks-revenue-graph" />
          <a
            href="https://github.com/boltex33/TESLA_STOCKS"
            target="_blank"
            rel="noreferrer"
          >
            <div className="align-button">
              <img src={github} alt="github" />
              Check Repository
            </div>
          </a>
          <a
            href="https://youtu.be/D75lFUjMGeo"
            target="_blank"
            rel="noreferrer"
          >
            <div className="align-button">
              <img src={external} alt="github" />
              Check The Video
            </div>
          </a>
        </div>
        <div className="project-right">
          <h6>Technologies Used</h6>
          <div className="project-used">
            <h4>
              <img src={python} alt="python" />
              pandas
            </h4>
            <h4>
              <img src={python} alt="python" />
              yfinance
            </h4>
            <h4>
              <img src={python} alt="python" />
              requests
            </h4>
            <h4>
              <img src={python} alt="python" />
              bs4
            </h4>
            <h4>
              <img src={python} alt="python" />
              plotly
            </h4>
            <div className="right-p">
              <p>
               An app that uses Tesla revenue scraped data and the library yfinance for stock prices from 2010 to present.
              </p>
              <p>
                The data will be used to create 2 graphs, one for revenue and one for stock prices.
                There is also a slider to select a specific timeline and have a better visualisation.
              </p>
            </div>
          </div>
        </div>
      </ProjectsStyled>
      <ProjectsStyled>
        <div className="project-left">
          <h5>#5 IMDB movies web scraping</h5>
          <img src={IMDB} alt="IMDB-popular-movies" />
          <a
            href="https://github.com/boltex33/IMDB"
            target="_blank"
            rel="noreferrer"
          >
            <div className="align-button">
              <img src={github} alt="github" />
              Check Repository
            </div>
          </a>
          <a
            href="https://youtu.be/Ts4yBAXEPso"
            target="_blank"
            rel="noreferrer"
          >
            <div className="align-button">
              <img src={external} alt="github" />
              Check The Video
            </div>
          </a>
        </div>
        <div className="project-right">
          <h6>Technologies Used</h6>
          <div className="project-used">
            <h4>
              <img src={python} alt="python" />
              numpy
            </h4>
            <h4>
              <img src={python} alt="python" />
              requests
            </h4>
            <h4>
              <img src={python} alt="python" />
              bs4
            </h4>
            <h4>
              <img src={python} alt="python" />
              mysql-connector-python
            </h4>
            <h4>
              <img src={python} alt="python" />
              os
            </h4>
            <div className="right-p">
              <p>
                The app scrapes movie data from an IMDB website with the most popular 1000 movies.
              </p>
              <p>

                The extracted data will be appended into lists which will be converted into SQL and inserted into a mySQL database.
              </p>
            </div>
          </div>
        </div>
      </ProjectsStyled>
      <ProjectsStyled>
        <div className="project-left">
          <h5>#6 Gaming Database</h5>
          <img src={gaming} alt="music-player" />
          <a
            href="https://github.com/boltex33/gaming-database"
            target="_blank"
            rel="noreferrer"
          >
            <div className="align-button">
              <img src={github} alt="github" />
              Check Repository
            </div>
          </a>
          <a
            href="https://gaming-database.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="align-button">
              <img src={external} alt="github" />
              Visit The Website
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
                An API based search engine. It has three sections: Popular
                Games, New Games and Upcoming games. The application is using
                windows date to dynamically adjust the API fetch.
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
          <h5>#7 Music Player</h5>
          <img src={music} alt="music-player" />
          <a
            href="https://github.com/boltex33/music-player"
            target="_blank"
            rel="noreferrer"
          >
            <div className="align-button">
              <img src={github} alt="github" />
              Check Repository
            </div>
          </a>
          <a
            href="https://mymusic-player.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="align-button">
              <img src={external} alt="github" />
              Visit The Website
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
          <h5>#8 Recipe App</h5>
          <img src={recipe} alt="recipe-app" />
          <a
            href="https://github.com/boltex33/recipe-app"
            target="_blank"
            rel="noreferrer"
          >
            <div className="align-button">
              <img src={github} alt="github" />
              Check Repository
            </div>
          </a>
          <a
            href="https://simple-recipe-site.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="align-button">
              <img src={external} alt="github" />
              Visit The Website
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

            <div className="right-p">
              <p>
                A simple API based food recipes application. It has four food
                categories: Italian, American, Thai and Chinese.
              </p>
              <p>
                It has some vegetarian and popular picks on the home page and
                also a search function to look for any specific recipe .
              </p>
              <p>
                Mobile friendly{" "}
                <span style={{ color: "rgb(87, 184, 148)" }}>⛔</span>
              </p>
            </div>
          </div>
        </div>
      </ProjectsStyled>
      <ProjectsStyled>
        <div className="project-left">
          <h5>#9 Memory Game</h5>
          <img src={memory} alt="memory game" />
          <a
            href="https://github.com/boltex33/memory-game"
            target="_blank"
            rel="noreferrer"
          >
            <div className="align-button">
              <img src={github} alt="github" />
              Check Repository
            </div>
          </a>
          <a
            href="https://league-memory-game.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="align-button">
              <img src={external} alt="github" />
              Visit The Website
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
            <div className="right-p">
              <p>
                A very basic 4x3 pair memory game with League of Legends theme.
              </p>
              <p>
                Has a counter for the number of tries and also a "New Game"
                button to start a new game.
              </p>
              <p>Mobile friendly⛔</p>
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
    min-height: 130vh;
    margin-bottom:50px;
  }
  @media only screen and (max-width: 575px) {
    min-height: 160vh;
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
      width: 120vw;
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
