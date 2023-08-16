type Response<T> = {
  data: T
}

export default class HttpService {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  async get<T>(endpoint: string): Promise<Response<T>> {
    console.log(this.token, endpoint)
    const response = {
      data: {
        produto_id: 1,
        produto_name: 'product',
        produto_price: 1200,
      } as T
    }

    return Promise.resolve(response)
  }

  async post<T>(endpoint: string, data: Record<string, any>): Promise<Response<T>> {
    console.log(this.token, endpoint, data)
    const response = {
      data: {
        produto_id: 1,
        produto_name: 'product',
        produto_price: 1200,
      } as T
    }

    return Promise.resolve(response)
  }
}
