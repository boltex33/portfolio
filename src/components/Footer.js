import React from "react";
import styled from "styled-components";

function Footer() {
  return <FooterStyled>Copyright © Lacatusu Andrei-Cristian 2023</FooterStyled>;
}

const FooterStyled = styled.div`
  background-color: #002a39;
  height: 4vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
`;

export default Footer;
