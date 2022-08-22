import { useState, createContext } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addProduct = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart([...cart, productToAdd])
    } else {
      const newCartState = cart.map(product => {
        if (product.id === productToAdd.id) {
          const newProduct = {
            ...product,
            quantity: productToAdd.quantity
          }
          return newProduct
        } else {
          return product
        }
      })
      setCart(newCartState)
    }
  }

  const isInCart = (id) => {
    return cart.some(product => product.id === id)
  }

  const removeProduct = (id) => {
    const newCartState = cart.filter(product => product.id !== id)
    setCart(newCartState)
  }

  const getQuantity = () => {
    let accu = 0;
    cart.forEach(product => {
      accu += product.quantity
    });
    
    return accu;
  }

  const getProductQuantity = (id) => {
    const product = cart.find(product => product.id === id)
    if (product?.quantity === undefined || product?.quantity < 0) {
      return 0
    } else {
      return product.quantity
    }
  }

  const resetCart = () => {
    setCart([])
  }

  const getFinalPrice = () => cart.reduce((finalPrice, product) => (finalPrice += product.quantity * product.price), 0);

  return (
    <CartContext.Provider value={{ cart, addProduct, isInCart, removeProduct, resetCart, getQuantity, getProductQuantity, getFinalPrice }}>
      {children}
    </CartContext.Provider>
  )
}
