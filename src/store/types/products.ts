export interface IProduct {
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
    sticker: {
        
    }[],
    gallary_images_api: gallary_images_api
  }

  export interface gift_images {
    product_id: number,
    image: string
  }

  export interface brand {
    id: number,
    logo: string,
    name: string,
    slug: string
  }
  export interface gallary_images_api {
        product_id: number,
        images_source: string,
        thum_image_sourc: string,
        media_id: number
  }

  export interface IInitialProducts {
    productsList: IProduct[];
    product: IProduct | null;
  }
  