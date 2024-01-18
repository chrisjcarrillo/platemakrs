export interface IShopifyVariant{
    available?: boolean,
    id?: string,
    title?: string,
    price?: IShopifyPrice,
    image?: IShopifyImage
}

export interface IShopifyPrice{
    amount: string,
    currencyCode: string,
}

export interface IShopifyImage{
    id: string,
    src: string,
    width: number,
    height: number
}