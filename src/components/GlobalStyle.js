import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #001D20;
    font-family: 'Lexend', sans-serif;
    box-sizing:border-box;
    color:white;
    width:100%;
    margin: 0 auto;
    font-weight:300;    
    line-height: 1.5;
  }
  * {
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
  }
  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-track {
    background: #3c3c64;
  }
  *::-webkit-scrollbar-thumb {
    background: rgba(6, 131, 233, 0.671);
    border-radius: 20px;
    border: transparent;  
  }html { scroll-behavior: smooth; }
`;

export default GlobalStyle;
