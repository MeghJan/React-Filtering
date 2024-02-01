import React, { useState } from 'react'
import Heart from '../../assets/images/heart.png'
import HeartFilled from '../../assets/images/heart-filled.png'
import './product-item.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../store'
import { productSel } from '../../store/products'

export interface IProductItem {
    id: number,
    product_type: number,
    brand_id: number,
    online_price: number,
    product_name: string,
    li_product_id: number,
    online_selling_price: number,
    installing_price: number,
    thumbnail_image_source: string,
    media_ids: string,
    gift_ids: string,
    gift_count: number,
    guaranty: {
        en: string,
        ru: string,
        hy: string
    }
    cashback: number,
    status: number,
    gift_images: gift_images[],
    brand: brand,
    sticker: {},
    gallary_images_api: gallary_images_api
  }

  interface gift_images {
    product_id: number,
    image: string
  }

  interface brand {
    id: number,
    logo: string,
    name: string,
    slug: string
  }
  interface gallary_images_api {
        product_id: number,
        images_source: string,
        thum_image_sourc: string,
        media_id: number
  }

  interface ProductItemProps {
    product: IProductItem;
}

export const ProductItem = (props: ProductItemProps) => {
    const [showImageOne, setShowImageOne] = useState(true);
    const dispatch = useDispatch<AppDispatch>();
    const product = useSelector(productSel.productSelector);

 
    
    const toggleImage = () => {
        setShowImageOne((prev) => !prev);
    };

  return (
    product && (
    <div className="product-item">
        <div className="product-header">
            <a href="" className="brand"><img src={product.brand.logo} alt={product.brand.name} /></a>
            <button onClick={toggleImage}>
                {showImageOne ? (
                    <img src={Heart} alt="heart" />
                ) : (
                    <img src={HeartFilled} alt="heart filled" />
                )}
            </button>
        </div>
        <div className="product-image">
            <a href=""><img src={product.gallary_images_api.images_source} alt={product.gallary_images_api.thum_image_sourc} /></a>
        </div>
            <div className="product-body">
                <a href="">
                    <div className="category-name">{product.brand.name}</div>
                    <div className="product-name">{product.product_name}</div>
                    <div className="product-price">{product.online_price}</div>
                    <div className="product-price-month">{product.online_selling_price}</div>
                </a>
                <button className="cardBtn">Add to cart</button>

            </div>
        
        
    </div>
    )
  )
}
