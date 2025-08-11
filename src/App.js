import logo from './assets/logo1.svg';
import './App.css';
import Header from './components/header/header.jsx';

function App() {
  return (
    <div className="App">
      <Header className="App-header">
      </Header>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        JOSEF SCHERER (start building 11/08/2025)
      </p>

    </div>
  );
}

export default App;
