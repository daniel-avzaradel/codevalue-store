import styled from "styled-components";

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0 10px;
  width: 100%;
  margin: 1rem 0;
`

export const AddProductBtn = styled.button`
  border: none;
  outline: none;
  padding: 6px 20px;
  border-radius: 25px;
  background-color: #1cc487;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`

export const SearchBar = styled.input`
  width: fit-content;
  background-color: white;
  border: 1px solid #c1c1c1;
  border-radius: 25px;
  padding: 4px 20px;
  min-width: 80px;
  &:focus {
    outline: none;
  }
`

export const SortBySelect = styled.select`
  width: fit-content;
  background-color: white;
  border: 1px solid #c1c1c1;
  padding: 4px 10px;
  min-width: 50px;
  &:focus {
    outline: none;
  }
`