import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ItemListContainer 
          intro="Let's drink some Mead!"
          introClass="Title"
          src={logo}
          className="App-logo"
          alt="logo"
          />
      </header>
    </div>
  );
}

export default App;
