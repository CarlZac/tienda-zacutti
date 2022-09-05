import ItemDetail from "../ItemDetail/ItemDetail";
import { useAsyncFn } from "../../hooks/useAsync";
import { fetcher } from "../../utils/fetcher";

import { useParams } from 'react-router-dom';
import { getProductById } from "../../services/firebase/firestore";

const ItemDetailContainer = (props) => {
  const { productId } = useParams()

  const { isLoading, data, error } = useAsyncFn(fetcher(getProductById, productId), [productId])

  if (isLoading) {
    return (
      <div>
        <img src={props.src} className={props.className} alt={props.alt} />
        <h1 className="Title">Loading...</h1>
      </div>
    )
  }

  if(error) {
    return <img src='/image/error-404.png' alt="error"/>
  }

  return (
    <div>
      <ItemDetail {...data} />
    </div>
  )
}

export default ItemDetailContainer;
