import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(response => {
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
                <img src={props.src} className={props.className} alt={props.alt}/>
                <h1>Loading...</h1>
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