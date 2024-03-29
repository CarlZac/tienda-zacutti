import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/CartContainer/CartContainer';
import Form from './components/Form/Form';
import { CartContextProvider } from './Contexts/CartContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header className="App-header">
            <Navbar />
          </header>
          <main className='Main'>
            <Routes>
              <Route path='/' element={<ItemListContainer intro="¡Bienvenido a la Tienda Hidromielera!" introClass="Title" src='/images/logo.svg' className="App-logo" alt="logo" />} />
              <Route path='/category/:categoryId' element={<ItemListContainer introClass="Title" intro="Resulado por Categoría:" />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer introClass="Title" src='/images/logo.svg' className="App-logo" alt="logo" />} />
              <Route path='/cart' element={<CartContainer />} />
              <Route path='/order' element={<Form />} />
            </Routes>
          </main>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
