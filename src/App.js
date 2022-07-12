import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Let's drink some Mead!
        </p>
        <a
          className="App-link"
          href="https://carlzac.github.io/hidromiel-zacutti/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Skål!
        </a>
      </header>
    </div>
  );
}

export default App;
