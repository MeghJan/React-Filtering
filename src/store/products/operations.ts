import { AppDispatch } from "..";
import config from "../../config";
import { IProduct } from "../types";
import { productsSlice } from "./productsSlice";

const token= localStorage.getItem('token');

const getProducts = () => {
  return async (dispatch: AppDispatch) => {
    const { setProducts } = productsSlice.actions;

    try {
        const response = await fetch(
          `${config.baseUrl}/api/products-by-category/tv-1?Device-ID=56545`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
  
        if (!response.ok) {
          console.error('Failed to fetch workers:', await response.status);
          return;
        }
  
        const responseData = await response.json();
  
        dispatch(setProducts(responseData.products[0].product));

        console.log(responseData.products[0].product, "responseData");
      } catch (error) {
        console.log(error);
      }
  };

};

export const productsOp = { getProducts };
