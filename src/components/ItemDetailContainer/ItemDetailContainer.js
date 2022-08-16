import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import { dataBase } from "../../services/firebase";


const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState()
  const { productId } = useParams()
  const [ loading, setLoading ] = useState(true)
  
  useEffect(() => {
    getDoc(doc(dataBase, 'products', productId)).then(res => {
      const prod = { id: res.id, ...res.data()}
      setProduct(prod);
    }).catch(error => {
      console.log(error);
    }).finally(() => {
      setLoading(false);
    });
  }, [productId])

  if(loading) {
    return (
        <div>
            <img src={props.src} className={props.className} alt={props.alt}/>
            <h1 className="Title">Loading...</h1>
        </div>
        )
}

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer;