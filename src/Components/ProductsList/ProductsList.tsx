import React, { useEffect } from 'react'
import "./product-list.css"
import { IProductItem, ProductItem } from '../../Components/ProductItem/ProductItem'

import { productSel, productsOp } from '../../store/products'
import { AppDispatch } from '../../store'
import { useDispatch, useSelector } from 'react-redux'

const data = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        priceMonth: 10,
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        brand: "Brand 1",
        categoryName: "Category 1",
        productName: "Product 1",
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        priceMonth: 20,
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        brand: "Brand 2",
        categoryName: "Category 2",
        productName: "Product 2",
    },
    {
        id: 3,
        name: "Product 3",
        price: 300,
        priceMonth: 30,
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        brand: "Brand 2",
        categoryName: "Category 2",
        productName: "Product 2",
    },
]

export const ProductsList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector(productSel.productsListSelector);
    const product = useSelector(productSel.productSelector);

    console.log(products, "products");
    
    useEffect(() => {
        dispatch(productsOp.getProducts());
    }, [dispatch]);


  return (
    <div className="products-list">
        <h1>Products list:</h1>
        {products.map((productItem: IProductItem) => (
            <ProductItem 
                key={productItem.id}
                product={productItem}
            />
        ))}
    </div>
  )
}
