import ItemList from "../ItemList/ItemList";

import { useParams } from 'react-router-dom';
import { useAsyncFn } from "../../hooks/useAsync";
import { fetcher } from "../../utils/fetcher";
import { getProducts } from "../../services/firebase/firestore";

const ItemListContainer = (props) => {
  const { categoryId } = useParams()

  const { isLoading, data, error } = useAsyncFn(fetcher(getProducts, categoryId), [categoryId])

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
      <h1 className={props.introClass}>{props.intro}</h1>
      <ItemList products={data} />
    </div>
  )
}

export default ItemListContainer;
