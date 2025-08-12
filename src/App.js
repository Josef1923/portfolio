import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import About from "./components/about/about.jsx";
import Work from "./components/work/work.jsx";

function App() {
  return (
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
  );
}

export default App;
