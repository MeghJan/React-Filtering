
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IInitialProducts } from "../types";

const productsSelector = (state: RootState) => state.products;

const productsListSelector = createSelector(
  [productsSelector],
  (products: IInitialProducts) => products.productsList
);

const productSelector = createSelector(
  [productsSelector],
  (products: IInitialProducts) => products.product
);

export const productSel = {
    productsSelector,
    productsListSelector,
    productSelector,
};
