import './Form.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../Contexts/CartContext';

import { addDoc, collection, getDocs, Timestamp, query, where, documentId, writeBatch } from 'firebase/firestore';
import { dataBase } from '../../services/firebase';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const Form = () => {
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cel, setCel] = useState();

  const { cart, getFinalPrice, resetCart } = useContext(CartContext)
  const total = getFinalPrice()

  const onSubmit = async () => {
    try {
      if (!name || !email || !cel) {
        MySwal.fire({
          title: 'Todos los datos son necesarios para la orden!',
          icon: 'error',
          background: '#242323',
          color: '#FFFFF0',
        });
      } else {
        if (cart.length > 0) {
          const celNumber = parseInt(cel)
          const dataBaseRef = collection(dataBase, 'products')
          const ordersRef = collection(dataBase, 'orders')
          const cartIds = cart.map(product => product.id)
          const noStock = []
          const myBatch = writeBatch(dataBase)
          const clientInfo = {
            client: {
              name: name,
              email: email,
              phone: celNumber
            },
            items: cart,
            total,
            date: Timestamp.fromDate(new Date())
          }

          const productsInCart = await getDocs(query(dataBaseRef, where(documentId(), 'in', cartIds)))
          const { docs } = productsInCart
          docs.forEach(product => {
            const data = product.data()
            const dataBaseStock = data.stock

            const products = cart.find(doc => doc.id === product.id)
            const productsQuantity = products?.quantity

            if (dataBaseStock >= productsQuantity) {
              myBatch.update(product.ref, { stock: dataBaseStock - productsQuantity })
            } else {
              noStock.push({ id: product.id, ...data })
            }
          })
          if (noStock.length === 0) {
            const addOrder = await addDoc(ordersRef, clientInfo)
            const idOrder = addOrder.id
            myBatch.commit()
            MySwal.fire({
              title: '¡Muchas Gracias por tu Compra! El Id de tu compra es ' + idOrder,
              icon: 'success',
              text: 'Te eviaremos un WhatsApp al número ingresado para coordinar la entrega y el pago.',
              background: '#242323',
              color: '#FFFFF0'
            })
            setName('');
            setEmail('');
            setCel('');
            resetCart();
            navigate('/', { replace: true });
          } else {
            MySwal.fire({
              title: 'Error! Uno de los productos está fuera de Stock.',
              icon: 'warning',
              background: '#242323',
              color: '#FFFFF0',
            });
          }
        } else {
          MySwal.fire({
            title: '¡Tu carrito está vacío!',
            icon: 'question',
            text: 'Volvé a la Tienda a sumar algunas botellas.',
            background: '#242323',
            color: '#FFFFF0'
          });
        }
      }
    } catch (error) {
      MySwal.fire({
        title: error,
        icon: 'error',
        background: '#242323',
        color: '#FFFFF0',
      })
    }
  }

  return (
    <div>
      <h1 className="formTitle">¡Generá tu orden de Compra!</h1>
      <div className="form">
        <form>
          <div className="form">
            <label htmlFor="name" className="formLabel">Name</label>
            <input type="text" id="name" className="formInput" required="text" value={name} onInput={(evt) => setName(evt.target.value)} />
          </div>
          <div className="form">
            <label htmlFor="email" className="formLabel">E-mail</label>
            <input type="email" id="email" className="formInput" required="email" value={email} onInput={(evt) => setEmail(evt.target.value)} />
          </div>
          <div className="form">
            <label htmlFor="phone" className="formLabel">Phone</label>
            <input type="phone" id="phone" className="formInput" required="tel" value={cel} onInput={(evt) => setCel(evt.target.value)} />
          </div>
          <div>
            <button className="formBtn" type="button" value="Submit" onClick={onSubmit}>Enviar Orden</button>
            <Link to='/cart' className='formBtn'>Atrás</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form;
