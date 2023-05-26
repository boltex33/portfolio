import React, { useState } from "react";
import styled from "styled-components";
import profile from "../img/profile.png";
import github from "../img/github.svg";
import twitter from "../img/twitter.svg";
import linkedin from "../img/linkedin.svg";
import discord from "../img/discord.svg";
import FlashMessage from "react-flash-message";

function About() {
  const [alert, setAlert] = useState(false);
  const onButtonClickHandler = () => {
    navigator.clipboard.writeText("Boltex#4834");
    setAlert(true);
    setTimeout(() => setAlert(false), 2000);
  };
  return (
    <AboutStyled>
      <div className="about-wrapper">
        <div className="about-left">
          <img className="img-profile" src={profile} alt="profile" />
          <h5>
            <q>
              Fresh graduate, highly motivated, passionate of programming, data analysis and testing. I'm a fast learner so I can adapt to new things pretty fast.
            </q>
          </h5>
          <h6>
            <span>
              <a
                href="https://github.com/boltex33?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <img className="img-info" src={github} alt="github" />
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/lacatusu-andrei/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="img-info" src={linkedin} alt="linkedin" />
              </a>
            </span>
            <span>
              <a
                href="https://twitter.com/LacaAndrei"
                target="_blank"
                rel="noreferrer"
              >
                <img className="img-info" src={twitter} alt="twitter" />
              </a>
            </span>
            <span className="clipboard">
              <button onClick={onButtonClickHandler}>
                <img className="img-info" src={discord} alt="discord" />
              </button>
              {alert && (
                <div className="flashdiv">
                  <FlashMessage duration={2000}>
                    <strong>Copied to clipboard</strong>
                  </FlashMessage>
                </div>
              )}
            </span>
          </h6>
        </div>
        <div className="about-right">
          <h2>Quick info</h2>
          <h5>- Age: 24</h5>
          <h5>- Location: Romania, Gorj</h5>
          <h2>Education</h2>
          <h5>
            - Faculty of Automation, Computers and Electronics from Craiova
          </h5>
          <h5>- Turceni Technological Highschool</h5>
          <h2>Objectives</h2>
          <h5>- Mastering software testing </h5>
          <h5>- Learning other new and interesting things </h5>
        </div>
      </div>
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  color: #000;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1030px) {
    min-height: 60vh;
  }
  .about-wrapper {
    display: flex;
    color: #fff;
    min-height: 66vh;
    background-color: #3f3d56;
    width: 88%;
    border-radius: 4px;
    margin-top: 30px;
    margin-bottom: 30px;
    align-items: center;
    @media screen and (max-width: 1030px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      min-height: 60vh;
      margin: 0;
    }
    @media only screen and (max-height: 700px) {
      height: 88vh;
    }
    @media only screen and (max-height: 500px) {
      height: 100vh;
    }

    .about-left {
      display: flex;
      flex-direction: column;
      width: 50%;
      align-items: center;
      @media screen and (max-width: 1030px) {
        .img-profile {
          display: none;
        }
        width: 100%;
        margin-top: 30px;
        margin-bottom: 30px;
      }
      @media screen and (max-width: 575px) {
        margin-bottom: 0;
      }
      @media screen and (max-width: 355px) {
        margin-top: 0;
      }
      h5 {
        font-size: 16px;
        width: 80%;
        margin-bottom: 30px;
        margin-top: 10px;
        font-weight: 300;
        @media screen and (max-width: 1030px) {
          margin-bottom: 0;
        }
        @media screen and (max-width: 355px) {
          font-size: 14px;
        }
      }
      h6 {
        width: 80%;
        display: flex;
        align-items: center;
        @media screen and (max-width: 1030px) {
          margin: 20px auto;
          justify-content: center;
        }
        @media screen and (max-width: 575px) {
          margin-bottom: 0;
          margin-top: 5px;
        }
        @media screen and (max-width: 255px) {
          height: 25px;
        }
      }
      .img-profile {
        width: 35%;
        border-radius: 50%;
        margin-bottom: 25px;
        box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
      }
      .img-info {
        filter: invert(50%) sepia(100%) saturate(3352%) hue-rotate(180deg)
          brightness(95%) contrast(100%);
        width: 2.2rem;
        margin-right: 2rem;
        @media screen and (max-width: 355px) {
          width: 1.5rem;
        }
      }
    }
    .about-right {
      border-left: 3px solid #002a39;
      @media screen and (max-width: 1030px) {
        width: 100%;
        border-left: none;
      }

      h2 {
        font-size: 20px;
        margin-bottom: 20px;
        margin-top: 30px;
        width: 85%;
        font-weight: 300;
        margin-left: 10%;
        @media screen and (max-width: 1030px) {
          margin: 5px 0 0 40px;
        }
        @media screen and (max-width: 575px) {
          font-size: 16px;
        }
        @media screen and (max-width: 355px) {
          margin-left: 5px;
          margin-top: 0;
        }
      }
      h5 {
        font-size: 16px;
        text-align: left;
        width: 80%;
        font-weight: 300;
        margin-left: 15%;
        @media screen and (max-width: 1030px) {
          margin: 5px 0 0 60px;
        }
        @media screen and (max-width: 575px) {
          font-size: 14px;
        }
        @media screen and (max-width: 355px) {
          margin-left: 10px;
        }
      }
    }
  }
  .clipboard {
    display: flex;
    align-items: center;
    button {
      cursor: pointer;
      border: none;
      background-color: transparent;
      filter: invert(50%) sepia(100%) saturate(3352%) hue-rotate(180deg)
        brightness(95%) contrast(100%);
      img {
        width: 2.7rem;
        @media screen and (max-width: 355px) {
          width: 2rem;
        }
      }
    }
  }
  .flashdiv {
    position: relative; /* Stay in place */
    z-index: 1; /* Sit on top */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.5); /* Black w/ opacity */
    border-radius: 5px;
    padding: 5px;
    height: auto;
    font-size: 15px;
    color: #ffffff;
  }
`;

export default About;
