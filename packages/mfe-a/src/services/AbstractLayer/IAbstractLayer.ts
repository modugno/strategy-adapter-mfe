export interface IProduct {
  id: string
  name: string
  price: number
}

export type IProductRequest = Omit<IProduct, 'id'>

export interface IAbstractLayer {
  getProducts(): Promise<IProduct>;
  registerProduct(productData: IProductRequest): Promise<IProduct>;
}

