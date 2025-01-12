import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './productsSlice'

export interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  url: string;
  creation_date: Date;
}



export const store = configureStore({
  reducer: {
    products: productsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store