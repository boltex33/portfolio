import React from "react";
import styled from "styled-components";
import emailImg from "../img/email.svg";

function Contact() {
  return (
    <ContactStyled id="contact">
      <div className="form">
        <div className="form-width">
          <form action="">
            <div className="form-group">
              <label className="form-label" htmlFor="Input1">
                First name & Last name *
              </label>
              <input
                placeholder="Jane Doe"
                type="text"
                id="Input1"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="Input2">
                Email adress *
              </label>
              <input
                placeholder="name@example.com"
                type="text"
                id="Input2"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="Textarea1">
                Send a message *
              </label>
              <textarea
                placeholder="Your message here..."
                id="Textarea1"
                cols="30"
                rows="3"
                className="form-control"
              ></textarea>
            </div>
            <button className="form-button">Send</button>
          </form>
        </div>
      </div>
      <div className="contact-img">
        <img className="tilt" src={emailImg} alt="email" />
      </div>
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  width: 100%;
  border-top: 1px solid #001d20;
  position: relative;
  height: 80vh;
  overflow: hidden;
  margin-top: 10rem;
  @media only screen and (max-width: 1030px) {
    margin: 0;
  }
  .form {
    padding: 20px;
    margin: 0 auto;
    width: 60%;
    text-align: center;
    position: relative;
    height: 70vh;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 1030px) {
      width: 90%;

      .form-width {
        width: 90%;
      }
    }
  }
  .form-width {
    width: 50%;
    background-color: #002a39;
    text-align: left;
    padding: 20px;
    margin: 0 auto;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  .form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    box-sizing: border-box;
    font-weight: inherit;
  }
  .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
  textarea.form-control {
    height: auto;
    font-family: inherit;
    overflow: auto;
    resize: vertical;
    font-weight: inherit;
  }
  .form-button {
    width: 100%;
    padding: 5px;
    color: #fff;
    background-color: #57b894;
    border: none;
    margin: 0;
    cursor: pointer;
    font-weight: inherit;
  }
  input,
  button {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    font-weight: 300;
    overflow: visible;
  }
  .contact-img {
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 25%;
    position: absolute;
    margin-top: -290px;
    right: 50px;
    margin-right: 30px;
    @media only screen and (max-width: 1030px) {
      display: none;
    }
  }
  .tilt {
    width: 100%;
    height: 100%;
    transition: 1s;
  }
  .tilt:hover {
    transform: perspective(1000px) rotateX(-5deg) rotateY(-8deg)
      scale3d(1.2, 1.2, 1.2);
  }
`;

export default Contact;
