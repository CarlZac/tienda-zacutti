import { useEffect, useState } from "react";
import { getProduct } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProduct().then(response => {
      setProducts(response);
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  if(loading) {
    return (
      <div>
        
      </div>
    )
  }

  return (
    <div>
      <ItemDetail key={products.id} product={products}/>
    </div>
  )
}

export default ItemDetailContainer;