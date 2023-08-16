type Response = {
  id: string
  request?: any
  data: any
}

const nativeMock: Response[] = [
  {
    id: 'get_products',
    data: {
      product_id: 1,
      product_name: 'Produto',
      product_price: 1200.00
    }
  },
  {
    id: 'post_products',
    request: {},
    data: {
      product_id: 2,
      product_name: 'Novo Produto',
      product_price: 500.00
    }
  }
]

export class NativeService {
  nativeMock: typeof nativeMock

  constructor() {
    this.nativeMock = nativeMock
  }

  request(props: { id: string, request?: any }): Promise<Response> {
    const item = nativeMock.find(item => item.id === props.id)
    return new Promise((resolve, reject) => {
      if (!item) {
        reject('Erro')
      } else {
        resolve(item)
      }
    })
  }
}
