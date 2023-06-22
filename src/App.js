import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/Pages/About/About"
import Product from "./components/Pages/Products/Product";
import Gallery from "./components/Pages/Gallery/Gallery";
import Recipes from "./components/Pages/Recipes/Recipes";
import Contact from "./components/Pages/Contact/Contact"
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Recipes" element={<Recipes />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
