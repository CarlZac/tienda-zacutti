import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';

function App() {

  const handleOnAdd = (quantity) => {
    alert('Se agregaron ' + quantity + ' productos al Carrito!');
    console.log('Se agregaron ' + quantity + ' productos al Carrito!');
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo"/>
        <Counter stock={10} initial={0} onAdd={handleOnAdd}/>
        <ItemListContainer 
          intro="Let's drink some Mead!"
          introClass="Title"
          linkClass="App-link"
          link="https://carlzac.github.io/hidromiel-zacutti/index.html"
          message="Skål!"
          />
      </header>
    </div>
  );
}

export default App;
