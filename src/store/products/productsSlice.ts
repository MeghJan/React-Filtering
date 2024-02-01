import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialProducts } from "./initialState";
import { IInitialProducts, IProduct } from "../types";


export const productsSlice = createSlice({
  name: "products",
  initialState: initialProducts,
  reducers: {
    setProducts(state: IInitialProducts, action: PayloadAction<IProduct[]>) {
      state.productsList = action.payload;
    },

    setProduct(state: IInitialProducts, action: PayloadAction<IProduct>) {
      state.product = action.payload;
    },
    
  },
});


