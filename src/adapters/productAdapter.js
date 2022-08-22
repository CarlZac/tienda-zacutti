export const prodAdapterFirestore = (doc) => {
  const data = doc.data()
  const productAdapted = {
    id: doc.id,
    name: data.name,
    img: data.img,
    price: data.price,
    stock: data.stock,
    vol: data.vol,
    category: data.category,
    description: data.description
  }

  return productAdapted
}
