import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className='Main'>
      <ItemListContainer 
          intro="Let's drink some Mead!"
          introClass="Title"
          src={logo}
          className="App-logo"
          alt="logo"
        />
      <ItemDetailContainer/>
      </main>
    </div>
  );
}

export default App;
