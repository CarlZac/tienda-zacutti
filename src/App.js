import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
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
