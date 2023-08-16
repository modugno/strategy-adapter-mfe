import { NativeService } from "../Externals/NativeService";
import { IAbstractLayer, IProduct, IProductRequest } from "./IAbstractLayer";

export default class WebviewAdapter implements IAbstractLayer {
  native: NativeService

  constructor() {
    this.native = new NativeService()
  }

  async getProducts(): Promise<IProduct> {
    const response = await this.native.request({
      id: 'get_products'
    })

    return {
      id: response.data.product_id,
      name: response.data.product_name,
      price: response.data.product_price,
    }
  }

  async registerProduct(productData: IProductRequest): Promise<IProduct> {
    const response = await this.native.request({
      id: 'get_products',
      request: productData
    })

    return {
      id: response.data.product_id,
      name: response.data.product_name,
      price: response.data.product_price,
    }
  }
}
