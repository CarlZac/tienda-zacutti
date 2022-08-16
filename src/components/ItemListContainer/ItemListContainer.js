import { useEffect, useState } from "react";
//import { getProductByCategory, getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from "firebase/firestore";
import { dataBase } from "../../services/firebase";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true);
        const collectionReference = !categoryId
        ? collection(dataBase, 'products')
        : query(collection(dataBase, 'products'), where('category', '==', categoryId));
        
        getDocs(collectionReference).then(res => {
            const prod = res.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(prod);
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