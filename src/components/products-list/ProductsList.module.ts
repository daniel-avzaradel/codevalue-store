import styled from "styled-components";

export const ProductsListPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  max-height: 100%;
  overflow-y: auto;
  align-items: flex-start;
  padding: 2rem;
  border: 1px solid #b2b2b2;
  background-color: #f1f1f1;
`

export const ProductItemContainer = styled.div<{$selected?: boolean}>`
  display: flex;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  border: 2px solid #c1c1c1;
  background-color: ${p => p.$selected ? '#444' : '#FFF'};
  color: ${p => p.$selected ? '#fff' : '#444'};
  border-radius: 4px;
  align-items: center;
  justify-content: flex-start;
  transition: 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${p => p.$selected ? '#444' : '#e1e1e1'};
  }
`

export const ProductsListContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  height: 100%;
`

export const ProductDetailInfo = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 2rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  gap: 6px 0;
`

export const DeleteBtn = styled.button`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  outline: none;
  border: none;
  padding: 6px 18px;
  background: firebrick;
  color: #fff;
  margin: 1rem;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    filter: brightness(0.9);
  }
`