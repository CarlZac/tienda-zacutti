import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './Contexts/CartContext';

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
              <Route path='/' element={<ItemListContainer intro="¡Bienvenido a la Tienda Hidromielera!" introClass="Title" src={logo} className="App-logo" alt="logo" />} />
              <Route path='/category/:categoryId' element={<ItemListContainer intro="Resulado por Categoría:" introClass="Title" />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<h3>Cart</h3>}/>
            </Routes>
          </main>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
