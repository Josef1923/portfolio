import "./App.css";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import About from "./components/about/about.jsx";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
