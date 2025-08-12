import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import About from "./components/about/about.jsx";
import Work from "./components/work/work.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="App-header" />

        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
