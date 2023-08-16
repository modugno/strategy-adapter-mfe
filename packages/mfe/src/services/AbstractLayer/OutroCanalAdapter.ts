import HttpService from "../Externals/HttpService";
import { IAbstractLayer, IProduct, IProductRequest } from "./IAbstractLayer";

export interface ICanalContext {
  token: string
  data: {
    conta: string
    usuario: string
  }
}

export default class OutroCanalAdapter implements IAbstractLayer {
  http: HttpService

  constructor(context: ICanalContext) {
    this.http = new HttpService(context.token)
  }

  async getUser(): Promise<string> {
    return Promise.resolve('user_id')
  }

  async getProducts(): Promise<IProduct> {
    const user = await this.getUser()

    const response = await this.http.get<any>(`/products/${user}`)
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
