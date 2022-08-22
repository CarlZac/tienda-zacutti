import { getDocs, collection, query, where, getDoc, doc } from "firebase/firestore"
import { prodAdapterFirestore } from '../../adapters/productAdapter'
import { dataBase } from "./index"


export const getProducts = (category) => {
  const collectionRef = category
  ? query(collection(dataBase, 'products'), where('category', '==', category))
  : collection(dataBase, 'products');

  return getDocs(collectionRef).then(response => {
    const products = response.docs.map(doc => {
      return prodAdapterFirestore(doc)
    })
    return products
  }).catch(error => {
    return error
  })
}

export const getProductById = (id) => {
  return getDoc(doc(dataBase, 'products', id)).then(response => {
    const data = response.data()
    const product = { id: response.id, ...data }
    return product
  }).catch(error => {
    return error
  })
}
