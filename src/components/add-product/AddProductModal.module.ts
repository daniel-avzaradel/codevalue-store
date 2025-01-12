import styled from "styled-components";

export const AddProductModalScreen = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 1rem;
  box-sizing: border-box;
  backdrop-filter: blur(6px);
  z-index: 9;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;
  min-width: 600px;
  background-color: #21242b;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  padding: 2rem;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #222;
  & > h1 {
    margin: 1rem;
    color: #f1f1f1;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  box-sizing: border-box;
  gap: 6px 1rem;
  margin: 6px 1rem;
  color: #e1e1e1;
  & > label {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    text-align: left;
    min-width: 25%;
  }
  & > input, textarea {
    width: 100%;
    border: 1px solid #ccc;
    box-sizing: border-box;
    outline: none;
    padding: 4px 8px;
    border-radius: 4px;
    resize: none;
  }
  & > input#price {
    align-self: flex-start;
    width: 80px;
  }
`

export const AddProductBtnsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  gap: 1rem;
  padding: 1rem;
  margin: 1rem auto;
`

export const AddProductButton = styled.button<{$save?: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 6px;
  border: 1px solid ${p => p.$save ? '#1cc487' : '#e93445'};;
  border-radius: 15px;
  width: 120px;
  background-color: ${p => p.$save ? '#1cc487' : '#e93445'};
  color: #fff;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`