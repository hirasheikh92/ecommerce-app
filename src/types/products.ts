export interface slugType {
    _type: string,
    current: string,
};

export interface assetImageType {
    _type: string,
    _ref: string,
};
  
  export interface imagesType {
    asset: assetImageType,
    _type: string,
    alt: string,
    _key: string,
}


export interface Productprops {
    productTypes: any;
    param: any;
    current: any;
    _id: string;
    price: number;
    name: string;
    totalPrice: number;
    quantity: number;
    subcat: string; userId: string;
    category: string;
    tags: string;
    url: string;
    slug: slugType;
    details: Array<string>;
    image: Array<imagesType>;
  
  
};
  
export interface CartItem {
    product: Productprops;
    qty: number;
  }
export interface responseType {
    response: Array<Productprops>
}
