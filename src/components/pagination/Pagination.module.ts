import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 960px;
  background-color: #f1f1f1;
`

export const PaginationActions = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background: #e1e1e1;
  border: none;
  outline: none;
  box-sizing: border-box;
  gap: 1rem;
  width: 100%;
  & > span {
    display: flex;
    align-items: center;
    color: #333;
  }
  & > span #current {
    color: dodgerblue;
    font-weight: bold;
    margin: 0 4px;
  }
  & > span #total {
    color: dodgerblue;
    margin-left: 4px;
  }
`

export const PaginationButton = styled.button<{$disabled?: boolean}>`
    display: flex;
    align-items: center;
    outline: none;
    border: 1px solid #ccc;
    padding: 6px 20px;
    border-radius: 2px;
    cursor: pointer;
    transition: 0.1s ease-in-out;
    box-sizing: border-box;
    &:hover {
      background-color: ${p => p.$disabled ? '' : '#333'};
      color: ${p => p.$disabled ? '' : '#f1f1f1'};
      border: ${p => p.$disabled ? '1px solid #ccc' : '1px solid #f1f1f1'};
    }
`