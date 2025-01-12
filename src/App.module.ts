import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  position: relative;
  max-width: 100%;
  min-height: 100dvh;
  flex-direction: column;
  align-items: flex-start;
  background: #444;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
`

export const ProductsSection = styled.section`
  display: grid;
  width: 100%;
  min-height: 100%;
  grid-template-columns: 55% 45%;
  background: #444;
  color: #333;
  box-sizing: border-box;
  padding: 1rem 2rem;
  gap: 1rem;
`