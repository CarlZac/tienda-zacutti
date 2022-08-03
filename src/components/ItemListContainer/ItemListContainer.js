import { useEffect, useState } from "react";
import { getProductByCategory, getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductByCategory : getProducts

        asyncFunction(categoryId).then(response => {
            setProducts(response);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        })
    }, [categoryId])

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
            <h1 className={props.introClass}>{props.intro}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;