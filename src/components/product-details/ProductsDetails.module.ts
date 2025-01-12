import styled from "styled-components";

export const ProductsDetailsContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  align-items: flex-start;
  padding: 2rem;
  text-transform: uppercase;
  border: 1px solid #b2b2b2;
  background-color: #f1f1f1;
  box-sizing: border-box;
`

export const ProductDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  height: 100%;
  & > div {
    display: flex;
    width: 100%;
    flex-direction: column;
    & > textarea, input {
      width: 100%;
      resize: none;
      padding: 10px;
      background-color: #fff;
      outline: none;
      border: 1px solid #ccc;
      margin: 10px 0;
    }
  }
`

export const ProductImg = styled.img`
  width: 200px;
  height: 200px;
  border: 1px solid #333;
  background: #fff;
`

export const SaveBtn = styled.button`
  padding: 6px 20px;
  width: 100px;
  background-color: #1cc487;
  color: #f1f1f1;
  border-radius: 15px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color:rgb(27, 150, 105);
    color: white;
  }
`