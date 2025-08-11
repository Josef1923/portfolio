import logo from "./assets/logo1.svg";
import "./App.css";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <main>
        <img src={logo} className="App-logo" alt="logo" />
        <p>start building 11/08/2025</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
