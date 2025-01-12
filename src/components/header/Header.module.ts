import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 3rem;
  align-items: center;
  justify-content: flex-start;
  background: #242424;
  color: #f1f1f1;
  & > h1 {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    position: relative;
    font-size: 48px;
    background: -webkit-radial-gradient(cyan, purple);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  & > h1::after {
    content: "by Daniel Avzaradel";
    position: absolute;
    font-size: 18px;
    left: 0;
    bottom: -14px;
    color: #ccc;
    letter-spacing: 2px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: white;
  }
`