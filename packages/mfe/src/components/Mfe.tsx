import { useEffect, useState } from 'react'
import './Mfe.css'
import { IProduct } from '../services/AbstractLayer/IAbstractLayer'
import { useCommunication } from '../context/Communication'

function Mfe() {
  const [product, setProduct] = useState<IProduct>()
  const communication = useCommunication()

  useEffect(() => {
    communication.getProducts().then(setProduct)
  }, [communication])

  return (
    <>
      {product && (
        <>
          <p>ID: {product.id}</p>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
        </>
      )}
    </>
  )
}

export default Mfe
