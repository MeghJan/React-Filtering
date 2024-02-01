import { combineReducers } from "@reduxjs/toolkit";
import { productsSlice } from "./products/productsSlice";


export const reducers = () =>
  combineReducers({
    products: productsSlice.reducer,
  });
