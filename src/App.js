import { BrowserRouter , Routes , Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Contact from "./Pages/Contact/Contact";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";
import ZahraProduct from "./Pages/ProductsPage/ZahraProduct";
function App() {
  return (
    <div className="App">
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/products" element={<ProductsPage />} />



      </Routes>
    </BrowserRouter>

    

    </div>
  );
}

export default App;
