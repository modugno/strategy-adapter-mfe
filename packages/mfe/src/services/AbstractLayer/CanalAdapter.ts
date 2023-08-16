import HttpService from "../Externals/HttpService";
import { IAbstractLayer, IProduct, IProductRequest } from "./IAbstractLayer";

export interface ICanalContext {
  token: string
  data: {
    conta: string
  }
}

export default class CanalAdapter implements IAbstractLayer {
  http: HttpService

  constructor(context: ICanalContext) {
    this.http = new HttpService(context.token)
  }

  async getProducts(): Promise<IProduct> {
    const response = await this.http.get<any>('/products')
    return {
      id: response.data.produto_id,
      name: response.data.produto_name,
      price: response.data.produto_price,
    }
  }

  async registerProduct(productData: IProductRequest): Promise<IProduct> {
    const response = await this.http.post<any>('/products', productData)

    return {
      id: response.data.produto_id,
      name: response.data.produto_name,
      price: response.data.produto_price,
    }
  }
}
