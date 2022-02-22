import React, { useState } from "react";
import styled from "styled-components";

function Skills() {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <SkillsStyled>
      <div className="skills-wrapper">
        <div className="bloc-tabs">
          <div
            className={toggle === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            FrontEnd
          </div>
          <div
            className={toggle === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            BackEnd
          </div>
          <div
            className={toggle === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            UX/UI
          </div>
          <div
            className={toggle === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Other Skills
          </div>
        </div>
        <div className="content-tabs">
          <div className={toggle === 1 ? "content active-content" : "content"}>
            <div className="progress">
              <div className="progress-center">
                <h1>FrontEnd</h1>
                <h6>HTML</h6>
                <div className="progress2">
                  <div
                    role="progressbar"
                    className="progress-bar progress-bar-striped bg-1"
                    style={{ width: "70%" }}
                  >
                    70%
                  </div>
                </div>
                <h6>CSS/Sass/StyledComponents</h6>
                <div className="progress2">
                  <div
                    role="progressbar"
                    className="progress-bar progress-bar-striped bg-1"
                    style={{ width: "60%" }}
                  >
                    60%
                  </div>
                </div>
                <h6>Javascript/ ReactJs</h6>
                <div className="progress2">
                  <div
                    role="progressbar"
                    className="progress-bar progress-bar-striped bg-1"
                    style={{ width: "40%" }}
                  >
                    40%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={toggle === 2 ? "content active-content" : "content"}>
            <div className="progress">
              <div className="progress-center">
                <h1>BackEnd</h1>
                <h6>Javascript</h6>
                <div className="progress2">
                  <div
                    role="progressbar"
                    className="progress-bar progress-bar-striped bg-2"
                    style={{ width: "15%" }}
                  >
                    15%
                  </div>
                </div>
                <h6>NodeJs / ExpressJs</h6>
                <div className="progress2">
                  <div
                    role="progressbar"
                    className="progress-bar progress-bar-striped bg-2"
                    style={{ width: "10%" }}
                  >
                    10%
                  </div>
                </div>
                <h6>MongoDB / MySQL</h6>
                <div className="progress2">
                  <div
                    role="progressbar"
                    className="progress-bar progress-bar-striped bg-2"
                    style={{ width: "20%" }}
                  >
                    20%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={toggle === 3 ? "content active-content" : "content"}>
            <div className="progress">
              <div className="progress-center">
                <h1>UX/UI</h1>
                <h6>Figma</h6>
                <div className="progress2">
                  <div
                    role="progressbar"
                    className="progress-bar progress-bar-striped bg-3"
                    style={{ width: "10%" }}
                  >
                    10%
                  </div>
                </div>
                <h6>Photoshop </h6>
                <div className="progress2">
                  <div
                    role="progressbar"
                    className="progress-bar progress-bar-striped bg-3"
                    style={{ width: "25%" }}
                  >
                    25%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={toggle === 4 ? "content active-content" : "content"}>
            <div className="progress">
              <div className="progress-center">
                <h1>Other</h1>
                <h6>Version Control (Git)</h6>
                <div className="progress2">
                  <div
                    role="progressbar"
                    className="progress-bar progress-bar-striped bg-4"
                    style={{ width: "35%" }}
                  >
                    35%
                  </div>
                </div>
                <h6>Visual Studio Code</h6>
                <div className="progress2">
                  <div
                    role="progressbar"
                    className="progress-bar progress-bar-striped bg-4"
                    style={{ width: "40%" }}
                  >
                    40%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.div`
  height: 70vh;
  padding: 10px;
  overflow-x: hidden;
  margin-top: 20px;
  @media only screen and (max-width: 1030px) {
    height: 58vh;
  }
  @media only screen and (max-height: 700px) {
    height: 88vh;
  }
  @media only screen and (max-width: 575px) {
    overflow: hidden;
  }
  .skills-wrapper {
    display: flex;
    width: 90%;
    margin: 0 auto 0 0;
    @media only screen and (max-width: 575px) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .bloc-tabs {
      flex-grow: 1;

      .tabs {
        padding: 10px;
        text-align: left;
        width: 70%;
        cursor: pointer;
        position: relative;
        font-size: 18px;
        @media only screen and (max-width: 575px) {
          width: 95%;
          padding: 5px;
        }
      }
      .active-tabs {
        background: #007bff;
        border-radius: 10px;
      }
    }
    .content-tabs {
      flex-grow: 3;
      display: flex;
      height: 60vh;
      align-items: center;
      justify-content: center;
      @media only screen and (max-width: 575px) {
        width: 100%;
        flex: 1;
      }
      .content {
        width: 100%;
        height: 60%;
        display: none;
      }
      .active-content {
        display: block;
        .progress {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          .progress-center {
            width: 80%;
            h1 {
              font-size: 22px;
              margin-bottom: 25px;
              width: 30%;
              text-align: left;
              font-weight: 700;
              @media only screen and (max-width: 575px) {
                display: none;
              }
            }
            h6 {
              font-size: 16px;
              text-align: center;
              margin-top: 30px;
              margin-bottom: 10px;
              font-weight: 300;
            }
            .progress2 {
              height: 18px;
              display: flex;
              align-items: center;
              overflow: hidden;
              font-size: 0.9rem;
              background-color: #e9ecef;
              border-radius: 0.25rem;

              @keyframes shift {
                to {
                  background-position: -1rem 0%;
                }
              }
              .progress-bar-striped {
                height: 18px;
                width: 100%;
                background-image: linear-gradient(
                  45deg,
                  hsla(0, 0%, 100%, 0.15) 25%,
                  transparent 0,
                  transparent 50%,
                  hsla(0, 0%, 100%, 0.15) 0,
                  hsla(0, 0%, 100%, 0.15) 75%,
                  transparent 0,
                  transparent
                );
                animation: shift 1s linear infinite;
                background-size: 1rem 1rem;
              }
              .progress-bar {
                overflow: hidden;
                flex-direction: column;
                justify-content: center;
                color: #fff;
                text-align: center;
                white-space: nowrap;
                transition: width 0.6s ease;
              }
              .bg-1 {
                background-color: #007bff;
              }
              .bg-2 {
                background-color: #17a2b8;
              }
              .bg-3 {
                background-color: #28a745;
              }
              .bg-4 {
                background-color: #b18e26;
              }
            }
          }
        }
      }
    }
  }
`;

export default Skills;
