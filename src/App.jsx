import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero";
import Collection from "./Components/Collection";
import About from "./Components/About";
import MW from "./Components/MW";
import Bests from "./Components/bestsellers";
import Footer from "./Components/footer";
import Produtos from "./Pages/selectedProduct";

function App() {
  return (
    <Router>  {/* Aqui é onde o Router é definido */}
      <div>
        <Hero />
        <Collection />
        <About />
        <MW />
        <Bests />
        <Footer />
        <Routes>
          <Route path="/product" element={<Produtos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
