import { createSlice } from "@reduxjs/toolkit";
import { productsArr } from "./products";

const productsSlice = createSlice({
  name: 'products',
  initialState: productsArr,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload)
    }
  }
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer